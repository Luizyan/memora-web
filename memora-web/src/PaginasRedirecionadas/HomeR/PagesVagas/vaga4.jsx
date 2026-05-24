import React from 'react';
import { Link } from 'react-router-dom';

export default function Vaga4() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Home
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '32px' }}>
        Gerente de Projetos
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        <strong>Gestão</strong> • Publicado em: 01 | 06 | 2026
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" 
        alt="Gerente de Projetos" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      
      <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#333' }}>
        <h2 style={{ color: '#1a5f5f' }}>Sobre a vaga</h2>
        <p>Buscamos um Gerente de Projetos com sólida bagagem em metodologias ágeis para atuar em projetos complexos voltados ao setor público. O foco será garantir entregas de valor no prazo e com qualidade.</p>
        
        <h2 style={{ color: '#1a5f5f', marginTop: '24px' }}>Requisitos</h2>
        <ul>
          <li>Certificações em metodologias ágeis (Scrum Master, Kanban, etc).</li>
          <li>Experiência prévia na gestão de projetos para órgãos públicos.</li>
          <li>Excelentes habilidades de comunicação e resolução de conflitos.</li>
        </ul>

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
      </div>
    </div>
  );
}