import './App.css';
import Activity from './Activity';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Activity />}>
          <Route path="/detail/:id" element={<TodoList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
