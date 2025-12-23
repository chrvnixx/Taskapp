export default function TitleInput({ task, setTask }) {
  return (
    <>
      <span className="text-white px-[20px] text-[18px] mb-[20px] ">Title</span>
      <input
        className="bg-[#292524] w-[343px] h-[50px]  ml-[16px] mt-[8px] rounded-[10px] border border-stone-700 border-solid placeholder:text-stone-500 placeholder:pl-[20px] outline-none text-white px-[20px] "
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Pay electricity bill"
      />
    </>
  );
}
