import React from 'react';
import Task from './task';

interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
  }

interface ListProps{
    title: string;
    tasks: Task[]
}

const List: React.FC<ListProps> = ({title, tasks}) => {
    return (
        <div className='flex-1 kanban-list w-full p-4 hover:scale-110 transition-all duration-300 '>
            <h2 className='text-[clamp(1.5rem,5vw,4rem)] font-sf-pro-bold  text-center'>{title}</h2>
            <hr></hr>
            <div className='kanban-container p-2 mt-2  '>
                    {tasks.map((task) => (
                        <div key = {task.id} className='kanban-task border p-2 mt-2 rounded-xl hover:shadow-lg transition-all duration-300'>
                            <Task id={task.id} title={task.title} description={task.description} dueDate={task.dueDate}></Task>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default List