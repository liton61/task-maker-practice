import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "React Course",
    description: "I love to learn react",
    priority: "High",
    tags: ["react", "javascript", "html", "css"],
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTask = (newTask) => {
    console.log("Adding task", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && <TaskModal onSave={handleAddTask} />}
        <div className="container">
          <SearchBar />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
