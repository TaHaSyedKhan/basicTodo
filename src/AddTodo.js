import React, { useState } from 'react'

function AddTodo({ onAdd }) {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('please add a task')
            return
        }

        onAdd({ text })

        setText('')

    }

  return (
   
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label></label>
            <input type="text" placeholder='Add todo'
            value={text} 
            onChange={(e) => setText(e.target.value)}/>

            
        </div>
        <input type="submit" value='Save Todo' />
    </form>
  )
}

export default AddTodo