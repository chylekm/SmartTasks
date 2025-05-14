using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SmartTasks.Infrastructure.Mongo.Configuration;

namespace SmartTasks.Infrastructure.Mongo.Audit;

public class AuditLogService : IAuditLogService
{
    private readonly IMongoCollection<AuditEntry> _collection;

    public AuditLogService(IOptions<MongoSettings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        var database = client.GetDatabase(settings.Value.Database);
        _collection = database.GetCollection<AuditEntry>("AuditLog");
    }

    public async Task LogAsync(AuditEntry entry)
    {
        await _collection.InsertOneAsync(entry);
    }
}
