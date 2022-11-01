import React from 'react'
import { useGlobalContext } from '../controllers/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Todos = () => {
  const { todos, updateComplete, deleteItem, setUpdate } = useGlobalContext();
  return (
    <>
      <main className='todos'>
        <ul className='todo-list'>
          {
            todos.map(item => {
              const { _id, text, complete } = item;
              return (
                <React.Fragment key={_id}>
                  <li>
                    <p
                      className={complete ? 'complete' : ''}
                      onClick={() => updateComplete(item)}
                    >{text}</p>

                    <div className='li-icons'>
                      <FontAwesomeIcon icon={faPen} onClick={() => setUpdate({content: item, val: true})} />
                      <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(item)} />
                    </div>
                  </li>
                </React.Fragment>
              )
            })
          }
        </ul>
      </main>
    </>
  )
}

export default Todos