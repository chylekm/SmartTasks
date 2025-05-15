using MediatR;
using SmartTasks.Application.Common.Results;
using SmartTasks.Application.Interfaces;
using SmartTasks.Domain.Entities;
using TaskStatus = SmartTasks.Domain.Enums.TaskStatus;

namespace SmartTasks.Application.Tasks.Commands.CreateTask;
public class CreateTaskHandler : IRequestHandler<CreateTaskCommand, Result<Guid>>
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<Result<Guid>> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
    {
        var task = new TaskItem
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            CreatedAt = DateTime.UtcNow,
            DueDate = request.DueDate,
            Status = TaskStatus.Pending
        };

        await _unitOfWork.Tasks.AddAsync(task);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return Result<Guid>.Success(task.Id);
    }
}