import { useState } from "react";


const Navbar = () => {

    const [fact,setFact] = useState("");

    const fetchData
    return (
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg border-red-600 border-4 shadow-lg absolute top-1 w-[99%] h-[70px] flex items-center">
            <p className="text-red-500 font-bold relative left-0 px-8 text-2xl w-[50%]">Stuff-ToDo</p>
            <p className="text-red-500 font-bold relative right-0 px-8 text-2xl ">(Cat)Fact: {fact} </p>
        </div>

    );
}

export default Navbar;