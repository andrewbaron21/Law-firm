import './OurTeam.css';

const PracticeAreas = () => {
    return (
      <div className="our-team-container">
        <div className="container">
          <h1 className="text-center">Nuestro equipo</h1>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                    </div>
                    <h3 className="title">Laura Baron</h3>
                    <span className="post">Abogada</span>
                    <p>Experta en pensiones y familia</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            {/* <!–2nd member–> */}
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                    </div>
                    <h3 className="title">Beatriz</h3>
                    <span className="post">Abogada</span>
                    <p>Experta en penal y administrativo</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            {/* <!–3rd member–> */}
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento con la doctora Laura Baron" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                    </div>
                    <h3 className="title">Williamson</h3>
                    <span className="post">Web Developer</span>
                    <p>Experta en...</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            {/* <!–4th member–> */}
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento con la doctora Beatriz" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                    </div>
                    <h3 className="title">Williamson</h3>
                    <span className="post">Web Developer</span>
                    <p>Experto en...</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PracticeAreas;