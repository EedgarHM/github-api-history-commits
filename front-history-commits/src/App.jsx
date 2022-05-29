import axios from "axios"
import { useEffect, useState } from "react"
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
    <div className="grid grid-cols-2 gap-4">
      
      <Perfil/>
      <Historial/>
    </div>
  )
}

export default App
