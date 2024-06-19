import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication';
import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
