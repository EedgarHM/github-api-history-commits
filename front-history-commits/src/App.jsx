import axios from "axios"
import { useEffect, useState } from "react"
import Perfil from "./components/Perfil";


function App() {

  const [commits, setCommits] = useState({})

  useEffect( ()=>{
    const getApi =async () => {
      const urlApi = "http://localhost:1337/api/getcommits";
      const resp = await axios(urlApi);
      setCommits(resp)
    }
  
    console.log(commits);
    getApi()
  },[])


  return (
    <div>
      <Perfil/>    
      {
        console.log(commits)
      }  
    </div>
  )
}

export default App
