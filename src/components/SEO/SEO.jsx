import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
    return (
        <div className="header-container">
          <Helmet>
              <title>Abogados de Accidentes de Tránsito - Laura Baron Abogados</title>
              <meta name="description" content="Especialistas en casos de accidentes de tránsito en Pereira. Asesoría legal y representación en demandas por accidentes de tráfico." />
              <meta name="keywords" content="abogados de accidentes de tránsito, abogados de tráfico, asesoría legal en accidentes, demandas por accidentes de tráfico, abogados en Pereira" />
              {/* Otras etiquetas y metadatos relevantes */}
          </Helmet>
        </div>
    );
};

export default SEO;