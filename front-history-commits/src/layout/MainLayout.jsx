import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
  return (
   <div className="md:flex md:min-h-screen">
        
        <div className="md:w-1/4 bg-slate-800  px-5 py-10 ">
        <Header/>  
        </div>
        <div className="md:w-3/4 p-5 md:h-screen overflow-scroll">
            <Outlet/>
        </div>     
   </div>
  )
}

export default MainLayout