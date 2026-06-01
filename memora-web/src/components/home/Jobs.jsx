import React, { useState, useEffect } from 'react';
import './Jobs.css'; // Importando o novo arquivo CSS

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
    <line x1="3" y1="10" x2="21" height="10" y2="10"/>
  </svg>
);

export function Jobs() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const total = jobs.length;

  // Monitora a largura da janela para adaptar dinamicamente o salto do carrossel
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setVisibleCount(1);  // Celular: 1 vaga por vez
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);  // Tablet: 2 vagas por vez
      } else {
        setVisibleCount(3);  // Desktop: 3 vagas por vez
      }
    }

    handleResize(); // Executa ao montar o componente
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(total - visibleCount, 0);

  // Garante que o índice atual se ajuste caso a tela mude de tamanho bruscamente
  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex);
    }
  }, [visibleCount, maxIndex, current]);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleJobs = jobs.slice(current, current + visibleCount);

  return (
    <section className="jobs-section">
      <h2 className="jobs-title">Vagas</h2>

      <div className="jobs-carousel-container">
        <button 
          onClick={prev} 
          disabled={current === 0} 
          className="arrow-btn"
          aria-label="Vagas anteriores"
        >
          ←
        </button>

        <div className="jobs-grid">
          {visibleJobs.map((job) => (
            <a key={job.id} href={`#/vaga/${job.id}`} className="job-card">
              <img src={job.image} alt={job.title} />
              <div className="job-card-info">
                <div className="job-card-meta">
                  <CalendarIcon />
                  <span>{job.date}</span>
                  <span>•</span>
                  <span style={{ fontWeight: 600 }}>{job.category}</span>
                </div>
                <h3 className="job-card-title">{job.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <button 
          onClick={next} 
          disabled={current === maxIndex} 
          className="arrow-btn"
          aria-label="Próximas vagas"
        >
          →
        </button>
      </div>

      {/* Bolinhas de navegação inferiores */}
      <div className="jobs-dots-container">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            className={`dot-btn ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}