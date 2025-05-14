﻿namespace SmartTasks.Domain.Entities;

public class TaskItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? DueDate { get; set; }
    public TaskStatus Status { get; set; }
}

public enum TaskStatus
{
    Pending,
    InProgress,
    Completed
}
