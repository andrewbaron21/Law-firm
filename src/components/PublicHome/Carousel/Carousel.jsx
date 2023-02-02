import './Carousel.css'

const PublicHome = () => {
    return (
        <div className="">
				<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="http://template-preview.com/bootstrap-templates/lawyer/images/slide01.jpg" class="d-block w-100 peinture-ombre-interne-fine" alt="..." />
							<div class="carousel-caption">
								<h1>
                                    Solución Legal Confiable
								</h1>
								<p>
                                    Soy una abogada. Voy por el debido proceso; Apuesto por la justicia y la equidad: estos valores significan mucho para mí.
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="http://template-preview.com/bootstrap-templates/lawyer/images/slide02.jpg" class="d-block w-100" alt="..." />
							<div class="carousel-caption">
								<h1>
                                    Solución Legal Confiable 
								</h1>
								<p>
                                    Me enseñaron que se suponía que un abogado era un custodio del sentido legal y ético de la comunidad.
								</p>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
		    </div>
    );
};

export default PublicHome;