import './Carousel.css'
import Lawyers from '../../../gallery/Lawyers.jpg';

const PublicHome = () => {
    return (
        <div className="">
			<div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={Lawyers} className="d-block w-100 peinture-ombre-interne-fine" alt="..." />
						<div className="carousel-caption">
						</div>
					</div>
				</div>
				{/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button> */}
			</div>
		</div>
    );
};

export default PublicHome;