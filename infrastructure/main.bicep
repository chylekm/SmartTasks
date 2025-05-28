param location string = resourceGroup().location

var acrName = 'smarttasksacr'
var containerAppName = 'smarttasks-api'
var containerAppUIName = 'smarttasks-ui'
var containerAppEnvName = 'smarttasks-env'

resource acr 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
  name: acrName
  location: location
  sku: {
    name: 'Basic'
  }
  properties: {
    adminUserEnabled: true
  }
}

resource containerAppEnv 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: containerAppEnvName
  location: location
  properties: {
    daprAIInstrumentationKey: ''
  }
}

resource containerAppIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'smarttasks-app-identity'
  location: location
}

resource acrRoleAssignment 'Microsoft.Authorization/roleAssignments@2020-10-01-preview' = {
  name: guid(containerAppIdentity.id, 'acrpull')
  scope: acr
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '7f951dda-4ed3-4680-a7ca-43fe172d538d')
    principalId: containerAppIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
  dependsOn: [acr, containerAppIdentity]
}

resource containerApp 'Microsoft.App/containerApps@2023-05-01' = {
  name: containerAppName
  location: location
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${containerAppIdentity.id}': {}
    }
  }
  properties: {
    managedEnvironmentId: containerAppEnv.id
    configuration: {
      ingress: {
        external: true
        targetPort: 80
        transport: 'auto'
      }
      registries: [
        {
          server: acr.properties.loginServer
          identity: containerAppIdentity.id
        }
      ]
    }
    template: {
      containers: [
        {
          name: containerAppName
          image: '${acr.properties.loginServer}/${containerAppName}:latest'
          env: [
            {
              name: 'ConnectionStrings__SqlDb'
              value: '@Microsoft.KeyVault(SecretUri=https://smarttasks-kv.vault.azure.net/secrets/SqlConnectionString/)'
            }
            {
              name: 'ConnectionStrings__MongoDb'
              value: '@Microsoft.KeyVault(SecretUri=https://smarttasks-kv.vault.azure.net/secrets/MongoConnectionString/)'
            }
          ]
        }
      ]
    }
  }
}

resource containerAppUI 'Microsoft.App/containerApps@2023-05-01' = {
  name: containerAppUIName
  location: location
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${containerAppIdentity.id}': {}
    }
  }
  properties: {
    managedEnvironmentId: containerAppEnv.id
    configuration: {
      ingress: {
        external: true
        targetPort: 80
        transport: 'auto'
      }
      registries: [
        {
          server: acr.properties.loginServer
          identity: containerAppIdentity.id
        }
      ]
    }
    template: {
      containers: [
        {
          name: containerAppUIName
          image: '${acr.properties.loginServer}/${containerAppUIName}:latest'
        }
      ]
    }
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' existing = {
  name: 'smarttasks-kv'
}

resource accessPolicy 'Microsoft.KeyVault/vaults/accessPolicies@2022-07-01' = {
  name: '${keyVault.name}/add'
  properties: {
    accessPolicies: [
      {
        tenantId: subscription().tenantId
        objectId: containerAppIdentity.properties.principalId
        permissions: {
          secrets: [
            'get'
          ]
        }
      }
    ]
  }
  dependsOn: [
    containerAppIdentity
    keyVault
  ]
}