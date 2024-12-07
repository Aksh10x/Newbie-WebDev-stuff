import { useEffect, useState } from "react";


const Navbar = () => {

    const [fact,setFact] = useState("");
    const [factstate,setFactstate] = useState(true);

    const fetchData = async () => { 
        try{
        const response= await fetch('https://catfact.ninja/fact')
        console.log(response)
        if (!response.ok) { 
            // If the response status is not OK (e.g., 404 or 500), throw an error
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setFact(data.fact)
        console.log(data)
        }
        catch(err){
            console.log("error fetching", err.message)
        }
    };

    useEffect(() => {
        // fetch('https://catfact.ninja/fact') //resolve(the data)
        // .then((res)=> {
        //     console.log("first .then")
        //     return res.json() //not an api fetch, but it will be returned wrapped as a promise and not just the object [returns a promise]
        // }
        // ) // next then recieves the promise, its just a .json method so it will resolve immedeately, resolving to res.json() (an object)
        // .then((data)=> { //recieves the object and a "data" 
        //     setFact(data.fact)
        // }
        // )
        // .catch((err)=>{
        //     console.log("Error in fetching",err);
        // });
        fetchData();
    },[factstate]);

    

    return (
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg border-red-600 border-4 shadow-lg absolute top-1 w-[99%] h-[85px] flex items-center">
            <p className="text-red-500 font-bold relative left-0 px-8 text-2xl w-[50%]">Stuff-ToDo</p>
            <p className="text-red-500 font-bold relative right-0 px-8 text-xl flex items-center w-[40%]">(Cat)Fact:
            <p className="text-[10px] max-w-[500px] ml-2">{fact}</p>  
            </p>
            <button onClick={() => setFactstate(!factstate)} className="relative right-0 w-[10%] shadow-2xl text-white rounded-md px-4 py-2 border-white border-2 font-bold mr-4 bg-red-500">NewFact</button>
        </div>

    );
}

export default Navbar;