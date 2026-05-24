import React from 'react';
import { Link } from 'react-router-dom';

export default function Vaga1() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Home
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '32px' }}>
        Desenvolvedor Front-end Pleno
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        <strong>Tecnologia</strong> • Publicado em: 15 | 05 | 2026
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80" 
        alt="Desenvolvedor Front-end" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      
      <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#333' }}>
        <h2 style={{ color: '#1a5f5f' }}>Sobre a vaga</h2>
        <p>Estamos buscando um Desenvolvedor Front-end Pleno para atuar em uma startup de fintech em rápido crescimento. Você será responsável por construir interfaces dinâmicas, responsivas e de alta performance.</p>
        
        <h2 style={{ color: '#1a5f5f', marginTop: '24px' }}>Requisitos</h2>
        <ul>
          <li>Experiência sólida com React, JavaScript moderno (ES6+) e CSS.</li>
          <li>Conhecimento em consumo de APIs RESTful.</li>
          <li>Familiaridade com versionamento de código (Git/GitHub).</li>
          <li>Capacidade de trabalhar em metodologias ágeis.</li>
        </ul>

        {/* 👇 É EXATAMENTE AQUI QUE VOCÊ COLOCA O LINK NOVO 👇 */}
        <a 
          href="https://www.empregare.com/pt-br/trabalhe-na-memora-processos-inovadores"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block', 
            marginTop: '32px', 
            padding: '16px 32px', 
            backgroundColor: '#2a9090', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}
        >
          Candidatar-se agora
        </a>
        {/* 👆 FIM DO LINK NOVO 👆 */}

      </div>
    </div>
  );
}