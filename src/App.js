import React from "react";
import { useState } from 'react';
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todos from "./Todos"

function App() {
    const [showAddTodo, setShowAddTodo] = useState(true);

    const [todos, setTodos] = useState( [
        {
            id: 1,
            text: 'Doctors Appointment'
        },

        {
            id: 2,
            text: 'Meeting '
        }
    ])

    // Add Todo
    const addTodo = (todo) => {
        const id = Math.floor(Math.random() * 100) + 1
        const newTodo = {id, ...todo}
        setTodos([...todos, newTodo])
    }
    
    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      }

    return (
        <div className="container">
           
           <Header  onAdd={() => setShowAddTodo(!showAddTodo)}
           showAdd={showAddTodo} />
  
           {showAddTodo && <AddTodo onAdd={addTodo} />}

            {todos.length > 0 ? (
               <Todos todos={todos} onDelete = {deleteTodo} /> 
          )
             : ('No Todos To Show')}
        </div>
    );
}

export default App;