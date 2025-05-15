# 🧠 SmartTasks – Modular .NET 9 Backend Template

SmartTasks is a modern backend application in the **Task Manager** domain, designed to:
- manage tasks (CRUD, filter, priorities),
- integrate with AI,
- audit operations using MongoDB,
- and serve as a reusable backend template for future .NET projects.

---

## 🚀 Features

- ✅ JWT-based user registration and login
- ✅ Create, update, delete and filter tasks
- ✅ CQRS with MediatR + FluentValidation
- ✅ Centralized error handling with Result/Error + Middleware
- ✅ MongoDB operation audit trail (planned)
- ✅ Ready for CI/CD, Docker, Azure deployment

---

## 🧱 Solution Structure

```
SmartTasks.API/               ← entry point (Web API)
SmartTasks.Application/       ← application logic (CQRS, DTOs, validation)
SmartTasks.Domain/            ← domain entities, enums, value objects
SmartTasks.Infrastructure/    ← JWT, Mongo, AI, external services
SmartTasks.Persistence/       ← EF Core + SQL Server + repositories
SmartTasks.Tests.Unit/        ← unit tests
SmartTasks.Tests.Integration/ ← integration tests
```

---

## 📦 Technologies

- .NET 9 + C# 13 (preview)
- Clean Architecture
- MediatR (CQRS, pipeline behaviors)
- FluentValidation
- Entity Framework Core 9
- SQL Server (relational DB)
- MongoDB (audit logs, NoSQL)
- JWT Authentication + Role-based access
- Swagger + Bearer Token
- Docker + Docker Compose
- Result/Error pattern + ExceptionMiddleware
- Unit of Work + Repository Pattern

---

## ✅ Current Features

| Area                        | Status     |
|----------------------------|------------|
| Architecture               | ✅ Clean Architecture (5-layered) |
| CQRS with MediatR          | ✅ `CreateTaskHandler`, pipeline validation |
| FluentValidation           | ✅ Integrated via pipeline |
| SQL Server + EF Core 9     | ✅ Configured and Docker-ready |
| MongoDB                    | ✅ Connected and audit-ready |
| JWT + Swagger              | ✅ Auth works with Swagger |
| Error Handling             | ✅ Middleware + Result/Error |
| Docker                     | ✅ Dockerfile + docker-compose.yml |
| Unit of Work               | ✅ Implemented with EF |
| Dependency Injection       | ✅ Using `AddMediatR(typeof(...).Assembly)` |

---

## 🛠️ CQRS Example (Tasks)

```
SmartTasks.Application/
└── Tasks/
    └── Commands/
        └── CreateTask/
            ├── CreateTaskCommand.cs
            ├── CreateTaskHandler.cs
            └── CreateTaskValidator.cs
```

---

## 🧩 Planned Extensions

- Queries: `GetTaskById`, `GetAllTasks`
- Mongo audit log (event sourcing)
- Unit tests for handlers and validators (xUnit + Moq/FakeItEasy)
- Integration tests (SQLite InMemory / TestContainers)
- Health checks (`/health`)
- Email registration confirmation
- Queues (Azure Queue / RabbitMQ)
- AI for task and subtask generation
- OpenAPI client + endpoint documentation
- CI/CD with GitHub Actions / Azure Pipelines
- Admin panel (Blazor or SPA)

---

## ▶️ Run locally (Docker)

```bash
docker-compose up --build
```

---

## 🚫 License

This project is **strictly proprietary**.  
You are **not allowed** to copy, use, distribute, or modify any part of this codebase without explicit written permission from the author.

---

## 📫 Contact

This project is a base architecture for personal and professional use cases.  
For questions, reach out via GitHub Issues.
