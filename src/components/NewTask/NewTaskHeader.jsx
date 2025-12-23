import { Link } from "react-router-dom";
import multiplyicon from "../../assets/icons8-multiply-100.png";

export default function Header() {
  return (
    <div className="flex justify-between pt-[30px] px-[20px] ">
      <Link to="/">
        <button className="">
          <img className=" w-8" src={multiplyicon} alt="" />
        </button>
      </Link>

      <div className="text-xl text-white font-bold">New Task</div>
      <div className="text-[16px] text-[#78716c] font-bold">Create</div>
    </div>
  );
}
