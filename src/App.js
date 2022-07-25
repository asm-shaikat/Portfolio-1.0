import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certificates from './components/navbar/Certificates';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} ></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/certificates' element={<Certificates/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
