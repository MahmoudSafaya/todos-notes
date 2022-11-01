import { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const api = 'https://todos-notes-1.herokuapp.com';

  const [todos, setTodos] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [update, setUpdate] = useState({content: {}, val: false})

  const fetchData = async () => {
    await axios.get(api)
      .then(res => setTodos(res.data))
      .catch(err => console.log(err))
  }

  const addNewItem = async (e) => {
    e.preventDefault();
    if (textInput === '') return null
    await axios.post(`${api}/todo/new`, {
      text: textInput
    })
      .then(res => res.data)
      .catch(err => console.error(`Error - addNewItem: ${err}`));

    setTextInput('');
    setOverlay(false);
  }

  const deleteItem = (e) => {
    const id = e._id;
    axios.delete(`${api}/todo/delete/${id}`)
      .then(res => res.data)
      .catch(err => console.error(`Error - deleteItem: ${err}`));
  }

  const updateComplete = (e) => {
    const id = e._id
    axios.put(`${api}/todo/complete/${id}`, {
      complete: !e.complete
    })
      .then(res => res.data)
      .catch(err => console.error(`Error - updateComplete: ${err}`))
  }

  const updateText = (e, content) => {
    e.preventDefault();
    const id = content._id
    axios.put(`${api}/todo/text/${id}`, {
      text: textInput
    })
      .then(res => res.data)
      .catch(err => console.error(`Error - updateText: ${err}`))

    setUpdate({content: {}, val: false})
    setTextInput('');
  }

  const closeFormBox = (e) => {
    if(e.target.className === 'form-box overlay'){
      setOverlay(false);
      setUpdate(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [todos])

  return (
    <AppContext.Provider value={{
      todos,
      textInput,
      overlay,
      update,
      setUpdate,
      setTextInput,
      setOverlay,
      addNewItem,
      deleteItem,
      updateComplete,
      updateText,
      closeFormBox
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }