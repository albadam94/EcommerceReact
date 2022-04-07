import React from 'react';
import Logo from '../Media/MarcaSF.png'
import {NavLink} from 'react-router-dom';


function Menu(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="navbar-nav">
      
<a className="navbar-brand" href="/">
      <img src={Logo}alt="Logo" width="30" height="55"/>
    </a>
        <div className="navbar-nav">
            
                <NavLink className="nav-link" activeClass="active" onClick to='/'>INICIO</NavLink>
                <NavLink className="nav-link" activeClass="active" to='Productos'>SHOP</NavLink>
                <NavLink className="nav-link" activeClass="active" onClick to="/#Ofertas">OFERTAS</NavLink>
                <NavLink className="nav-link " activeClass="active"onClick to="/#Contacto">CONTACTO</NavLink>
        </div>
                
           
        </div>  
    </nav>
</div>

    )
}

export default Menu;