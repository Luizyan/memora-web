import React from 'react';
import { Link } from 'react-router-dom';

export default function Vaga2() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Home
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '32px' }}>
        Analista de Marketing Digital
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        <strong>Marketing</strong> • Publicado em: 20 | 05 | 2026
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" 
        alt="Marketing Digital" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      
      <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#333' }}>
        <h2 style={{ color: '#1a5f5f' }}>Sobre a vaga</h2>
        <p>Procuramos um Analista de Marketing focado em performance e gestão de redes sociais. O profissional criará estratégias para aumentar o engajamento e a conversão de leads das nossas campanhas digitais.</p>
        
        <h2 style={{ color: '#1a5f5f', marginTop: '24px' }}>Requisitos</h2>
        <ul>
          <li>Experiência com Facebook Ads, Google Ads e ferramentas de analytics.</li>
          <li>Habilidade em planejamento e execução de calendário de conteúdo.</li>
          <li>Visão analítica orientada a dados e métricas de conversão.</li>
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