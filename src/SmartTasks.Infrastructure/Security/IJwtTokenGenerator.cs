namespace SmartTasks.Infrastructure.Security;
public interface IJwtTokenGenerator
{
    string GenerateToken(string userId, string email, IEnumerable<string>? roles = null);
}