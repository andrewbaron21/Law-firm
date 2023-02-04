import './FrequentQuestions.css'

const PublicHome = () => {
    return (
        <div className="frequent-questions-container" id="questions">
            <div className="container text-center">
            <h1>Preguntas frecuentes</h1>
              <div className="row text-center">
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-two" role="button">
                      <div className="square">
                          <h5>Administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-two">
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-three" role="button">
                      <div className="square">
                          <h5>Administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-three">
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-four" role="button">
                      <div className="square">
                          <h5>Administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-four">
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    );
};

export default PublicHome;