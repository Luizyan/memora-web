import React from 'react';
import { Link } from 'react-router-dom';

export default function LerMais1() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Botão de navegação interna para voltar à página de soluções */}
      <Link to="/solucoes" style={{ textDecoration: 'none', color: '#2a9090', fontWeight: '600', fontSize: '16px' }}>
        &larr; Voltar para Soluções
      </Link>
      
      <h1 style={{ marginTop: '24px', color: '#1a5f5f', fontSize: '36px', fontWeight: '700' }}>
        Servidores e Storage
      </h1>
      
      <p style={{ color: '#666', fontSize: '15px', marginBottom: '32px' }}>
        Soluções Corporativas • Infraestrutura e Armazenamento Inteligente
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80" 
        alt="Data Center e Servidores" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '40px' }} 
      />
      
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '16px' }}>
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          O Desafio do Armazenamento de Dados
        </h2>
        <p>
          Principalmente devido ao acelerado crescimento na quantidade de informações gerada por empresas e em residências, 
          a palavra <strong>storage</strong> está cada vez mais em alta. Computadores, tablets, smartphones e outros dispositivos 
          conectados geram um fluxo massivo de dados diariamente que precisa ser processado, organizado e protegido.
        </p>
        <p>
          Para empresas que buscam alta disponibilidade e segurança, depender de armazenamentos convencionais ou descentralizados 
          pode gerar gargalos operacionais e vulnerabilidades críticas. É aqui que entram os servidores dedicados e os sistemas de storage corporativos.
        </p>
        
        <h2 style={{ color: '#1a5f5f', fontSize: '24px', marginTop: '40px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Benefícios da Solução VITRO
        </h2>
        <p>
          Nossas soluções de Servidores e Storage são desenhadas para acompanhar a escalabilidade do seu negócio, garantindo:
        </p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><strong>Alta Disponibilidade:</strong> Redundância de hardware para que seus sistemas nunca fiquem fora do ar.</li>
          <li><strong>Segurança Centralizada:</strong> Facilidade no gerenciamento de backups automáticos e proteção contra perda de dados.</li>
          <li><strong>Desempenho Otimizado:</strong> Acesso rápido aos dados do sistema, reduzindo o tempo de resposta das aplicações e melhorando a experiência do usuário.</li>
          <li><strong>Escalabilidade Simples:</strong> Expansão de armazenamento modular, permitindo crescer a infraestrutura de acordo com a demanda da empresa.</li>
        </ul>

        <h2 style={{ color: '#1a5f5f', fontSize: '24px', marginTop: '40px', borderBottom: '2px solid #b2d8d8', paddingBottom: '8px' }}>
          Como Implementar?
        </h2>
        <p>
          Analisamos o cenário atual da sua empresa para projetar o ambiente ideal, integrando as melhores tecnologias de armazenamento (NAS, SAN ou DAS) 
          com servidores otimizados para a carga de trabalho do seu time, diminuindo riscos e maximizando o retorno sobre o investimento.
        </p>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f0f7f7', borderRadius: '8px', borderLeft: '6px solid #2a9090' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1a5f5f', fontSize: '18px' }}>Precisa otimizar a infraestrutura da sua empresa?</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#555' }}>Fale com um de nossos especialistas e monte um projeto sob medida.</p>
          <Link 
            to="/contatos" 
            style={{ 
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#2a9090', 
              color: '#fff', 
              textDecoration: 'none', 
              borderRadius: '6px', 
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}