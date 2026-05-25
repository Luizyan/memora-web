import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais6() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Agente Virtual
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Comunicação Inteligente Alimentada por IA
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80" 
        alt="Inteligência Artificial" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Resolução Ágil e Experiência Omnichannel
        </h2>
        <p>
          Permita que seus funcionários e clientes tenham o que precisam, quando precisam, e facilite a resolução de problemas 
          com rapidez com a experiência de comunicação corporativa alimentada por IA.
        </p>
        <p>
          Os agentes virtuais cognitivos são capazes de compreender as intenções dos usuários, acessar bancos de dados integrados 
          e realizar agendamentos, triagens e respostas complexas sem sobrecarregar seus operadores humanos.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Quer automatizar seu atendimento com inteligência artificial?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}