import React from 'react';
import './Clients.css';

import detran from '../../assets/Clients/detran.png';
import esmpu from '../../assets/Clients/esmpu.png';
import exercito from '../../assets/Clients/exercito.avif';
import fazenda from '../../assets/Clients/fazenda.png';
import fnde from '../../assets/Clients/fnde.png';
import funasa from '../../assets/Clients/funasa.jpeg';
import governoMinas from '../../assets/Clients/governoDeMinas.webp';
import itaipu from '../../assets/Clients/ITAIPU.svg';
import pdpda from '../../assets/Clients/PDPdaPGFN.jpeg';

const clients = [
  { id: 1, name: 'DETRAN', logo: detran },
  { id: 2, name: 'ESMPU', logo: esmpu },
  { id: 3, name: 'Exército', logo: exercito },
  { id: 4, name: 'Fazenda', logo: fazenda },
  { id: 5, name: 'FNDE', logo: fnde },
  { id: 6, name: 'FUNASA', logo: funasa },
  { id: 7, name: 'Governo de Minas', logo: governoMinas },
  { id: 8, name: 'ITAIPU', logo: itaipu },
  { id: 9, name: 'PDPda PGFN', logo: pdpda },
];

export function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2 className="clients-title">
          Conexões que conquistaram a confiança de{' '}
          <span className="clients-title-highlight">
            grandes clientes
          </span>
        </h2>

        <a href="#" className="clients-see-more">
          + Veja mais
        </a>
      </div>

      <div className="clients-slider">
        <div className="clients-track">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="client-card-outer">
              <div className="client-card-inner">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}