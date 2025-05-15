using MediatR;
using SmartTasks.Application.Common.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTasks.Application.Tasks.Commands.CreateTask;
public record CreateTaskCommand(string Title, DateTime? DueDate) : IRequest<Result<Guid>>;
