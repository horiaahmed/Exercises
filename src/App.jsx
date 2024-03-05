import { useState, useEffect } from 'react'
import noteService from './services/noteService'
import Note from './Components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  const toggleimportanceof=id=>{
    
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
    .update(id,changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })
  

  }

  useEffect(() => {
    noteService
    .getAll().then(response=>{
      setNotes(response.data)
    })
   
      
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
       id: `${notes.length + 1}`,
      
    }
    noteService
    .create.then(response=>{
      console.log(response.data)
    })
    setNotes(notes.concat(noteObject))
    setNewNote(" ")
   }
 
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}
          toggleimportance={()=>toggleimportanceof(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
      <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App

