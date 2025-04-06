import { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({
  children
}) => {

  const token = localStorage.getItem('token')

  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        setUser(response.data);
      }
    }).catch((err) => {
      console.log(err);
      localStorage.removeItem('token');
      localStorage.setItem('firstLogin', 'false');
      navigate('/login');
    }).finally(() => {
      setIsLoading(false);
    })
  }, [token, navigate, setUser]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper