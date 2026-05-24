import React from 'react';
import { Link } from 'react-router-dom';

export default function Vaga5() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Home
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '32px' }}>
        Analista de Dados Pleno
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        <strong>Dados</strong> • Publicado em: 05 | 06 | 2026
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" 
        alt="Analista de Dados" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      
      <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#333' }}>
        <h2 style={{ color: '#1a5f5f' }}>Sobre a vaga</h2>
        <p>A equipe de inteligência de negócios procura um Analista de Dados Pleno. O foco será extrair insights valiosos de grandes volumes de dados para apoiar as decisões estratégicas da diretoria.</p>
        
        <h2 style={{ color: '#1a5f5f', marginTop: '24px' }}>Requisitos</h2>
        <ul>
          <li>Forte domínio de SQL (consultas complexas, procedures, otimização).</li>
          <li>Experiência avançada em criação de dashboards interativos no Power BI.</li>
          <li>Familiaridade com conceitos de modelagem de dados e ETL.</li>
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