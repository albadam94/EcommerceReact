import React from "react";


function Footer( ){
    return(
        <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#59132C" fill-opacity="1" d="M0,160L34.3,165.3C68.6,171,137,181,206,165.3C274.3,149,343,107,411,128C480,149,549,235,617,245.3C685.7,256,754,192,823,170.7C891.4,149,960,171,1029,160C1097.1,149,1166,107,1234,90.7C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        
            <div class="b-example-divider" id="Contacto"></div>


            <div class="container">
            <footer class="py-5">
                <div class="row">
                <div class="col-2">
                    
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Inicio</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Buscar una tienda</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Garantias</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Servicio al cliente</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Devoluciones</a></li>
                    </ul>
                </div>
                 <div class="col-2">
                
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Tendencias</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Envios</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Newsletter</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Social media</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Contactanos</a></li>
                    </ul>
                </div>

                <div class="col-4 offset-1">
                    <form>
                    <h5>Suscribete a nuestro newsletter</h5>
                    <p>Cada mes te enviaremos nuestras mejores ofertas</p>
                    <div class="d-flex w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                        <button class="btn btn-danger" type="button">Suscribete</button>
                    </div>
                    </form>
                </div>
                </div>

                <div class="d-flex justify-content-between py-4 my-4 border-top">
                <p>&copy; Diseño y Desarrollo: Albadam Diseñador Multimedia</p>
                <ul class="list-unstyled d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                
                </ul>
                </div>
            </footer>
            </div>




        </div>
    )
}

export default Footer;