import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais4() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Gestão de Ativos de TI
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • ITAM (Information Technology Asset Management)
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
        alt="Gestão de Ativos" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Controle Eficaz de Hardware e Software
        </h2>
        <p>
          O ITAM – Information Technology Asset Management – possui como objetivo auxiliar as empresas a gerenciar seu inventário 
          de hardware e software de modo mais eficaz. Trata-se de um conjunto de práticas integradas de gestão.
        </p>
        <p>
          Com um mapeamento preciso, sua organização reduz gastos com licenças desnecessárias, evita multas de conformidade 
          e planeja atualizações de hardware de forma totalmente previsível.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Precisa organizar o ciclo de vida dos seus ativos de TI?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}