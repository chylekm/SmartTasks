using Microsoft.AspNetCore.Identity;

namespace SmartTasks.Domain.Entities;
public class ApplicationUser : IdentityUser
{
 
    public string? FullName { get; set; }
}