import CompletedTasks from "./CompletedTasks";

import TodayTasks from "./TodayTasks";
import UpcomingTasks from "./UpcomingTasks";

export default function TasksList({ tasks, setTasks }) {
  return (
    <>
      {/* {tasks.map((item) => (
        <MyTasksItem
          key={item.id}
          item={item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))} */}

      <TodayTasks tasks={tasks} setTasks={setTasks} />

      <UpcomingTasks tasks={tasks} setTasks={setTasks} />

      <CompletedTasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
