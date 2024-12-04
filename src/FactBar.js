import { useEffect, useState } from "react";


const Navbar = () => {

    const [fact,setFact] = useState("");
    const [factstate,setFactstate] = useState(true);

    // const fetchData = () => {
        
    //     fetch('https://catfact.ninja/fact')
    //     .then((res)=> res.json()
    //     )
    //     .then((data)=> {
    //         setFact(data.fact)
    //         console.log(data) 
    //     }
    //     )
    //     .catch((err)=>{
    //         console.log("Error in fetching");
    //     });
    // };

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then((res)=> res.json()
        )
        .then((data)=> {
            setFact(data.fact)
            console.log(data) 
        }
        )
        .catch((err)=>{
            console.log("Error in fetching");
        });
    },[factstate]);

    

    return (
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg border-red-600 border-4 shadow-lg absolute top-1 w-[99%] h-[85px] flex items-center">
            <p className="text-red-500 font-bold relative left-0 px-8 text-2xl w-[50%]">Stuff-ToDo</p>
            <p className="text-red-500 font-bold relative right-0 px-8 text-xl flex items-center w-[40%]">(Cat)Fact:
            <p className="text-[10px] max-w-[500px] ml-2">{fact}</p>  
            </p>
            <button onClick={() => setFactstate(!factstate)} className="relative right-0 w-[10%] shadow-2xl text-white rounded-md px-4 py-2 border-white border-2 font-bold mr-4 bg-red-400">NewFact</button>
        </div>

    );
}

export default Navbar;