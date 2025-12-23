import React from "react";
import MyTasksItem from "./MyTasksItem";

export default function PriorityListItem({
  level,
  highPriority,
  tasks,
  setTasks,
}) {
  return (
    <>
      {level}
      <div>
        {highPriority.map((item) => (
          <div key={item.id} className="flex flex-col">
            <MyTasksItem item={item} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
      </div>
    </>
  );
}
