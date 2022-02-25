import './App.css';
import Menu from './Components/Menu';
import Carrito from './Components/Carrito';
import Favorito from './Components/Favorito';
import Login from './Components/Login';
import Landing from './Pages/Landing';
import Productos from './Pages/Productos';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    /*<div className="App">*/

    <Router>

      <Menu />
      <Carrito />
      <Favorito />
      <Login />
     
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="Productos" element={<Productos />} />
      </Routes>


      
    </Router>
  );
}


