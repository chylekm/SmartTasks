using Microsoft.EntityFrameworkCore;
using SmartTasks.Domain.Entities;

namespace SmartTasks.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<TaskItem> Tasks => Set<TaskItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TaskItem>().HasKey(t => t.Id);
        base.OnModelCreating(modelBuilder);
    }
}
