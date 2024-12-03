import React from 'react';
import Task from './task';
import { useDrop } from 'react-dnd';
import { useRef, useState } from 'react';

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

    const[isHovered, setIsHovered] = useState(false);

    const [{isOver}, drop] = useDrop({
        accept: "TASK",
        drop: (item : Task) => onTaskDrop(item, title),
        collect: (monitor) => ({
          isOver: monitor.isOver(),  
        }),
    })    

    React.useEffect(() => {
        setIsHovered(isOver); // Update hover state when isOver changes
      }, [isOver]);

    drop(ref);

    return (
        <div ref={ref} className={`flex-1 kanban-list w-full p-2 hover:scale-105 transition-all duration-300  ${
            isHovered ? "scale-110" : "bg-white"
          }`}>
            <h2 className='text-[clamp(1.5rem,5vw,4rem)] font-sf-pro-bold  text-center'>{title}</h2>
            <hr/>
            <div className='kanban-container pt-1 mt-2  '>
                    {tasks.map((task) => (
                        <div 
                            key = {task.id} 
                        >
                            <Task {...task}></Task>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default List