export default function MyTasksHeader() {
  return (
    <div className="flex px-1 py-3 text-white w-[343px] mx-[auto] mt-3 justify-between items-center">
      <button className="text-2xl">🔍</button>
      <div className="text-lg font-bold tracking-[0.5px] ">My Tasks</div>
      <button className="text-3xl mt-[-20px] ">...</button>
    </div>
  );
}
