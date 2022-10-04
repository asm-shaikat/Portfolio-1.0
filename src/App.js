import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} ></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
