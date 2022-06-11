import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import {
  addNewTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../firebase/taskController";

const TaskList = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("add");

  const { user } = useContext(AppContext)

  const createNewTask = async () => {
    await addNewTask(task);
    setTask({
      title: "",
      description: "",
    });
    InitializeTask();
  };

  const InitializeTask = () => {
    getTasks()
      .then((t) => setTasks([...t]))
      .catch((e) => console.log(e));
  };

  const editTask = (id) => {
    setMode("update");
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ ...taskToEdit });
  };
  const deleteExistingTask = async (id) => {
    await deleteTask(id);
    InitializeTask();
  };

  const updateExistingTask = async () => {
    await updateTask(task);
    setTask({
      title: "",
      description: "",
    });
    InitializeTask();
    setMode("add");
  };

  useEffect(() => {
    InitializeTask();
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <div className="my-4">
          <h1>Introduce una nueva tarea</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder={"Título"}
              value={task.title}
              className={
                "border shadow outline-none focus:ring ring-amber-600 rounded px-2 py-1 w-full"
              }
              disabled={!user}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>
          <div>
            <textarea
              type="text"
              rows={4}
              placeholder={"Descipción"}
              value={task.description}
              className={
                "border shadow outline-none focus:ring ring-amber-600 rounded px-2 py-1 w-full"
              }
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              disabled={!user}
            ></textarea>
          </div>
          <div>
            <button
              className="bg-amber-700 text-slate-100 py-2 px-3 rounded-full hover:bg-amber-800 transition w-full text-lg font-semibold uppercase disabled:bg-amber-100"
              onClick={() =>
                mode === "add" ? createNewTask() : updateExistingTask()
              }
              disabled={!user}
            >
              {mode === "add" ? "Agregar Tarea" : "Actualizar Tarea"}
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div
                className="rounded-xl border border-red-800 p-4 flex flex-col gap-2"
                key={task.id}
              >
                <h1 className="font-semibold text-lg">{task.title}</h1>
                <div className="border-t border-red-800"></div>
                <p>{task.description}</p>
                <div className="flex flex-row justify-end gap-4 mt-4">
                  <div>
                    <button
                      className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition text-lg "
                      onClick={() => editTask(task.id)}
                    >
                      Editar Tarea
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-amber-700 text-slate-100 py-1 px-3 rounded-full hover:bg-amber-800 transition text-lg "
                      onClick={() =>
                        window.confirm(
                          "¿Seguro quieres ELIMINAR esta tarea?"
                        ) && deleteExistingTask(task.id)
                      }
                    >
                      Eliminar Tareas
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
        { !user && <p className="text-red-700 font-semibold">Debes estar logueado para poder Administrar tus Tareas</p> }
        </div>
      </div>
    </div>
  );
};

export default TaskList;
