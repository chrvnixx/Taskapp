export default function DueDateInput({ task, setTask }) {
  return (
    <div className="flex bg-stone-900/50 w-[343px] ml-[16px] border border-stone-700 border-solid rounded-[10px] h-[56px] mt-[25px] px-[10px] gap-[20px] items-center  ">
      <div className="text-white whitespace-nowrap   ">Due Date</div>
      <input
        type="date"
        className="w-[100%] text-stone-500  "
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
    </div>
  );
}
