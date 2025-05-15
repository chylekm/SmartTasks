using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SmartTasks.Infrastructure.Mongo.Audit;

public class AuditEntry
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    public string Action { get; set; } = string.Empty;
    public string PerformedBy { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}