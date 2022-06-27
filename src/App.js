import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Frontend from './components/skills/frontend/Frontend';
import Backend from './components/skills/backend/Backend';
import Database from './components/skills/database/Database';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} ></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/frontend' element={<Frontend/>}></Route>
          <Route path='/backend' element={<Backend/>}></Route>
          <Route path='/database' element={<Database/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
