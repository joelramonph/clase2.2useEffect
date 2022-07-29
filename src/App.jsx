import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [user, setUser] = useState()

  useEffect(() => {

   axios.get('https://randomuser.me/api/')

     .then(res => setUser(res.data.results[0]) )
     .catch()

  }, [])
  
  console.log(user)
  return (
    <div className="App">
      
     <img src={user?.picture.large} alt="" />
    </div>
  )
}

export default App
