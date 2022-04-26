import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const email1 = user?.email
    console.log(user)
    const getToken = async () => {
      if (email || email1) {
        const { data } = await axios.post('https://cryptic-meadow-81248.herokuapp.com/login', { email });
        setToken(data.accessToken)
        localStorage.setItem('accessToken', data.accessToken)
      }
    }
    getToken()
  }, [user])
  return [token];

};

export default useToken;