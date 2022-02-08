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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#59132C" fill-opacity="1" d="M0,160L34.3,165.3C68.6,171,137,181,206,165.3C274.3,149,343,107,411,128C480,149,549,235,617,245.3C685.7,256,754,192,823,170.7C891.4,149,960,171,1029,160C1097.1,149,1166,107,1234,90.7C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        
        <Footer/>
        
        </div>
    )
}

export default Landing;