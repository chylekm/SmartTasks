﻿namespace SmartTasks.Infrastructure.Mongo.Configuration;

public class MongoSettings
{
    public string ConnectionString { get; set; } = string.Empty;
    public string Database { get; set; } = string.Empty;
}