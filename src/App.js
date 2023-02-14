import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Three from './components/3d/Three';
import Resume from './components/resume/Resume';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} ></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/three' element={<Three/>}></Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
