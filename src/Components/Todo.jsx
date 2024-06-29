import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [editInd, setEditInd] = useState(null);
  const addTodo = () => {
    if (editInd !== null ) {
      const updateTodo = [...todo];
      updateTodo[editInd] = task;
      setTodo(updateTodo);
      setTask("");
      setEditInd(null);
    } else {
      if (task.trim() !== "") {
        // setTodo([...todo, task]);
        todo.push(task)
      }
      setTask("");
    }
  };
  const removeTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const editIndex = (index) => {
    setTask(todo[index]);
    setEditInd(index);
  };
  return (
    <div className="bg-slate-500 w-full h-screen px-2">
      <div className="w-full pt-20">
        <h1 className="text-center pb-5 font-semibold text-3xl text-white">
          Todo App Using React Js
        </h1>
        <div className="max-w-[400px] min-h-[100px] mx-auto border rounded-lg  px-4 py-3 bg-gray-200">
          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              value={task}
              className="border border-black w-full py-1 px-2 rounded-lg"
              placeholder="Add Todo"
              onChange={(e) => {
                setTask(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />
            <button
              className="px-2 py-1 bg-green-500 rounded-lg text-white"
              onClick={addTodo}
            >
              {editInd !== null ? "Update" : "Add"}
            </button>
          </div>
          <div className="px-1 mt-2 pb-1 w-full overflow-auto">
            {todo.map((item, index) => (
              <li
                key={index}
                className="list-none flex items-center justify-between"
              >
                {item}
               {
                todo.length ?  <div className="flex gap-3">
                <FaEdit
                  className="text-2xl text-black/50 cursor-pointer hover:text-black/80"
                  onClick={() => {
                    editIndex(index);
                  }}
                />
                <IoMdCloseCircle
                  className="text-2xl text-red-400 hover:text-red-600 cursor-pointer"
                  onClick={() => {
                    removeTodo(index);
                  }}
                />
              </div> : ''
               }
              </li>
            ))}
            <div className="text-center pt-2">
              {todo.length ? (
                <button
                  className="px-5 py-2 bg-red-500 text-white rounded-2xl"
                  onClick={() => {
                    setTodo([]);
                  }}
                >
                  Clear Data
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
