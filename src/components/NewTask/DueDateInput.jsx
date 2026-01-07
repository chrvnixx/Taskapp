export default function DueDateInput({ task, setTask }) {
  return (
    <div className="max-w-7xl  mx-auto px-5">
      <div className="flex bg-stone-900/50  border border-stone-700 border-solid rounded-[10px] h-14 mt-7 px-5 gap-5 items-center  ">
        <div className="text-white whitespace-nowrap   ">Due Date</div>
        <input
          type="date"
          className=" text-stone-500  "
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </div>
    </div>
  );
}
