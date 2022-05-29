import { useEffect, useState } from "react";
import { useContext } from "react";

import axios from "axios";

import ListarCommit from "./ListarCommit";
import UserContext from "../context/UserProvider";
import Spinner from "./Spinner";


const Historial = () => {
  const { loadingInfoUser, setLoadingInfoUser,setLoadRepos } = useContext(UserContext);

  const [commits, setCommits] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const urlApi = "http://localhost:1337/api/getcommits";
      const response = await axios(urlApi);
      setCommits(response.data.response);
      setLoadingInfoUser(false)
      setLoadRepos(true)
    };
    getApi();
  }, []);

  return (
    loadingInfoUser ? <Spinner/> : <div className="flex flex-col p-5">
    <h1 className="p-5 uppercase font-bold text-3xl text-gray-900 text-center">
      <span className="text-teal-700">REPO</span> github-api-history-commits{" "}
    </h1>

    <div>
      {commits.map((commit, index) => (
        <ListarCommit key={index} children={commit} />
      ))}
    </div>
  </div>
  );
};

export default Historial;
