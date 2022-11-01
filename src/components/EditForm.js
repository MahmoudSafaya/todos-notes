import React from 'react'
import { useGlobalContext } from '../controllers/Context'

const EditForm = () => {
  const { textInput, setTextInput, updateText, setUpdate, update, closeFormBox } = useGlobalContext();
  return (
    <>
      <div className={`form-box ${update.val ? 'overlay' : ''}`} onClick={(e) => closeFormBox(e)}>
        <form onSubmit={(e) => updateText(e, update.content)}>
          <label htmlFor='text'>Edit ToDo</label>
          <input
            type='text'
            name='text'
            placeholder='add a todo item'
            autoComplete='off'
            autoFocus
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type='submit'>Save</button>
          <span className='close-form' onClick={() => setUpdate({content: {}, val: false})}>x</span>
        </form>
      </div>
    </>
  )
}

export default EditForm