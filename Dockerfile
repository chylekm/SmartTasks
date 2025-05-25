# base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "SmartTasks.sln"
RUN dotnet build "src/SmartTasks.API/SmartTasks.API.csproj" -c Release -o /app/build
RUN dotnet publish "src/SmartTasks.API/SmartTasks.API.csproj" -c Release -o /app/publish

# final
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:80

ENTRYPOINT ["dotnet", "SmartTasks.API.dll"]
