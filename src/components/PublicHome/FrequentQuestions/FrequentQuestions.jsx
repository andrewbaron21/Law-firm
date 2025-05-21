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
                          <h5>Área de Derecho de Familia</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Brindamos asesoría y representación en procesos de separación, divorcio, custodia, alimentos, visitas, adopciones, patria potestad, unión marital de hecho y sucesiones. Trabajamos con enfoque humano y acompañamiento integral en la protección de los derechos de las familias.
                        </div>
                      </div>
                    </div>
                </div>
                   <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Área de Seguridad Social (Pensiones)</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Orientamos y representamos a nuestros clientes en trámites relacionados con pensiones de vejez, invalidez y sobrevivientes, así como en traslados de régimen, reliquidaciones y reconocimiento de semanas cotizadas. Defensa ante fondos públicos y privados.
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Área de Derecho Civil</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Manejamos procesos de responsabilidad civil, contratos civiles, arrendamientos, pertenencias, resolución de contratos, conflictos de propiedad y reclamaciones de daños. Brindamos soluciones jurídicas en conflictos entre particulares.
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Área de Derecho Administrativo</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Representamos a personas naturales y jurídicas en procesos frente a entidades del Estado. Asesoramos en demandas por nulidad y restablecimiento del derecho, reparaciones directas, responsabilidad del Estado, contratos estatales y recursos administrativos.
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Área de Derecho Comercial</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Ofrecemos asesoría en contratos mercantiles, sociedades, cobros jurídicos, propiedad industrial, insolvencia empresarial, títulos valores, y litigios comerciales. Apoyamos tanto a empresas como a comerciantes individuales.
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="out-square" data-bs-toggle="collapse" href="#collapse-one" role="button">
                      <div className="square">
                          <h5>Área de Responsabilidad Civil Contractual y Extracontractual</h5>
                      </div>
                      <div className="collapse" id="collapse-one">
                        <div className="text-details">
                          Representamos a víctimas de daños por incumplimientos contractuales o por hechos como accidentes de tránsito, fallas médicas, productos defectuosos, entre otros. Buscamos la reparación integral del daño, ya sea patrimonial o moral.
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