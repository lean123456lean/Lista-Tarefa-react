import "./App.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [
      {
        id: 1,
        title: "Estudar Programação",
        description: "Estudar Programmação para se tornar um developer full stack.",
        isCompleted: false
      },
      {
        id: 2,
        title: "Estudar Fundamentos de Programação",
        description: "Estudar Programmação para se tornar um developer full stack.",
        isCompleted: false
      },
      {
        id: 3,
        title: "Finalizar Juninho blog",
        description: "Estudar Programmação para se tornar um developer full stack.",
        isCompleted: false
      }
    ];
  });
  


  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); 
  
  // Sempre que as tarefas mudam, salva no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); 


  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        const data = await response.json();
        
        if (data) {
          setTasks(data);
        }
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    }
  
    fetchTasks();
  }, []);
  

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(tasksId) {
    const newTasks = tasks.filter((task) => task.id !== tasksId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), 
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask])
  }



  return (
      <div className="w-screen h-screen bg-slate-500 flex justify-content p-6">
        <div className="w-[500px] flex flex-col gap-4 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">Gerenciador de tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
  );
}

export default App;
