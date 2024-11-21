import "./globals.css";
import List from "./list"
import Task from './task';

export default function Page() {

  const tasks = [
    {id:"1", title:"test", description:"description test", dueDate:"22/11/2024"},
    {id:"2", title:"test 2", description:"dawjidjwa test", dueDate:"24/11/2024"}
  ];

  return (
    <div>
      <h1 className="font-sf-pro-bold text-7xl flex justify-center m-5 mt-20">Minimalist To-Do by James ✔</h1>
      <div className="flex justify-between p-16 space-x-8">
          <List title="Monday" tasks={tasks}></List>
          <List title="Tuesday" tasks={tasks}></List>
          <List title="Wednesday" tasks={tasks}></List>
          <List title="Thursday" tasks={tasks}></List>
          <List title="Friday" tasks={tasks}></List>
          <List title="Saturday" tasks={tasks}></List>
          <List title="Sunday" tasks={tasks}></List>
      </div>
    </div>
  )
}