import './OurTeam.css';
import Lawyer from '../../../gallery/Lawyer.jpg';
import Lawyer1 from '../../../gallery/Lawyer1.jpeg';
import Lawyer2 from '../../../gallery/Lawyer2.jpeg';
import Lawyer3 from '../../../gallery/Lawyer3.JPG';
import Lawyer4 from '../../../gallery/Lawyer4.JPG';
import Lawyer5 from '../../../gallery/Lawyer5.JPG';
import Lawyer6 from '../../../gallery/Lawyer6.JPG';
import Secretary from '../../../gallery/Secretary.JPG';
import { useState } from 'react';

const teamMembers = [
  {
    name: "Aldemar Montoya Cifuentes",
    role: "Director General",
    image: Lawyer2,
    description: "Derecho Administrativo y Responsabilidad Civil. Especializaciones en Derecho Administrativo, Movilidad y Transporte, y Responsabilidad Civil y Daño Reversible. Diplomado en Derecho."
  },
  {
    name: "Mallely Mejía Quintero",
    role: "Gerente",
    image: Lawyer1,
    description: "Seguridad Social. Especializaciones en Derecho Laboral y Seguridad Social, y Derecho Administrativo."
  },
  {
    name: "Vanessa Baron",
    role: "Abogada Asociada",
    image: Lawyer,
    description: "Familia, Civil, Comercial, Accidentes Laborales y de Tránsito. Diplomados en Derecho Laboral, Derecho Probatorio, Seguridad Social, Mecanismos Alternativos de Solución de Conflictos y Derecho Internacional Humanitario."
  },
  {
    name: "Manuela Molina Pérez",
    role: "Abogada Asociada",
    image: Lawyer4,
    description: "Responsabilidad Civil Contractual y Extracontractual. Diplomado en Mecanismos Alternativos de Solución de Conflictos."
  },
  {
    name: "Elizabeth Henao Orozco",
    role: "Abogada Asociada",
    image: Lawyer3,
    description: "Derecho Laboral Individual y Seguridad Social. Especialización en Derecho Administrativo y Contractual."
  },
  {
    name: "Stephen Arboleda",
    role: "Dependiente Judicial",
    image: Lawyer5,
    description: "Estudiante de Derecho (7.º semestre) – Universidad Libre. Técnico en Gestión e Industria. Apoya funciones jurídicas y administrativas en la firma."
  },
  {
    name: "Juan David Álvarez Díaz",
    role: "Auxiliar Jurídico",
    image: Lawyer6,
    description: "Estudiante de Derecho (7.º semestre) – Universidad Libre. Apoya labores jurídicas y procesales dentro del equipo legal."
  },
  {
    name: "Katherine Vargas Pastrana",
    role: "Asistente Administrativa",
    image: Secretary,
    description: "Estudiante de Derecho – Fundación Universitaria del Área Andina. Técnica profesional en Auxiliar Administrativo y Secretariado Ejecutivo Contable. Apoya la gestión administrativa y contable de la firma."
  }
];

const PracticeAreas = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="our-team-container">
      <div className="container">
        <h1 className="text-center">Nuestro equipo</h1>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="title">{member.name}</h3>
                <span className="post">{member.role}</span>
                <p className={expanded[index] ? "expanded" : "collapsed"}>
                  {member.description}
                </p>
                <button className="read-more" onClick={() => toggleExpand(index)}>
                  {expanded[index] ? "Leer menos" : "Leer más"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
