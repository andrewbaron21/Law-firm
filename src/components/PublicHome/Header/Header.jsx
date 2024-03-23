import './Header.css'
import SEO from '../../SEO'

const PublicHome = () => {
    return (
      <div className="header-container">
        <div className="container">
          <nav className="navbar navbar-light row text-center">
            <a className="navbar-brand col-md-8 col-sm-12"><span>Baron</span> Abogados</a>
            <a className="nav-item nav-link col" href="#services">Servicios</a>
            <a className="nav-item nav-link col" href="#questions">Preguntas</a>  
            <a className="nav-item nav-link col" href="#contact-us">Contact us</a>
          </nav>
        </div>
        <SEO />
      </div>
    );
};

export default PublicHome;