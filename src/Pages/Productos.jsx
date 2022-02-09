import React from "react";
import Footer from ".././Components/Footer.jsx";
import Zapatos from "../Components/Zapatos.jsx";





function Productos( ){
    return(
        <div>
        
        <header className="section-heading">
		<h3 className="section-title text-center ">Por compras superiores a $150.000 Envio Gratis</h3>
	</header> 
            
            <Zapatos/>
            <Zapatos/>
        <Footer/>
        </div>
    )
}


export default Productos;