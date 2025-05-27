# 🚀 SmartTasks – Project Summary

## Demo 
API: https://smarttasks-api.greenglacier-3bbc9f6f.westeurope.azurecontainerapps.io/
UI: https://smarttasks-ui.greenglacier-3bbc9f6f.westeurope.azurecontainerapps.io/

## 🎯 Project Purpose

SmartTasks is a modern backend task manager application designed to fulfill several core objectives:

1. **Task management**: add, edit, delete, filter, and prioritize tasks.
2. **User authentication and authorization** with JWT and roles.
3. **AI integration** (planned): generate task suggestions, subtasks, and analyze priorities.
4. **Audit logging to MongoDB**: track who did what and when.
5. **Template for .NET projects** following clean architecture, DevOps, and security best practices.

## 🧱 Architecture

- Clean Architecture (layers: API, Application, Domain, Infrastructure, Persistence)
- CQRS + MediatR + FluentValidation
- MongoDB (Cosmos DB with Mongo API)
- SQL Server as relational storage
- JWT authentication
- Audit logging via AuditLogService

## ⚙️ Technologies & Tools

### Backend

- .NET 8 Web API (C#)
- Entity Framework Core (SQL)
- MongoDB Driver (Cosmos DB)
- FluentValidation, MediatR, xUnit

### DevOps & Cloud

- Azure Container Apps (hosting)
- Azure Container Registry (Docker image storage)
- Azure SQL Database
- Azure Cosmos DB (Mongo API)
- Azure Key Vault (connection string storage)
- GitHub Actions (CI/CD automation)
- Docker + Dockerfile
- Bicep (Infrastructure as Code)

## 🔐 Security

- JWT Bearer Authentication
- Secrets stored in Azure Key Vault
- Managed Identity for secure Container App ↔ Key Vault access
- Swagger with JWT authorization

## 🚀 CI/CD (GitHub Actions)

- Auto-deploy on push to `main`
- Build & test .NET project
- Build and push Docker image to ACR
- Infrastructure deployment via Bicep
- Automatic Azure Container App image update

## 🗃️ Databases

- **SQL Server**: provisioned automatically via Bicep
- **MongoDB (Cosmos DB)**:
  - Manually created on Free Tier (RU-based OLTP)
  - Connection string stored as `MongoConnectionString` in Key Vault
  - Uses port 10255 with SSL, retrywrites=false

## 🧪 Testing

- Unit tests (xUnit)
- Automatically executed in CI (GitHub Actions)

## 🛠️ Debugging & Maintenance

- Port 80 configured for Azure Container Apps (via Dockerfile and Kestrel)
- `/` endpoint redirects to `/swagger`
- Auto-configured Swagger UI
- Logs accessible via `az containerapp logs show`

## ✅ Final Status

- Application deployed and running in Azure (Container App)
- Full CI/CD pipeline in GitHub Actions
- Public API with Swagger documentation
- Secure connections to MongoDB and SQL via Key Vault
- Project ready for UI integration, monitoring, alerting, or microservice expansion

---

Want me to generate a development roadmap, add a frontend (e.g. Angular), or implement AI integration?