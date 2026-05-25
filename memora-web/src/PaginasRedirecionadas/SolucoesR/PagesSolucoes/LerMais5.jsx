import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais5() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        DEVOPS, Container e KUBERNETES
      </h1>
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Escala Ágil e Aplicações em Nuvem
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80" 
        alt="DevOps e Cloud" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Aplicações Nativas em Nuvem com Alta Performance
        </h2>
        <p>
          Kubernetes é a plataforma mais indicada se você quer hospedar aplicações nativas em nuvem que exigem escalabilidade rápida. 
          Com transmissão de dados em tempo real por meio do Apache Kafka, garantimos entregas consistentes.
        </p>
        <p>
          Adotando a cultura DevOps, unificamos os times de desenvolvimento e de operações, reduzindo drasticamente o tempo entre 
          a escrita do código e a sua publicação final em ambiente de produção estável.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Deseja implementar esteiras automáticas de CI/CD?</h4>
          <Link to="/contatos" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#2a9090', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}