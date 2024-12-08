import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const InputBox = ({ setInput, input, items, setItems }) => {
  const [newTask, setNewTask] = useState("");
  const [isAdded,setIsAdded]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim()) {
      
      const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

      const newItem = { id: newId, task: newTask.charAt(0).toUpperCase() + newTask.slice(1) };
      setItems([...items, newItem]);

      setNewTask("");
      setIsAdded(true);

      setTimeout(() => {
        setInput(false);
        setIsAdded(false);
    },1500);
      
    }
  };

  return (
    <div className="w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
        
      <div className="max-w-[500px] h-[300px] shadow-2xl flex flex-col p-4 rounded-xl border-1 border-black bg-white">
        <button
          onClick={() => setInput(!input)}
          className="mb-4"
        >
          <IoIosCloseCircleOutline />
        </button>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 border-black mb-4 px-2 py-1"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white shadow-xl w-[100px] text-black rounded-md px-4 py-1 border-red-600 border-2"
          >
            Add
          </button>
          
        </form>
        {(isAdded && <div className="text-black font-extrabold flex justify-center mt-8">Task Added!</div>)}
      </div>
    </div>
  );
};

export default InputBox;
