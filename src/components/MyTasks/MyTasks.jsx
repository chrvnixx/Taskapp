import { Link } from "react-router-dom";
import MyTasksHeader from "./MyTasksHeader";

import TasksList from "./TasksList";
import { useState } from "react";
import PriorityList from "./PriorityList";
import CreationDateList from "./CreationDateList";

export default function MyTasks({ tasks, setTasks, task, setTask }) {
  const [sortBy, setSortBy] = useState("due date");

  function handleDueDate() {
    setSortBy("due date");
  }

  const dueDate =
    sortBy === "due date" ? (
      <TasksList tasks={tasks} setTasks={setTasks} />
    ) : (
      ""
    );

  function handlePriority() {
    setSortBy("priority");
  }
  const priority =
    sortBy === "priority" ? (
      <PriorityList tasks={tasks} setTasks={setTasks} />
    ) : (
      ""
    );

  function handleCreationDate() {
    setSortBy("creation date");
  }
  const creationDate =
    sortBy === "creation date" ? (
      <CreationDateList tasks={tasks} setTasks={setTasks} />
    ) : (
      ""
    );

  const dueDateStyle =
    sortBy === "due date" ? "px-4 bg-[#102216] rounded-md text-white" : "px-4";

  const priorityStyle =
    sortBy === "priority" ? "px-4 bg-[#102216] rounded-md text-white" : "px-4";

  const creationDateStyle =
    sortBy === "creation date"
      ? "px-4 bg-[#102216] rounded-md text-white"
      : "px-4";

  return (
    <>
      <MyTasksHeader />

      <div className="w-[343px] mx-[auto] flex justify-between text-[#92c9af] bg-[#23482f] text-[16px] h-12 mt-[20px] rounded-lg px-1 py-1">
        <button className={dueDateStyle} onClick={() => handleDueDate()}>
          Due Date
        </button>
        <button className={priorityStyle} onClick={() => handlePriority()}>
          Priority
        </button>
        <button
          className={creationDateStyle}
          onClick={() => handleCreationDate()}
        >
          Creation Date
        </button>
      </div>

      {priority}

      {dueDate}

      {creationDate}

      <Link to="new_task">
        <div className="w-[100%] relative flex justify-center  ">
          <div className="w-[64px] h-[64px]  bg-[#13ec5b] rounded-4xl text-4xl flex justify-center items-center fixed bottom-7  mx- shadow-lg/40 shadow-[#13ec5b]  ">
            <div className="mt-[-7px] ">+</div>
          </div>
        </div>
      </Link>
    </>
  );
}
