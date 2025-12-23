import CompletedTasks from "./CompletedTasks";
import MyTasksItem from "./MyTasksItem";

export default function CreationDateList({ tasks, setTasks }) {
  const sortList = tasks.slice().sort((a, b) => b.id - a.id);
  const sortedList = sortList.filter((item) => item.completed === false);
  const latest =
    sortList.length === 0 ? (
      ""
    ) : (
      <h2 className="text-white text-[18px] font-bold mt-[30px] ml-[20px]">
        Latest
      </h2>
    );
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

      <div>
        {latest}
        {sortedList.map((item) => (
          <div key={item.id} className="flex flex-col">
            <MyTasksItem item={item} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
      </div>

      <CompletedTasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
