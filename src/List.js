import { useEffect, useState } from "react";
import InputBox from "./InputBox";

const List = () => {
    const [items,setItems] = useState(() => {
        const SavedItems = localStorage.getItem("MY_LIST");
        return SavedItems ? JSON.parse(SavedItems) :
        [
            {id:1,task: "Shopping"},
            {id:2,task: "Dinner"},
        ];
    });

    
    useEffect(() => {
        localStorage.setItem("MY_LIST", JSON.stringify(items)); 
        if (items.length > 0 && items[0].id !== 1) { 
           
          const updatedItems = items.map((item, index) => ({
            task: item.task,
            id: index + 1,
          }));
          setItems(updatedItems); 
        }
      }, [items]);
      

    const [input,setInput]=useState(false);

    const handleClick = (id) => {
      const newItems= items.filter((items) => items.id !== id );
      setItems(newItems);
    };

    const func = () => {
        
        console.log(document.getElementById("hello"));
        const box = document.getElementById("hello");
        box.style.backgroundColor = "#f45336"
        setTimeout (() => box.style.backgroundColor = "#f44336",1000)
    
    };

    useEffect(() => func(), [items])  

    return (
        <>
        {input && 
        <div className="absolute w-full h-full z-10 ">
            <InputBox 
                setInput={setInput} 
                input={input} 
                items={items} 
                setItems={setItems}
            />
        </div>
        }
        <div id="hello" className="max-w-[350px] text-white transition-all bg-red-500 w-full h-[450px] rounded-xl flex flex-col justify-evenly bg-opacity-90 border-2 border-red-600 backdrop-blur-sm shadow-2xl top-[40px] relative"> 
        <h1 className="text-center font-bold text-2xl mt-2">TO-DO List</h1>
        <div className="flex flex-col gap-2 mt-4 h-[80%] overflow-y-auto">
            {items.map((item) =>
             <div className="flex mx-8 justify-between font-semibold">
                
                <p>{item.id}) {item.task}</p>
                <button className="bg-white shadow-xl text-black rounded-md px-4 py-1 border-red-600 border-2"
                onClick={() => handleClick(item.id)}
                >Complete</button>
            </div>
            )}
        </div>
        <div className="relative bottom-0 h-[20%] text-black flex justify-center items-center">
            <button className="bg-red-400 w-[90%] shadow-2xl text-white rounded-md px-4 py-2 border-white border-2 font-bold"
            onClick={() => setInput(!input)}
            >Add Task</button>
        </div>
        
        
        </div>
        </>
    );
}

export default List;