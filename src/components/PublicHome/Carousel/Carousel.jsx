import './Carousel.css'

const PublicHome = () => {
    return (
        <div className="">
				<div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="http://template-preview.com/bootstrap-templates/lawyer/images/slide01.jpg" className="d-block w-100 peinture-ombre-interne-fine" alt="..." />
							<div className="carousel-caption">
								<h1>
                                    Solución Legal Confiable
								</h1>
								<p>
                                    Soy una abogada. Voy por el debido proceso; Apuesto por la justicia y la equidad: estos valores significan mucho para mí.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="http://template-preview.com/bootstrap-templates/lawyer/images/slide02.jpg" className="d-block w-100" alt="..." />
							<div className="carousel-caption">
								<h1>
                                    Solución Legal Confiable 
								</h1>
								<p>
                                    Me enseñaron que un abogado era un custodio del sentido legal y ético de la comunidad.
								</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
		    </div>
    );
};

export default PublicHome;