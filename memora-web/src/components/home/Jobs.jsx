import React, { useState, useEffect } from 'react';
import './Jobs.css';

const CalendarIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // 1. Busca as vagas salvas no banco de dados
  useEffect(() => {
    fetch('http://localhost:3000/vagas')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Erro ao carregar vagas:', err));
  }, []);

  // 2. Monitora a largura da janela para adaptar o carrossel
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = jobs.length;
  const maxIndex = Math.max(total - visibleCount, 0);

  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex);
    }
  }, [visibleCount, maxIndex, current]);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleJobs = jobs.slice(current, current + visibleCount);

  if (jobs.length === 0) {
    return <p style={{ textAlign: 'center', color: '#fff' }}>Carregando vagas...</p>;
  }

  return (
    <section className="jobs-section">
      <h2 className="jobs-title">Vagas</h2>

      <div className="jobs-carousel-container">
        <button onClick={prev} disabled={current === 0} className="arrow-btn" aria-label="Vagas anteriores">
          ←
        </button>

        <div className="jobs-grid">
          {visibleJobs.map((job) => (
            /* Alterado para redirecionar diretamente para o link externo do Empregare */
            <a key={job.id} href={job.link_url} target="_blank" rel="noopener noreferrer" className="job-card">
              <img src={job.imagem} alt={job.titulo} />
              <div className="job-card-info">
                <div className="job-card-meta">
                  <CalendarIcon />
                  <span>{job.data_criacao}</span>
                  <span>•</span>
                  <span style={{ fontWeight: 600 }}>{job.categoria}</span>
                </div>
                <h3 className="job-card-title">{job.titulo}</h3>
              </div>
            </a>
          ))}
        </div>

        <button onClick={next} disabled={current === maxIndex} className="arrow-btn" aria-label="Próximas vagas">
          →
        </button>
      </div>

      <div className="jobs-dots-container">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`dot-btn ${i === current ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  );
}