import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais2() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Segurança da TI
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Proteção e Integridade de Dados
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80" 
        alt="Segurança da Informação" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Proteção Estratégica na Era Digital
        </h2>
        <p>
          Ainda na fase do projeto, uma empresa que busca ser competitiva na era da transformação digital deve adotar 
          soluções de segurança de TI, garantindo a integridade das tecnologias da informação.
        </p>
        <p>
          A segurança não deve ser uma camada adicionada apenas após problemas acontecerem, mas sim parte estrutural 
          de todo o ecossistema tecnológico da corporação.
        </p>

        <h2 style={{ color: '#1a5f5f', fontSize: '24px', marginTop: '40px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Pilares de Atuação
        </h2>
        <ul>
          <li><strong>Confidencialidade:</strong> Garantia de que os dados sensíveis fiquem acessíveis apenas a pessoas autorizadas.</li>
          <li><strong>Integridade:</strong> Proteção dos arquivos contra alterações maliciosas ou acidentais não autorizadas.</li>
          <li><strong>Disponibilidade:</strong> Sistemas robustos contra ataques que visam derrubar a operação da empresa.</li>
        </ul>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Quer mitigar riscos cibernéticos na sua empresa?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}