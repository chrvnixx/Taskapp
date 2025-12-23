import Header from "./NewTaskHeader";
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import DueDateInput from "./DueDateInput";
import PriorityButtons from "./PriorityButtons";
import { useNavigate } from "react-router-dom";

export default function NewTask({ tasks, setTasks, task, setTask }) {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    setTasks(task.title !== "" ? [...tasks, task] : [...tasks]);
    navigate("/");

    // setTasks([...tasks, task]);

    setTask({
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "High",
      id: Date.now(),
      completed: false,
      sortBy: "",
    });
  }
  const disabled = task.title === "" ? "disabled" : "";

  return (
    <>
      <Header />

      <div className="mt-[20px] ">
        <form onSubmit={() => handleSubmit()}>
          <TitleInput task={task} setTask={setTask} />
          <DescriptionInput task={task} setTask={setTask} />
          <DueDateInput task={task} setTask={setTask} />
          <PriorityButtons task={task} setTask={setTask} />
          <div className="w-[343px] mx-[auto] mt-7  ">
            <button
              type="submit"
              disabled={disabled}
              className="w-[343px] h-[53px] bg-[#13ec5b] rounded-xl font-bold "
              onClick={(e) => handleClick(e)}
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
