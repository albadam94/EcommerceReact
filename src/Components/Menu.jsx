import React from 'react';
import Logo from '../Media/MarcaSF.png'
import {NavLink} from 'react-router-dom';


function Menu(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
      
<a class="navbar-brand" href="/">
      <img src={Logo}alt="Logo" width="30" height="55"/>
    </a>
        <div className="Items">
            <div class="navbar-nav">
                <NavLink class="nav-link" activeClass="active" onClick to='/'>INICIO</NavLink>
                <NavLink class="nav-link" activeClass="active" to='Productos'>SHOP</NavLink>
                <NavLink class="nav-link" activeClass="active" onClick to="/#Ofertas">OFERTAS</NavLink>
                <NavLink class="nav-link " activeClass="active"onClick to="/#Contacto">CONTACTO</NavLink>
                </div>
                
            </div>
        </div>  
    </nav>
</div>

    )
}

export default Menu;