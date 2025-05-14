using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartTasks.Infrastructure.Mongo.Audit;

namespace SmartTasks.API.Controllers.Tests
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsTestController : ControllerBase
    {
        [HttpPost("log-test")]
        public async Task<IActionResult> LogTest([FromServices] IAuditLogService audit)
        {
            await audit.LogAsync(new AuditEntry
            {
                Action = "Test",
                PerformedBy = "Dev"
            });

            return Ok("Zalogowano do Mongo");
        }
    }
}
