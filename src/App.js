import List from "./List";
import Navbar from "./FactBar";

const App = () => {

  return (
    <>
    
    <div className="w-full h-full flex flex-col justify-center items-center bg-[url('./assets/bgimage.jpg')] bg-cover bg-center">
    <Navbar/>
    <List/>  
    </div>
    </>
  );
}

export default App;
