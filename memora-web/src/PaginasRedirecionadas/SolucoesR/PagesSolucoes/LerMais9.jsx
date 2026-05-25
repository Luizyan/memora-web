import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais9() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Gestão das Aquisições Públicas
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Governamentais • Monitoramento do Ciclo Completo
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&q=80" 
        alt="Gestão Pública" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Solução VITRO para Aprimoramento Contínuo
        </h2>
        <p>
          Com a convicção de que o aprimoramento da gestão é um esforço contínuo, a Memora oferta a Solução VITRO, 
          que suporta e monitora os processos integrantes do ciclo completo de aquisições públicas.
        </p>
        <p>
          A plataforma provê transparência, conformidade legal rigorosa com as leis de licitações vigentes, além de relatórios de auditoria 
          e acompanhamento orçamentário detalhado para gestores públicos.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Precisa otimizar o fluxo de licitações e contratações?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Conhecer Solução VITRO
          </Link>
        </div>
      </div>
    </div>
  );
}