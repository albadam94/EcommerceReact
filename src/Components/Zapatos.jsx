import React from 'react';  


function Zapatos(props){
   
    return(
        
<div className="col-md-6 col-md-5 col-md-4">
	
			<img  src={props.imagen}  alt="Zapatillas" width="180" height="130"/> 
			
				<figcaption className="info-wrap border-top">
					<div className="price-wrap">
						<span  className="price">{"$"+props.precio}</span>
					</div> 
					<p className="title mb-3 ">{props.producto}</p>
					
					<a href="/" className="btn btn-danger">Comprar</a>
					<a href="/" className="btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
				</figcaption>
			</div>
		
      
    )
}

export default Zapatos;