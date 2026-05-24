import React from 'react';
import { Link } from 'react-router-dom';

export default function Vaga3() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Home
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '32px' }}>
        Designer UX/UI Sênior
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        <strong>Design</strong> • Publicado em: 27 | 05 | 2026
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" 
        alt="Designer UX/UI" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      
      <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#333' }}>
        <h2 style={{ color: '#1a5f5f' }}>Sobre a vaga</h2>
        <p>A equipe de produtos digitais em Brasília busca um Designer UX/UI Sênior. Você irá liderar o design de novas funcionalidades, garantindo a melhor jornada e usabilidade para milhares de usuários.</p>
        
        <h2 style={{ color: '#1a5f5f', marginTop: '24px' }}>Requisitos</h2>
        <ul>
          <li>Domínio absoluto de ferramentas como Figma e Adobe XD.</li>
          <li>Portfólio robusto demonstrando processos de Discovery e Delivery.</li>
          <li>Experiência com testes de usabilidade e prototipação de alta fidelidade.</li>
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