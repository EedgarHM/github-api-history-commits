import { createContext, useEffect, useState  } from "react";
import axios from "axios";
const UserContext  = createContext()

const UserProvider = ({children}) =>{

    const [info, setInfo] = useState({
        avatar_url : '',
        company:'',
        followers:'',
        name:''
    });

    const [loading, setLoading] = useState(true);

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
        <UserContext.Provider
            value={{
                info,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}


export {
    UserProvider
}
export default UserContext