import './App.css';
import Menu from './Components/Menu';
import Accesos from './Components/Accesos';
import Landing from './Pages/Landing';
import Productos from './Pages/Productos';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    /*<div className="App">*/

    <Router>

      <Menu />
      <Accesos />
     
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="Productos" element={<Productos />} />
      </Routes>


      
    </Router>
  );
}


