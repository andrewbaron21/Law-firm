import './ContactUs.css';

const PracticeAreas = () => {
    return (
      <footer className="contact-us-container text-center text-lg-start bg-light text-muted" id="contact-us">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Montoya & Megia Abogados y Asociados
                </h6>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
                <p><i className="fas fa-home me-3"></i> Dirección: Calle 39 No. 7-19, Tercer Piso, Pereira, Risaralda</p>
                <p>
                    <i className="fas fa-print me-3"></i>
                    <a href="tel:3146889980">314-688-9980</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">
            © 2025 Creado por: 
            <a className="text-reset fw-bold" href="https://www.linkedin.com/in/juan-andres-baron-baron/" target="_blank" rel="noopener noreferrer">
                Juan Andres Baron Baron
            </a>
            <br />
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    );
};

export default PracticeAreas;