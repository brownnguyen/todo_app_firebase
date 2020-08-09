import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, todo: doc.data().todo
      })))
    })
  }, [])
  const renderTodos = () => {
    return todos.map((item, index) => {
      return (
        <Todo key={index}
          todo={item}></Todo>
      )
    })
  }
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput("")
  }
  return (
    <div className="App">
      <h1>Hello Nau Nac Ne</h1>
      <form>
        <FormControl>
          <InputLabel>Write todo app</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit"
          onClick={addTodo}
          variant="contained"
          color="secondary">
          App Todo
        </Button>
      </form>
      <ul>
        {renderTodos()}
      </ul>
    </div>
  );
}

export default App;
