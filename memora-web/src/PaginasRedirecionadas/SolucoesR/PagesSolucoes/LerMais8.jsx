import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais8() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Service Management
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Abordagem Baseada em Processos (ITSM)
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80" 
        alt="Gestão de Serviços" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Foco Alinhado às Necessidades do Cliente
        </h2>
        <p>
          O IT Service Management, ou ITSM, é uma estrutura que permite o uso da abordagem de processos para gerenciamento, 
          focada nos serviços de TI e nas necessidades dos clientes. Essa metodologia eleva a maturidade operacional.
        </p>
        <p>
          Ao estruturar os canais de atendimento e o gerenciamento de incidentes baseado em frameworks modernos, as entregas 
          da TI deixam de ser vistas como custo e passam a agregar valor estratégico imediato ao negócio.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Quer implementar fluxos eficientes de Governança de TI?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}