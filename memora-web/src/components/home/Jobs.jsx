import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    date: '15 | 05 | 2026',
    category: 'Tecnologia',
    title: 'Desenvolvedor Front-end Pleno para startup de fintechs em crescimento.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
  },
  {
    id: 2,
    date: '20 | 05 | 2026',
    category: 'Marketing',
    title: 'Analista de Marketing Digital com foco em redes sociais e performance.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
  {
    id: 3,
    date: '27 | 05 | 2026',
    category: 'Design',
    title: 'Designer UX/UI Sênior para equipe de produtos digitais em Brasília.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: 4,
    date: '01 | 06 | 2026',
    category: 'Gestão',
    title: 'Gerente de Projetos com experiência em metodologias ágeis e setor público.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
  {
    id: 5,
    date: '05 | 06 | 2026',
    category: 'Dados',
    title: 'Analista de Dados Pleno com domínio em Power BI e SQL.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
];

const CalendarIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export function Jobs() {
  const [current, setCurrent] = useState(0);
  const total = jobs.length;
  const visible = 3;
  const maxIndex = total - visible;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleJobs = jobs.slice(current, current + visible);

  return (
    <section style={{ backgroundColor: '#b2d8d8', padding: '60px 64px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a5f5f', margin: 0 }}>Vagas</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={prev} disabled={current === 0} style={{
          background: 'none', border: 'none', cursor: current === 0 ? 'not-allowed' : 'pointer',
          color: current === 0 ? '#aaa' : '#1a5f5f', fontSize: 28, flexShrink: 0, padding: '0 8px'
        }}>←</button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1 }}>
          {visibleJobs.map((job) => (
            <a 
              key={job.id} 
              href={`#/vaga/${job.id}`} 
              style={{
                backgroundColor: '#2a9090', 
                borderRadius: 12, 
                overflow: 'hidden',
                display: 'flex', 
                flexDirection: 'column',
                textDecoration: 'none', 
                cursor: 'pointer'       
              }}
            >
              <img src={job.image} alt={job.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
              <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#d0f0f0', fontSize: 13 }}>
                  <CalendarIcon />
                  <span>{job.date}</span>
                  <span>•</span>
                  <span style={{ fontWeight: 600 }}>{job.category}</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                  {job.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <button onClick={next} disabled={current === maxIndex} style={{
          background: 'none', border: 'none', cursor: current === maxIndex ? 'not-allowed' : 'pointer',
          color: current === maxIndex ? '#aaa' : '#1a5f5f', fontSize: 28, flexShrink: 0, padding: '0 8px'
        }}>→</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: 12, height: 12, borderRadius: '50%', border: 'none', cursor: 'pointer',
            backgroundColor: i === current ? '#1a5f5f' : '#6abfbf', padding: 0,
          }} />
        ))}
      </div>
    </section>
  );
}