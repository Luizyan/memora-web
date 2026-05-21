import React, { useState } from 'react';

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
  const [current, setCurrent] = useState(0);
  const visible = 5;
  const maxIndex = Math.max(clients.length - visible, 0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleClients = clients.slice(current, current + visible);

  const arrowBtn = (onClick, disabled, label) => (
    <button onClick={onClick} disabled={disabled} style={{
      background: 'none', border: 'none', fontSize: 22,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? '#ccc' : '#333',
      flexShrink: 0, padding: '0 8px',
    }}>{label}</button>
  );

  return (
    <section style={{ padding: '80px 64px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.3 }}>
          Conexões que conquistaram a confiança de{' '}
          <span style={{ color: '#2a9090' }}>grandes clientes</span>
        </h2>
        <a href="#" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline', fontSize: 15, whiteSpace: 'nowrap', marginTop: 6 }}>
          + Veja mais
        </a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {arrowBtn(prev, current === 0, '‹')}

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visible}, 1fr)`, gap: 16, flex: 1 }}>
          {visibleClients.map((client) => (
            <div key={client.id} style={{
              backgroundColor: '#f0f0f0',
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1',
            }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: 8,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
              }}>
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ maxWidth: '100%', maxHeight: 80, objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>

        {arrowBtn(next, current === maxIndex, '›')}
      </div>
    </section>
  );
}