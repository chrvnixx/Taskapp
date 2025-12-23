export default function DescriptionInput({ task, setTask }) {
  return (
    <>
      <div className="text-white px-[20px] text-[18px]  mt-[20px] ">
        Description
      </div>
      <input
        className="bg-[#292524] w-[343px] h-[144px]  ml-[16px] mt-[8px] rounded-[10px] border border-stone-700 border-solid placeholder:text-stone-500 placeholder:pl-[20px] outline-none text-white px-[20px] "
        type="text"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Add any extra details here..."
      />
    </>
  );
}
