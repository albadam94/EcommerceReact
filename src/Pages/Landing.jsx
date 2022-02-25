import React from "react";
import Zapatilla1 from '../Media/PumaSuedeRojo.png'
import Zapatilla2 from '../Media/Imgseccion2.png'
import Zapatilla3 from '../Media/DCSHOES TRASE TX BKW.png'
import Zapatilla4 from '../Media/Puma black.png'
import Zapatilla5 from '../Media/DCSHOES TRASE TXDRK.png'
import Zapatilla6 from '../Media/pumasuedecañamedia.png'	
import Zapatilla7 from '../Media/ADYB700011-BL04.png'
import Zapatilla8 from '../Media/Air Force 1.png'
import Footer from ".././Components/Footer.jsx";

function Landing(){
    return(
        <div>
            <div className="fs-1">
             <h1 className="Pumasuede"> PUMA SUEDE MID<br></br>XXI</h1>
        </div>
        <div>
            <img className=" Zapatilla1 img-fluid" src={Zapatilla1} alt="Zapatilla1" />
        </div>
      
        <h2 className="fs-2">Por compras superiores <br></br>a $150.000<br></br><strong>ENVIO GRATIS</strong> </h2>
        <button className="promo1 btn btn-danger">Comprar</button>
        <img className="Zapatilla2 img-fluid" src={Zapatilla2} alt="Zapatilla2" />
        
        <h2 className="Pumasuede" id="Ofertas">MARCA TU ESTILO </h2>

        <div class="card-group">
            <div class="card">
                <img src={Zapatilla3} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
            <div class="card">
                <img src={Zapatilla4} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
            <div class="card">
                <img src={Zapatilla5} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
        </div>

        <h1 className="Pumasuede" >TENDENCIAS DE LA SEMANA </h1>
        <div class="card-group">
            <div class="card">
                <img src={Zapatilla6} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
            <div class="card">
                <img src={Zapatilla7} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
            <div class="card">
                <img src={Zapatilla8} class="card-img-top" alt="Zapatillas"/>
                <div class="card-body">
                
                </div>
            </div>
        </div>
      
        <Footer/>
        
        </div>
    )
}



export default Landing;