import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais7() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Desenvolvimento de Software
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Arquiteturas Robustas Sob Medida
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80" 
        alt="Desenvolvimento de Código" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Foco Total nos Requisitos e nos Resultados
        </h2>
        <p>
          Desenvolvimento de Software Pode parecer simples, mas o desenvolvimento de softwares deve levar em conta todos 
          os requisitos para que o produto atinja os resultados esperados, por isso é preciso uma análise criteriosa.
        </p>
        <p>
          Utilizamos metodologias consagradas e componentes limpos, focando sempre na performance de ponta, na segurança lógica 
          e na facilidade de futuras manutenções corretivas ou evolutivas do sistema.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Tem uma ideia ou demanda de sistema interno?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Construir Solução
          </Link>
        </div>
      </div>
    </div>
  );
}