import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyTasks from "./components/MyTasks/MyTasks";
import NewTask from "./components/NewTask/NewTask";
import { useEffect, useState } from "react";

const prevTask = localStorage.getItem("tasks");
function App() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
    priority: "",
    id: Date.now(),
    completed: false,
    sortBy: "",
  });
  const [tasks, setTasks] = useState(JSON.parse(prevTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <MyTasks
                tasks={tasks}
                setTasks={setTasks}
                task={task}
                setTask={setTask}
              />
            }
          />

          <Route
            path="new_task"
            element={
              <NewTask
                tasks={tasks}
                setTasks={setTasks}
                task={task}
                setTask={setTask}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
