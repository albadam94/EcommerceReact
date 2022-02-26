import React from 'react';  
import { Image,Flex, Spacer,Stack } from '@chakra-ui/react'



function Zapatos(props){
   
    return(
        <Flex>
			

			<div >
				<Stack direction="row">
			<Image boxSize='200px' src={props.imagen}  width="120" alt="Zapatillas"/> 
			<Spacer/>
			<figcaption className="info-wrap border-top card-body">
					<div className="price-wrap">
						<span  className="price">{"$"+props.precio}</span>
					</div> 
					<p className="title mb-3 ">{props.producto}</p>
					
					<a href="/" className="btn btn-danger">Comprar</a>
					<a href="/" className="btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
				</figcaption>
				</Stack>
				</div>
			
				
			
			</Flex>
		
      
    )
}

export default Zapatos;