import CompletedTasks from "./CompletedTasks";

import PriorityListItem from "./PriorityListItem";

export default function PriorityList({ tasks, setTasks }) {
  const highPriority = tasks.filter(
    (task) => task.priority === "High" && task.completed === false
  );
  const mediumPriority = tasks.filter(
    (task) => task.priority === "Medium" && task.completed === false
  );
  const lowPriority = tasks.filter(
    (task) => task.priority === "Low" && task.completed === false
  );

  const low =
    lowPriority.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white text-[18px] font-bold mt-[30px] ml-[20px]">
        Low
      </h2>
    );
  const medium =
    mediumPriority.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white text-[18px] font-bold mt-[30px] ml-[20px]">
        Medium
      </h2>
    );
  const high =
    highPriority.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white text-[18px] font-bold mt-[30px] ml-[20px]">
        High
      </h2>
    );

  return (
    <>
      <div>
        <PriorityListItem
          level={high}
          highPriority={highPriority}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <div>
        <PriorityListItem
          level={medium}
          highPriority={mediumPriority}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <div>
        <PriorityListItem
          level={low}
          highPriority={lowPriority}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>

      <CompletedTasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
