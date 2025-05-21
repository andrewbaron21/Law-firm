import './OurTeam.css';
import Lawyer from '../../../gallery/Lawyer.jpg';
import Lawyer1 from '../../../gallery/Lawyer1.jpeg';
import Lawyer2 from '../../../gallery/Lawyer2.jpeg';
import Lawyer3 from '../../../gallery/Lawyer3.JPG';
import Lawyer4 from '../../../gallery/Lawyer4.JPG';
import Lawyer5 from '../../../gallery/Lawyer5.JPG';
import Lawyer6 from '../../../gallery/Lawyer6.JPG';
import Secretary from '../../../gallery/Secretary.JPG';

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
                      <img src={Lawyer2} alt="Lawyer" />
                    </div>
                    <h3 className="title">Aldemar Montoya Cifuentes</h3>
                    <span className="post">Director General</span>
                    <p>Derecho Administrativo y Responsabilidad Civil. Especializaciones en Derecho Administrativo, Movilidad y Transporte, y Responsabilidad Civil y Daño Reversible. Diplomado en Derecho.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer1} alt="Lawyer" />
                    </div>
                    <h3 className="title">Mallely Mejía Quintero</h3>
                    <span className="post">Gerente</span>
                    <p>Seguridad Social. Especializaciones en Derecho Laboral y Seguridad Social, y Derecho Administrativo.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer} alt="Lawyer" />
                    </div>
                    <h3 className="title">Vanessa Baron</h3>
                    <span className="post">Abogada Asociada</span>
                    <p>Familia, Civil, Comercial, Accidentes Laborales y de Tránsito. Diplomados en Derecho Laboral, Derecho Probatorio, Seguridad Social, Mecanismos Alternativos de Solución de Conflictos y Derecho Internacional Humanitario.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer4} alt="Lawyer" />
                    </div>
                    <h3 className="title">Manuela Molina Pérez</h3>
                    <span className="post">Abogada Asociada</span>
                    <p>Responsabilidad Civil Contractual y Extracontractual. Diplomado en Mecanismos Alternativos de Solución de Conflictos.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
              <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer3} alt="Lawyer" />
                    </div>
                    <h3 className="title">Elizabeth Henao Orozco</h3>
                    <span className="post">Abogada Asociada</span>
                    <p>Derecho Laboral Individual y Seguridad Social. Especialización en Derecho Administrativo y Contractual.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer5} alt="Lawyer" />
                    </div>
                    <h3 className="title">Stephen Arboleda</h3>
                    <span className="post">Dependiente Judicial</span>
                    <p>Estudiante de Derecho (7.º semestre) – Universidad Libre. Técnico en Gestión e Industria. Apoya funciones jurídicas y administrativas en la firma.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Lawyer6} alt="Lawyer" />
                    </div>
                    <h3 className="title">Laura Baron</h3>
                    <span className="post">Auxiliar Jurídico</span>
                    <p>Estudiante de Derecho (7.º semestre) – Universidad Libre. Apoya labores jurídicas y procesales dentro del equipo legal.</p>
                    {/* <!–social icon–> */}
                </div>
              </a>
            </div>
            <div className="col-md-3 col-sm-12">
              <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                <div className="our-team">
                    <div className="pic">
                      <img src={Secretary} alt="Lawyer" />
                    </div>
                    <h3 className="title">Katherine Vargas Pastrana</h3>
                    <span className="post">Asistente Administrativa</span>
                    <p>Estudiante de Derecho – Fundación Universitaria del Área Andina. Técnica profesional en Auxiliar Administrativo y Secretariado Ejecutivo Contable. Apoya la gestión administrativa y contable de la firma.</p>
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