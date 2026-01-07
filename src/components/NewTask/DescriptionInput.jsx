export default function DescriptionInput({ task, setTask }) {
  return (
    <>
      <div className="text-white px-5 text-[18px]  mt-5 ">Description</div>
      <div className="max-w-7xl mx-auto px-5 flex justify-center">
        <textarea
          className="bg-[#292524] w-xl h-24 mt-2 rounded-[10px] border border-stone-700 border-solid placeholder:text-stone-500 placeholder:pl-5 placeholder:pt-2 outline-none text-white px-5 "
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Add any extra details here..."
        />
      </div>
    </>
  );
}
