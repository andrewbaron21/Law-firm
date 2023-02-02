import './Header.css'

const PublicHome = () => {
    return (
        <div className="header-container">
          <div className="container">
            <nav class="navbar navbar-light row text-center">
                    <a className="navbar-brand col-md-8 col-sm-12"><span>Abogada</span> Laura Baron</a>
                    <a className="nav-item nav-link col" href="#">Home</a>
                    <a className="nav-item nav-link col" href="#">Features</a>  
                    <a className="nav-item nav-link col" href="#">Pricing</a>
            </nav>
          </div>
        </div>
    );
};

export default PublicHome;