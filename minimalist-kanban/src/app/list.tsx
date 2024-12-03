import React from 'react';
import Task from './task';
import { useDrop } from 'react-dnd';
import { useRef } from 'react';

interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
  }

interface ListProps{
    title: string;
    tasks: Task[];
    onTaskDrop: (task: Task, listTitle: string) => void;
}

const List: React.FC<ListProps> = ({title, tasks, onTaskDrop}) => {

    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: "TASK",
        drop: (item : Task) => onTaskDrop(item, title)
    })    

    drop(ref);

    return (
        <div ref={ref} className='flex-1 kanban-list w-full p-4 hover:scale-110 transition-all duration-300 '>
            <h2 className='text-[clamp(1.5rem,5vw,4rem)] font-sf-pro-bold  text-center'>{title}</h2>
            <hr/>
            <div className='kanban-container p-2 mt-2  '>
                    {tasks.map((task) => (
                        <div 
                            key = {task.id} 
                            className='kanban-task border p-2 mt-2 rounded-xl hover:shadow-lg transition-all duration-300'
                        >
                            <Task {...task}></Task>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default List