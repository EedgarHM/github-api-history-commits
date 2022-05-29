import axios from "axios";
import { useEffect, useState } from "react";
import Perfil from "./components/Perfil";
import Historial from "./components/Historial";

function App() {
  // const [commits, setCommits] = useState({})

  // const [photo, setPhoto] = useState('')
  /*
  useEffect( ()=>{
    const getApi = async () => {
      const urlApi = "http://localhost:1337/api/getcommits";
      const resp = await axios(urlApi);
      setCommits(resp.data.response)
    }
  
    console.log(commits);
    getApi()
  },[])
*/

  // useEffect( ()=>{
  //   const getApi = async () => {
  //     const urlApi = 'http://localhost:1337/api/getUserInfo'
  //     const resp = await axios(urlApi);
  //     console.log(resp);
  //     setPhoto(resp.data.response.avatar_url)
  //   }

  //   getApi()
  // },[])

  return (
    <div className="flex bg-gradient-to-r from-indigo-900 to-slate-900">
      <div class="md:w-1/4 h-full  p-10 text-center">
        <Perfil />
      </div>
      <div class="md:w-3/4 text-center p-10">
        <Historial />
      </div>
    </div>
  );
}

export default App;
