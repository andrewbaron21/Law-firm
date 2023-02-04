import './OurTeam.css';

const PracticeAreas = () => {
    return (
      <div className="our-team-container">
        <div className="container">
          <h1 className="text-center">Nuestro equipo</h1>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="our-team">
                  <div className="pic">
                    <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                  </div>
                  <h3 className="title">Williamson</h3>
                  <span className="post">Web Developer</span>
                  {/* <!–social icon–> */}
            </div>
            </div>
            {/* <!–2nd member–> */}
            <div className="col-md-3 col-sm-12">
              <div className="our-team">
                  <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                  </div>
                  <h3 className="title">Kristiana</h3>
                  <span className="post">Web Designer</span>
                  {/* <!–social Icon–> */}
              </div>
            </div>
            {/* <!–3rd member–> */}
            <div className="col-md-3 col-sm-12">
              <div className="our-team">
                  <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                  </div>
                  <h3 className="title">Kristiana</h3>
                  <span className="post">Web Designer</span>
                  {/* <!–social icon–> */}
              </div>
            </div>
            {/* <!–4th member–> */}
            <div className="col-md-3 col-sm-12">
              <div className="our-team">
                  <div className="pic">
                      <img src="http://template-preview.com/bootstrap-templates/lawyer/images/team1.png" />
                  </div>
                  <h3 className="title">Kristiana</h3>
                  <span className="post">Web Designer</span>
                  {/* <!–social icon–> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PracticeAreas;