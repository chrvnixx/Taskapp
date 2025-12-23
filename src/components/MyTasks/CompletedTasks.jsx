import React from "react";
import MyTasksItem from "./MyTasksItem";

export default function CompletedTasks({ tasks, setTasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  const completed =
    completedTasks.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white pl-4 text-lg font-bold mt-7">Completed</h2>
    );
  return (
    <div>
      {completed}
      {completedTasks.map((item) => (
        <div key={item.id} className="flex flex-col">
          <MyTasksItem item={item} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
}
