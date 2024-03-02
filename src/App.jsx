import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value) {
      setTodos([...todos, { text: value, isCompleted: false }]);
      setValue("");
    }
  };

  const handleChange = (e) => {
    const newTodo = e.target.value;
    setValue(newTodo);
    console.log(newTodo);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos); 
    alert("Task Completed")
     
  };


  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ background: "linear-gradient(to right, #009fff, #ec2f4b)" }}
    >
      <div className="mb-4 text-4xl text-white font-serif md:text-center mt-7 ml-3">
        <h1>A minor todo app by Biyash Shrestha.</h1>
      </div>
      <div className="flex p-4 flex-col items-center justify-center rounded-3xl bg-[#1b212a]">
        <h1 className="text-3xl text-white text-center mr-8 mb-7  ">
          Your tasks here
        </h1>
        <div className="flex gap-2">
          <input
            className="bg-gray-200 w-60 p-2 rounded"
            type="text"
            placeholder="Add Todo"
            onChange={handleChange}
            value={value}
          />
          <button
            className="ml-2 border-1 bg-green-300 px-2 rounded-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div
          className="mt-4 flex flex-col justify-between h-[400px]"
          style={{
            width: "300px",
            maxHeight: "300px",
            overflowY: "auto",
            marginTop: "10px",
          }}
        >
          <ul className="mr-4">
            {todos.map((task, index) => (
              <li
                key={index}
                className={`text-xl mr-7 text-white mb-2 bg-slate-500 rounded-xl flex justify-between p-2 ${task.isCompleted ? "line-through" : ""
                  }`}
              >
                <input
                  type="checkbox"
                  name="check"
                  id=""
                  onChange={() => handleCheck(index)}
                />
                <span>{task.text}</span>
                <MdDelete
                  style={{ color: "red" }}
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}