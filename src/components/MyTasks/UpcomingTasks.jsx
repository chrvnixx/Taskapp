import MyTasksItem from "./MyTasksItem";

export default function UpcomingTasks({ tasks, setTasks }) {
  const upcomingTasks = tasks.filter(
    (task) =>
      task.dueDate !== new Date().toISOString().split("T")[0] &&
      task.completed === false
  );

  const upcoming =
    upcomingTasks.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white pl-4 text-lg font-bold mt-7">Upcoming</h2>
    );
  return (
    <div>
      {upcoming}
      {upcomingTasks.map((item) => (
        <div key={item.id} className="flex flex-col">
          <MyTasksItem item={item} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
}
