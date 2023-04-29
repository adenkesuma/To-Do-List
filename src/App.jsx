import './App.css';
import Activity from './components/Activity';
import ActivityDetail from "./components/ActivityDetail";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Activity />} />
        <Route path="/detail/:id" element={<ActivityDetail />} />
      </Routes>
    </>
  )
}

export default App;
