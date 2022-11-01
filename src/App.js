import { useGlobalContext } from './controllers/Context';
import EditForm from './components/EditForm';
import Todos from './components/Todos';
import TodosFrom from './components/TodosFrom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { todos, overlay, setOverlay, update} = useGlobalContext();

  if (!todos) return null

  return (
    <>
      <h1 className='header-title'>Notes <FontAwesomeIcon icon={faIcons} className='notes-icon' /></h1>
      <Todos />
      <button className='new-btn' onClick={() => setOverlay(!overlay)}>+</button>
      {overlay ? <TodosFrom /> : '' }
      {update.val ? <EditForm /> : ''}
    </>
  );
}

export default App;
