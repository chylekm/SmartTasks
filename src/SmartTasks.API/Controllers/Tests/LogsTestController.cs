using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartTasks.Infrastructure.Mongo.Audit;

namespace SmartTasks.API.Controllers.Tests
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsTestController : ControllerBase
    {
        /// <summary>
        /// Logs test controller
        /// </summary>
        /// <returns>Logs.</returns>
        [Authorize(Roles = "Admin")]
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
