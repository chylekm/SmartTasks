using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTasks.Application.Interfaces;
public interface IUnitOfWork
{
    ITaskRepository Tasks { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}