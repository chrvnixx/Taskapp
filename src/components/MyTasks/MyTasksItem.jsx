export default function MyTasksItem({ item, tasks, setTasks }) {
  function priorityLevel() {
    if (item.priority === "Low") return "🟢";
    if (item.priority === "Medium") return "🟠";
    if (item.priority === "High") return "🔴";
    return "";
  }

  function handlePriority() {
    if (item.priority === "") return "";
    return "priority";
  }

  function handleClick(title) {
    setTasks(
      tasks.map((task) =>
        title === task.title
          ? { ...task, completed: !task.completed }
          : { ...task }
      )
    );
  }

  function handleDelete(title) {
    setTasks(tasks.filter((task) => title !== task.title));
  }

  const completedItemClass = item.completed
    ? "line-through opacity-[50%] text-md w-63 "
    : "text-md  w-63 ";
  const completedCheckClass = item.completed
    ? "appearance-none w-5 h-5 border border-[2px] border-[#23482f] rounded-sm checked:bg-[#13ec5b] checked:opacity-[50%] checked:border-[#23482f] checked:before:content-['✓'] checked:before:text-[#102216] checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mt-[-4.5px] "
    : "appearance-none w-5 h-5 border border-[2px] border-[#23482f] rounded-sm checked:bg-[#13ec5b] checked:border-[#23482f] checked:before:content-['✓'] checked:before:text-[#102216] checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mt-[-4.5px] pr-4  ";
  const priorityClass = item.completed
    ? "flex items-center gap-[5px] opacity-[50%] "
    : "flex items-center gap-[5px] ";

  return (
    <>
      <article
        draggable
        className="w-[343px] mx-[auto] text-white mt-[10px] mb-5 flex items-center  justify-between "
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={() => handleClick(item.title)}
            checked={item.completed}
            className={completedCheckClass}
          />
          <div className="mx-[20px]  ">
            <h3 className={completedItemClass}>{item.title}</h3>
            <div className={priorityClass}>
              <div className="text-[6px] ">{priorityLevel()}</div>
              <div className="text-[14px] text-[#92c9a4] ">
                {item.priority} {handlePriority()}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleDelete(item.title)}
          className="bg-[#13ec5b] w-7 h-7 rounded-lg pb-0.5 text-[#102216] font-bold "
        >
          x
        </button>
      </article>
    </>
  );
}
