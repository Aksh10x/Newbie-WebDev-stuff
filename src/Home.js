import { Link } from "react-router-dom"


export const Home = () => {
    return <Link to={"/list"}
    className="bg-red-500 shadow-lg shadow-gray-900 text-white rounded-md px-4 py-2 border-black border-2 font-bold text-2xl transition-all hover:scale-110 hover:shadow-black hover:shadow-2xl">
        Go to To-Do List
    </Link>
}