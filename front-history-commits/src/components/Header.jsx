import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserProvider";


const Header = () => {

  const {info} = useContext(UserContext);
  const { name,avatar_url, company, followers } = info
  console.log(info);
  return (
    <header className="text-white">
      <img src={avatar_url}/>
      <h1>{name}</h1>
      <p>{company}</p>
      <p>{followers}</p>
        <hr />
      <nav className="flex flex-col">
        
        <Link
          className=" w-full md:block text-center hover:bg-slate-700 p-5 text-2xl uppercase text-teal-600"
          to="/history"
        >
          History Commits
        </Link>
    <hr />
        <Link
          className=" w-full md:block text-center hover:bg-slate-700 p-5 text-2xl uppercase text-teal-600"
          to="/repos"
        >
          Repositories
        </Link>
      </nav>
    </header>
  );
};

export default Header;
