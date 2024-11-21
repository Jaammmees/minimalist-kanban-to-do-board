import React from "react";

interface TaskProps {
    id: string;
    title: string;
    description: string;
    dueDate: string;
}

const Task : React.FC<TaskProps> = ({id, title, description, dueDate}) => {
    return (
        <div className = "task-card">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-xs text-gray-500">Due: {dueDate}</p>
        </div>
    );
};

export default Task;