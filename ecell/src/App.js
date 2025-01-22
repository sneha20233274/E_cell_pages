import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Grid from './components/Grid/Grid'
import Linkdin from './components/Linkdin/Linkdin'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Grid/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/linkdin' element ={<Linkdin/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;