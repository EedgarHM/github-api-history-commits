import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ListarRepos from "./ListarRepos";
import UserContext from "../context/UserProvider";
import Spinner from "./Spinner";

const Repos = () => {
  const { loadRepos, setLoadRepos,setLoadingInfoUser } = useContext(UserContext);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const urlApi = "http://localhost:1337/api/getrepos";
      const response = await axios(urlApi);

      setRepos(response.data.response);
      setLoadRepos(false)
      setLoadingInfoUser(true)
    };

    getRepos();
  }, []);
  return (
    loadRepos ? <Spinner/> : <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h1 className="text-center uppercase text-teal-600 font-bold text-3xl"> Repositories</h1>
    
    <div className="flex justify-between items-center mb-4 p-5">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Repositories
      </h5>
      <h5 className="font-bold text-teal-700 hover:underline dark:text-teal-500 text-2xl">
        Date
      </h5>
    </div>
  <hr />
    <div className="flow-root">
      {
      repos.map((repo, index) => (
        <ListarRepos key={index} children={repo} />
      )
      )}
    </div>
  </div>
  );
};

export default Repos;
