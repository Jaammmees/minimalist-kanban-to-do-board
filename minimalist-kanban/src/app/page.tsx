"use client";

import "./globals.css";
import List from "./list"
import Task from './task';
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export default function Page() {

  const defaultTasks: Task[] = [
    { id: "1", title: "Buy groceries", description: "Milk, bread, eggs", dueDate: "2024-12-04" },
    { id: "2", title: "Complete project", description: "Finish React project", dueDate: "2024-12-05" },
    { id: "3", title: "Workout", description: "Go to the gym", dueDate: "2024-12-06" },
  ];

  const [lists, setLists] = useState<{ [key: string]: Task[] }>({
    Monday: [defaultTasks[0]],    
    Tuesday: [],                  
    Wednesday: [],               
    Thursday: [defaultTasks[1]],  
    Friday: [],                   
    Saturday: [defaultTasks[2]],  
    Sunday: [],            
  });
  

  const handleTaskDrop = (task: Task, listTitle: string) => {
    setLists((prevLists) => {
      const updatedLists = { ...prevLists };
  
      // Remove task from other lists
      Object.keys(updatedLists).forEach((key) => {
        updatedLists[key] = updatedLists[key].filter((t) => t.id !== task.id);
      });
  
      // Add task to the target list
      updatedLists[listTitle].push(task);
      return updatedLists;
    });
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className="font-sf-pro-bold text-7xl flex justify-center m-5 mt-20">
          Minimalist To-Do by James ✔
        </h1>
        <div className="flex justify-between p-16 space-x-8">
          {Object.keys(lists).map((day) => (
            <List
              key={day}
              title={day}
              tasks={lists[day]}
              onTaskDrop={handleTaskDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}