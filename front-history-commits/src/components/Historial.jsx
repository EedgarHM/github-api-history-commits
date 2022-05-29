import axios from 'axios'
import {useEffect, useState} from 'react'
import ListarCommit from './ListarCommit'


const Historial = () => {

    const [commits, setCommits] = useState([])

    useEffect( ()=>{
        const getApi = async () => {
          const urlApi = "http://localhost:1337/api/getcommits";
          const response = await axios(urlApi);
          setCommits(response.data.response)

        }
      
        getApi()
      },[])

  return (
    <div className='flex flex-col'>
        <h1 className='uppercase font-bold text-2xl text-white text-center'>Proyecto: </h1>

        <div>
        {
         commits.map( (commit, index) => (
            <ListarCommit key={index} children={commit}/>
         ))
        }
        </div>
    </div>
  )
}

export default Historial