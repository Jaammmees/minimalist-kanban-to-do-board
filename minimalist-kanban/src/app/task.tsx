import React, { useRef } from "react";
import { useDrag } from "react-dnd";


interface TaskProps {
    id: string;
    title: string;
    description: string;
    dueDate: string;
}

const Task : React.FC<TaskProps> = ({id, title, description, dueDate}) => {

    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag] = useDrag({

        type: "TASK",
        item: {id, title, description, dueDate},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })

    })

    drag(ref);

    return (
        <div ref={ref} className = "task-card" draggable>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-xs text-gray-500">Due: {dueDate}</p>
        </div>
    );
};

export default Task;