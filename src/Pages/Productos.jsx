
import React from "react";
import { Heading } from '@chakra-ui/react'
import Footer from ".././Components/Footer.jsx";
import Zapatos from "../Components/Zapatos.jsx";
import Zapatilla1 from '../Media/PumaSuedeRojo.png'
import Zapatilla3 from '../Media/DCSHOES TRASE TX BKW.png'
import Zapatilla4 from '../Media/Puma black.png'
import Zapatilla5 from '../Media/DCSHOES TRASE TXDRK.png'
import Zapatilla6 from '../Media/pumasuedecañamedia.png'	
import Zapatilla7 from '../Media/ADYB700011-BL04.png'
import Zapatilla8 from '../Media/Air Force 1.png'
import { Spacer } from "@chakra-ui/react"
import { CardGroup } from "react-bootstrap";





function Productos( ){

    return(
        <div>
    
      <header >
        <br></br><br></br>
            <Heading as='h2' size='xl' color="red.900" align="center">Por compras superiores a $150.000 Envio Gratis</Heading>
	    </header> 
      <br></br><br></br>
            <CardGroup>
            <Zapatos imagen={Zapatilla1} producto={"Puma Suede Rojo"} precio={230000}/>
              <Spacer/>
            <Zapatos imagen={Zapatilla3} producto={"DCSHOES TRASE TX BKW"}precio={180000}/>
              <Spacer/>
            <Zapatos imagen={Zapatilla4} producto={"Puma black"}precio={210000}/>
            <Spacer/>
            <Zapatos imagen={Zapatilla5} producto={"DCSHOES TRASE TXDRK"}precio={230000}/>
            <Spacer/>
            <Zapatos imagen={Zapatilla6}producto={"puma sue de caña media"}precio={120000}/>
            <Spacer/>
            <Zapatos imagen={Zapatilla7}producto={"Oxfords Negro"}precio={230000}/>
            <Spacer/>
            <Zapatos imagen={Zapatilla8}producto={"Air Force 1"}precio={110000}/>
            </CardGroup> 
       
        <Footer/>
        </div>
    )
}
export default Productos
