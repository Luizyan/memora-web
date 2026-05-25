import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais3() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Otimização de Infraestrutura de TI
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Busca, Analytics e Inteligência Artificial
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" 
        alt="Otimização de TI" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Cultura e Gestão de Dados Ativa
        </h2>
        <p>
          Busca e Analytics O Data Analytics e a Inteligência Artificial proporcionam ao setor de TI a oportunidade 
          de desempenhar papel ativo no desenvolvimento de uma cultura e gestão de dados.
        </p>
        <p>
          Otimizar a infraestrutura vai muito além de comprar servidores velozes; trata-se de criar inteligência sobre 
          os processos para antecipar demandas e gargalos.
        </p>

        <h2 style={{ color: '#1a5f5f', fontSize: '24px', marginTop: '40px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Otimização com Inteligência Artificial
        </h2>
        <p>
          Através de cruzamento de dados, monitoramento analítico em tempo real e automações avançadas, convertemos custos operacionais 
          de infraestrutura em vantagens de mercado para sua marca.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Deseja migrar para uma gestão orientada a dados?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}