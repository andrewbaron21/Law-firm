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
                          <h5>Derecho administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          El Derecho administrativo es el conjunto de normas jurídicas que regula la organización, funcionamiento y atribuciones de la Administración pública en sus relaciones con los particulares y con otras Administraciones Públicas (personificadas en una diversidad de órganos). Por ejemplo, los requisitos para pedir una licencia de obras o de caza, los modos de acceder a la función pública, las exigencias para solicitar una subvención
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-two" role="button">
                      <div className="square">
                          <h5>Derecho constitucional</h5>
                      </div>
                      <div className="collapse" id="collapse-two">
                        <div className="text-details">
                          El Derecho constitucional (también denominado Derecho político) se ocupa del análisis de las leyes fundamentales que definen un Estado. De esta manera, es materia de estudio todo lo relativo a la forma de Estado, forma de gobierno, derechos fundamentales y la regulación de los poderes públicos, incluyendo tanto las relaciones entre poderes públicos, como las relaciones entre los poderes públicos y los ciudadanos.
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-three" role="button">
                      <div className="square">
                          <h5>Derecho Penal</h5>
                      </div>
                      <div className="collapse" id="collapse-three">
                        <div className="text-details">
                          El Derecho Penal es el conjunto de normas que recogen los delitos, las penas que el Estado impone a los delincuentes y las medidas de seguridad que el mismo establece para la prevención de la criminalidad. Se da el nombre de delitos a ciertas acciones antisociales prohibidas por la ley, cuya comisión hace acreedor al delincuente a determinadas sanciones conocidas con el nombre específico de penas.                        
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-four" role="button">
                      <div className="square">
                          <h5>Derecho laboral</h5>
                      </div>
                      <div className="collapse" id="collapse-four">
                        <div className="text-details">
                          El Derecho laboral (también llamado Derecho del trabajo) es una rama del Derecho cuyos principios y normas jurídicas tienen por objeto la tutela del trabajo humano, productivo, libre y por cuenta ajena.
                          El Derecho Civil, regula las relaciones entre particulares, ya sean personas físicas o jurídicas. Es la más utilizada entre las ramas del derecho ya que comprende las relaciones patrimoniales, personales, de vecindad, de familia, de derecho sucesorio.                        
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-five" role="button">
                      <div className="square">
                          <h5>Responsabilidad <br/> profesional médica </h5>
                      </div>
                      <div className="collapse" id="collapse-five">
                        <div className="text-details">
                          La responsabilidad profesional médica es la obligación que tienen los médicos de reparar y satisfacer las consecuencias de los actos, omisiones y errores voluntarios e involuntarios incluso, dentro de ciertos límites, cometidos en el ejercicio de su profesión
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-six" role="button">
                      <div className="square">
                          <h5>Derecho tributario </h5>
                      </div>
                      <div className="collapse" id="collapse-six">
                        <div className="text-details">
                          El derecho tributario es la rama principal en el Estado colombiano y en la cual se desprende la hacienda pública, donde el tributo obligatorio se debe distinguir a los impuestos de los ingresos públicos de carácter gratuito donaciones y voluntarios                        
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default PublicHome;