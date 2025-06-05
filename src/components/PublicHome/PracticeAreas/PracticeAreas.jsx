import { BsGrid3X3 } from 'react-icons/bs';
import { MdOutlineManageAccounts, MdOutlineFamilyRestroom } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiSuitcaseLine } from 'react-icons/ri';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { GiTrade } from 'react-icons/gi';
import { FaBalanceScale } from 'react-icons/fa'; // Optional: replace or use any appropriate icon
import './PracticeAreas.css';

const services = [
  {
    icon: <MdOutlineFamilyRestroom />,
    title: 'Área de Derecho de Familia',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Área de Seguridad Social (Pensiones)',
  },
  {
    icon: <GoLaw />,
    title: 'Área de Derecho Civil',
  },
  {
    icon: <MdOutlineManageAccounts />,
    title: 'Área de Derecho Administrativo',
  },
  {
    icon: <GiTrade />,
    title: 'Área de Derecho Comercial',
  },
  {
    icon: <AiOutlineMedicineBox />,
    title: 'Área de Responsabilidad Civil Contractual y Extracontractual',
  },
];

const PracticeAreas = () => {
  return (
    <div className="practice-areas-container" id="services">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="description col-md-8 col-sm-12 text-center">
            <h6>M & M</h6>
            <h1><span>MISIÓN</span></h1>
            <p>
              En Montoya & Mejía Abogados y Asociados ofrecemos asesoría y representación legal en todas las áreas del derecho, brindando soluciones jurídicas integrales, eficientes y personalizadas. Contamos con un equipo de abogados altamente capacitados, con más de 10 años de experiencia, comprometidos con la ética, el respeto y la vocación de servicio. Nuestra firma, con sede en Pereira y presencia a nivel nacional, trabaja cada día por proteger los derechos e intereses de nuestros clientes.
            </p>
            <h1><span>VISIÓN</span></h1>
            <p>
              Ser reconocidos a nivel nacional como una firma legal de confianza, que se distingue por su profesionalismo, calidad humana y excelencia en el ejercicio del derecho. En Montoya & Mejía Abogados y Asociados aspiramos a seguir creciendo junto a nuestros clientes, consolidándonos como aliados estratégicos en la búsqueda de justicia y soluciones efectivas.
            </p>
          </div>
        </div>

        <div className="services d-flex justify-content-center flex-wrap text-center gap-4">
          {services.map((service, index) => (
            <div className="col-auto fade-in-up" style={{ animationDelay: `${index * 0.2}s` }} key={service.title}>
              <a
                href={`https://api.whatsapp.com/send?phone=573146889980&text=Buen día, estoy interesado en un asesoramiento de ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card zoom">
                  <div className="card-icon">{service.icon}</div>
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
