import List from "./List";
import Navbar from "./FactBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./Home";

const App = () => {

  return (
    <>
    
    <div className="w-full h-full flex flex-col justify-center items-center bg-[url('./assets/bgimage.jpg')] bg-cover bg-center">
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </Router>
    
    </div>
    </>
  );
}

export default App;
