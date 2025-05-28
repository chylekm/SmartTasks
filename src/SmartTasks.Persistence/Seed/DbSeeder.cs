using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SmartTasks.Domain.Entities;
using SmartTasks.Persistence.Seed;

namespace SmartTasks.Persistence;

public static class DbSeeder
{
    public static async Task SeedAllAsync(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();

        var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        var config = scope.ServiceProvider.GetRequiredService<IConfiguration>();

        await RoleSeeder.SeedRolesAsync(roleManager);
        await UserSeeder.SeedAdminUserAsync(userManager, config);
    }
}
