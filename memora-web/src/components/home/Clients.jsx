import React, { useState, useEffect } from 'react';
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
  // Estado para controlar quantos itens aparecem baseado na largura da tela
  const [visibleCount, setVisibleCount] = useState(5);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleCount(2); // Celulares: 2 logos
      } else if (width < 1024) {
        setVisibleCount(3); // Tablets: 3 logos
      } else {
        setVisibleCount(5); // Desktop: 5 logos
      }
    }

    // Executa ao montar e adiciona o listener de redimensionamento
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Garante que o índice máximo seja recalculado dinamicamente
  const maxIndex = Math.max(clients.length - visibleCount, 0);

  // Ajusta a posição caso a mudança de tela quebre o limite máximo
  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex);
    }
  }, [visibleCount, maxIndex, current]);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleClients = clients.slice(current, current + visibleCount);

  return (
    <section className="clients-section">
      {/* Cabeçalho */}
      <div className="clients-header">
        <h2 className="clients-title">
          Conexões que conquistaram a confiança de{' '}
          <span className="clients-title-highlight">grandes clientes</span>
        </h2>
        <a href="#" className="clients-see-more">
          + Veja mais
        </a>
      </div>

      {/* Área do Carrossel */}
      <div className="clients-carousel-container">
        <button 
          onClick={prev} 
          disabled={current === 0} 
          className="carousel-arrow-btn"
        >
          ‹
        </button>

        {/* O grid agora recebe uma propriedade CSS customizada contendo o número dinâmico de colunas */}
        <div 
          className="clients-grid" 
          style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
        >
          {visibleClients.map((client) => (
            <div key={client.id} className="client-card-outer">
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

        <button 
          onClick={next} 
          disabled={current === maxIndex} 
          className="carousel-arrow-btn"
        >
          ›
        </button>
      </div>
    </section>
  );
}