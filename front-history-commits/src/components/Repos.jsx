import { useEffect, useState } from "react";
import axios from "axios";
import ListarRepos from "./ListarRepos";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const urlApi = "http://localhost:1337/api/getrepos";
      const response = await axios(urlApi);

      setRepos(response.data.response);
      console.log(repos);
    };

    getRepos();
  }, []);
  return (
    <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4 p-5">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Repos
        </h5>
        <h5 className="font-bold text-teal-700 hover:underline dark:text-teal-500 text-2xl">
          Date
        </h5>
      </div>

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
