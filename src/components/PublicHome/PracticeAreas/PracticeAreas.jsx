import { BsGrid3X3 } from 'react-icons/bs';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiSuitcaseLine } from 'react-icons/ri';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { GiTrade } from 'react-icons/gi';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import './PracticeAreas.css';

const PracticeAreas = () => {
    return (
      <div className="practice-areas-container" id="services">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="description col-md-8 col-sm-12 text-center">
              <h6>M & M</h6>
              <h1><span>MISIÓN</span></h1>
              <p className="">
                En Montoya & Mejía Abogados y Asociados ofrecemos asesoría y representación legal en todas las áreas del derecho, brindando soluciones jurídicas integrales, eficientes y personalizadas. Contamos con un equipo de abogados altamente capacitados, con más de 10 años de experiencia, comprometidos con la ética, el respeto y la vocación de servicio. Nuestra firma, con sede en Pereira y presencia a nivel nacional, trabaja cada día por proteger los derechos e intereses de nuestros clientes.
              </p>
              <h1><span>VISIÓN</span></h1>
              <p className="">
                Ser reconocidos a nivel nacional como una firma legal de confianza, que se distingue por su profesionalismo, calidad humana y excelencia en el ejercicio del derecho. En Montoya & Mejía Abogados y Asociados aspiramos a seguir creciendo junto a nuestros clientes, consolidándonos como aliados estratégicos en la búsqueda de justicia y soluciones efectivas.
              </p>
            </div>
          </div>

          <div className="services ">
            <div className="row text-center">
            <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema administrativo" target="_blank" className="">
                  <div className="card zoom">
                    <MdOutlineManageAccounts className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Administrativo</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema civil" target="_blank" className="">
                  <div className="card zoom">
                    <GoLaw className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Civil</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema administrativo" target="_blank" className="">
                  <div className="card zoom">
                    <MdOutlineManageAccounts className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Constitucional</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema administrativo" target="_blank" className="">
                  <div className="card zoom">
                    <GiTrade className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Comercial o mercantil</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema familia" target="_blank" className="">
                  <div className="card zoom">
                    <MdOutlineFamilyRestroom className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Familia</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema laboral" target="_blank" className="">
                  <div className="card zoom">
                    <RiSuitcaseLine className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Laboral</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema familia" target="_blank" className="">
                  <div className="card zoom">
                    <AiOutlineMedicineBox className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Responsabilidad medica</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de tema penal" target="_blank" className="">
                  <div className="card zoom">
                    <BsGrid3X3 className="card-img-top services-icons" />
                    <div className="card-body">
                      <h5 className="card-title">Penal</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PracticeAreas;