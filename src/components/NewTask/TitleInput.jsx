export default function TitleInput({ task, setTask }) {
  return (
    <>
      <span className="text-white px-5 text-[18px]   ">Title</span>
      <div className="max-w-2xl mx-auto px-5  flex justify-center">
        <input
          className="bg-[#292524] w-2xl h-12  rounded-[10px] border border-stone-700 border-solid placeholder:text-stone-500 placeholder:pl-5 outline-none text-white px-5 "
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Pay electricity bill"
        />
      </div>
    </>
  );
}
