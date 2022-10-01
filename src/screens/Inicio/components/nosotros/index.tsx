import { FC } from 'react';
import './style.css';

const Nosotros: FC = () => (
        <div className="contentNosotros">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,186.7C384,171,480,85,576,90.7C672,96,768,192,864,197.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="containBackground">
                <div className="containNosotros">
                    <div className="textNosotros">
                        <h2>Que nos distingue</h2>
                        <br />
                        <strong>AMPLIA EXPERIENCIA</strong>
                        <p>Somos un criadero confiable, responsable, y altamente capacitado para darte un servicio a la altura. Siempre a la vanguardia y a la orden de nuestros clientes, por tanto somos una opcion a considerar si buscas un amigo de cuatros patas.</p>
                        <br />
                        <strong>EL MEJOR AMIGO DEL HOMBRE</strong>
                        <p>El perro es considerado un animal fiel, leal y de gran ayuda para el ser humano, con el tiempo hemos creado cientos de razas domesticas, en las cuales una resalta por su gran cariño, su exelente lealtad y ser un buen perro guardian, <b>El Bulldog Frances.</b></p>
                    </div>
                    <div className="containCards">
                        <div className="container-3d">
                            <div className="cards">
                                <div className="front">
                                    <div className="front-content">
                                        <img src="/resources/img/nosotros/card1.png" alt=""/>
                                        <h2>Certificado de Pureza</h2>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                    <img src="/resources/img/nosotros/card.jpg" alt=""/>
                                        <p>Al momento que tu cachorro llegue a tus manos se te entregara su certificado de pureza.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-3d">
                            <div className="cards">
                                <div className="front">
                                    <div className="front-content">
                                        <img src="/resources/img/nosotros/card2.png" alt=""/>
                                        <h2>Certificado de Salud</h2>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                    <img src="/resources/img/nosotros/card.jpg" alt=""/>
                                        <p>Tu bulldog vendra acompañado de un desarrollo sano y fuerte de su cuerpo con el que se asegurara su salud plena.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-3d">
                            <div className="cards">
                                <div className="front">
                                    <div className="front-content">
                                        <img src="/resources/img/nosotros/card3.png" alt=""/>
                                        <h2>Carnet de Vacunacion</h2>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                    <img src="/resources/img/nosotros/card.jpg" alt=""/>
                                        <p>Tu cachorro ira con una armadura impenetrable al momento de su entrega. Se entregara con todas sus vacunas al dia que le permitan un estilo de vida saludable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-3d">
                            <div className="cards">
                                <div className="front">
                                    <div className="front-content">
                                        <img src="/resources/img/nosotros/card4.png" alt=""/>
                                        <h2>Cuidado y Recomendaciones</h2>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                    <img src="/resources/img/nosotros/card.jpg" alt=""/>
                                        <p>Sabemos que deseas lo mejor para tu pequeño, por esta razon te de facilitaran cuidados y recomendaciones que debes tener en cuenta al momento de su crianza.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

export default Nosotros;
