import axios from 'axios'
import { useState, useEffect } from 'react'

const Perfil = () => {

    const [photo, setPhoto] = useState('')
    const [info, setInfo] = useState({
        avatar_url : '',
        company:'',
        followers:'',
        name:''
    })
    useEffect( ()=>{
      const getApi = async () => {
        const urlApi = 'http://localhost:1337/api/getUserInfo'
        const resp = await axios(urlApi);
        setInfo({
            avatar_url : resp.data.response.avatar_url,
            company:resp.data.response.company,
            followers:resp.data.response.followers,
            name:resp.data.response.name
        });
      }

    
      getApi()
    },[])
    
  return (
    <div className='p-10'>
        <img src={info.avatar_url} className='border border-slate-800 rounded-full shadow-md p-5 ' />
        <p>{info.name}</p>
    </div>
  )
}

export default Perfil