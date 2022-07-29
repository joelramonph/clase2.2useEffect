import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [user, setUser] = useState()

  useEffect(() => {
    const URL = 'https://thronesapi.com/api/v2/Characters'
   axios.get(URL)

     .then(res => setUser(res.data.results[0]) ) // El then es un metodo que te permite confirmar la llegada de la informacion la petion
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
