import MyTasksItem from "./MyTasksItem";

export default function TodayTasks({ tasks, setTasks }) {
  const todayTasks = tasks.filter(
    (task) =>
      task.dueDate === new Date().toISOString().split("T")[0] &&
      task.completed === false
  );

  const today =
    todayTasks.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white pl-4 text-lg font-bold mt-7">Today</h2>
    );
  return (
    <div>
      {today}
      {todayTasks.map((item) => (
        <div key={item.id} className="flex flex-col">
          <MyTasksItem item={item} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
}
