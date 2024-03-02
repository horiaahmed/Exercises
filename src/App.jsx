import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setperson] = useState({})
  const [id, setid] = useState("")



  useEffect(() => {
    axios
      .get(`http://localhost:3001/persons/${id}`)
      .then(response => {
        setperson(response.data)
      })
  }, [id])
  // console.log(persons.name)

  return (
    <div> <h1>{persons.name}</h1>
    <input type="text" value={id} onChange={(e)=> setid(e.target.value)}/></div>

 
  )


}

export default App