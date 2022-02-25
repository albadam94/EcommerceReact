import React from 'react';  


function Zapatos(props){
   
    return(
        
<div>
<section className="padding-y"/>
<div className="container">
	<div className="row">
		<div className="col-lg-3 col-md-6 col-sm-6">
			<figure className="card card-product-grid">
				<div className="img-wrap"> 
					<img src={props.imagen}  alt="Zapatillas" width="180" height="130"/> 
				</div>
				<figcaption className="info-wrap border-top">
					<div className="price-wrap">
						<span  className="price">{"$"+props.precio}</span>
					</div> 
					<p className="title mb-2">{props.producto}</p>
					
					<a href="/" className="btn btn-danger">Comprar</a>
					<a href="/" className="btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
				</figcaption>
			</figure>
		</div> </div> 
        </div>
       
        </div>
    )
}

export default Zapatos;