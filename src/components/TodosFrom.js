import React from 'react'
import { useGlobalContext } from '../controllers/Context'

const TodosFrom = () => {
  const { textInput, setTextInput, addNewItem, overlay, setOverlay, closeFormBox } = useGlobalContext();
  return (
    <>
      <div className={`form-box ${overlay ? 'overlay' : ''}`} onClick={(e) => closeFormBox(e)}>
        <form onSubmit={(e) => addNewItem(e)}>
          <label htmlFor='text'>New ToDo</label>
          <input
            type='text'
            name='text'
            placeholder='add a todo item'
            autoComplete='off'
            autoFocus
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type='submit'>Cool</button>
          <span className='close-form' onClick={() => setOverlay(false)}>x</span>
        </form>
      </div>
    </>
  )
}

export default TodosFrom