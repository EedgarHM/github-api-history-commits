import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const Header = () => {
  const { info } = useContext(UserContext);
  const { name, avatar_url, company, followers } = info;
  console.log(info);
  return (
    <aside className="text-white">
      <header className="flex flex-col text-center align-middle">
        <img
          src={avatar_url}
          className="flex w-full h-96 rounded-full md:h-auto md:w-48 m-auto "
        />

        <div className="mt-2 flex flex-col mb-2">
        <p><span className="text-lg text-teal-600 font-bold">Name: </span>{name}</p>
        <p><span className="text-lg text-teal-600 font-bold">Company: </span>{company}</p>
        <p><span className="text-lg text-teal-600 font-bold">Followers: </span>{followers}</p>
        </div>
      </header>
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
    </aside>
  );
};

export default Header;
