namespace SmartTasks.Infrastructure.Mongo.Audit;

public interface IAuditLogService
{
    Task LogAsync(AuditEntry entry);
}
