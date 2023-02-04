import './Header.css'

const PublicHome = () => {
    return (
        <div className="header-container">
          <div className="container">
            <nav className="navbar navbar-light row text-center">
                    <a className="navbar-brand col-md-8 col-sm-12"><span>Abogada</span> Laura Baron</a>
                    <a className="nav-item nav-link col" href="#services">Servicios</a>
                    <a className="nav-item nav-link col" href="#questions">Preguntas</a>  
                    <a className="nav-item nav-link col" href="#contact-us">Contact us</a>
            </nav>
          </div>
        </div>
    );
};

export default PublicHome;