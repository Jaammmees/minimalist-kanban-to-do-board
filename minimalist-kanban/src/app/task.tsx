import React, { useRef, useEffect } from "react";
import { useDrag } from "react-dnd";


interface TaskProps {
    id: string;
    title: string;
    description: string;
    dueDate: string;
}

const Task : React.FC<TaskProps> = ({id, title, description, dueDate}) => {

    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag, preview] = useDrag({

        type: "TASK",
        item: {id, title, description, dueDate},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        previewOptions: {
            captureDraggingState: true,
        },

    })

    useEffect(() => {
        if (isDragging && ref.current) {
          const monitor = ref.current;
          monitor.style.opacity = "1"; // Ensure no transparency during dragging
        }
      }, [isDragging]);

    drag(ref);

    return (
        <div ref={ref} style={{ opacity: isDragging ? 1 : 1 }} className='kanban-task border p-4 mt-2 rounded-xl hover:shadow-lg transition-all duration-300' draggable>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-xs text-gray-500">Due: {dueDate}</p>
        </div>
    );
};

export default Task;