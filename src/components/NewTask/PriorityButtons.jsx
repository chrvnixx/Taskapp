export default function PriorityButtons({ task, setTask }) {
  function handleClickLow(e) {
    e.preventDefault();
    setTask({ ...task, priority: "Low" });
  }
  const lowClass =
    task.priority === "Low"
      ? "bg-[#13ec5b33] w-[106px] h-[50px] text-[#13ec5b] text-lg border border-[#13ec5b] rounded-[8px]  "
      : "bg-[#292524] w-[106px] h-[50px] text-white text-lg border border-stone-700 rounded-[8px]  ";
  function handleClickMedium(e) {
    e.preventDefault();
    setTask({ ...task, priority: "Medium" });
  }
  const mediumClass =
    task.priority === "Medium"
      ? "bg-[#13ec5b33] w-[106px] h-[50px] text-[#13ec5b] text-lg border [#13ec5b] rounded-[8px]  "
      : "bg-[#292524] w-[106px] h-[50px] text-white text-lg border border-stone-700 rounded-[8px]  ";
  function handleClickHigh(e) {
    e.preventDefault();
    setTask({ ...task, priority: "High" });
  }
  const highClass =
    task.priority === "High"
      ? "bg-[#13ec5b33] w-[106px] h-[50px] text-[#13ec5b] text-lg border border-[#13ec5b] rounded-[8px]  "
      : "bg-[#292524] w-[106px] h-[50px] text-white text-lg border border-stone-700 rounded-[8px]  ";
  return (
    <>
      <div className="w-[343px] mt-7 mx-[auto] ">
        <div className="text-stone-500 text-md font-bold">Priority</div>
        <div className="flex justify-between mt-4 ">
          <button className={lowClass} onClick={(e) => handleClickLow(e)}>
            Low
          </button>
          <button className={mediumClass} onClick={(e) => handleClickMedium(e)}>
            Medium
          </button>
          <button className={highClass} onClick={(e) => handleClickHigh(e)}>
            High
          </button>
        </div>
      </div>
    </>
  );
}
