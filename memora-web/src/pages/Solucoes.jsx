import React from "react";
import "./Solucoes.css";
import { Footer } from "../components/home/Footer";
import { Link } from "react-router-dom"; 

const cardsSolucoes = [
  {
    title: "Servidores e Storage",
    text: "Principalmente devido ao acelerado crescimento na quantidade de informações gerada por empresas e em residências, a palavra storage está cada vez mais em alta. Computadores, tablets smartphones e outros dispositivos...",
  },
  {
    title: "Segurança da TI",
    text: "Ainda na fase do projeto, uma empresa que busca ser competitiva na era da transformação digital deve adotar soluções de segurança de TI, garantindo a integridade das tecnologias da informação...",
  },
  {
    title: "Otimização de Infraestrutura de TI",
    text: "Busca e Analytics O Data Analytics e a Inteligência Artificial proporcionam ao setor de TI a oportunidade de desempenhar papel ativo no desenvolvimento de uma cultura e gestão de dados....",
  },
  {
    title: "Gestão de Ativos de TI",
    text: "O ITAM – Information Technology Asset Management – possui como objetivo auxiliar as empresas a gerenciar seu inventário de hardware e software de modo mais eficaz. Trata-se de um conjunto...",
  },
  {
    title: "DEVOPS, Container e KUBERNETES",
    text: "Kubernetes é a plataforma mais indicada se você quer hospedar aplicações nativas em nuvem que exigem escalabilidade rápida. Com transmissão de dados em tempo real por meio do Apache Kafka,...",
  },
  {
    title: "Agente Virtual",
    text: "Permita que seus funcionários e clientes tenham o que precisam, quando precisam, e facilite a resolução de problemas com rapidez com a experiência de comunicação corporativa alimentada por IA. O...",
  },
  {
    title: "Desenvolvimento de Software",
    text: "Desenvolvimento de Software Pode parecer simples, mas o desenvolvimento de softwares deve levar em conta todos os requisitos para que o product atinja os resultados esperados, por isso é preciso...",
  },
  {
    title: "Service Management",
    text: "O IT Service Management, ou ITSM, é uma estrutura que permite o uso da abordagem de processos para gerenciamento, focada nos serviços de TI e nas necessidades dos clientes. Essa...",
  },
  {
    title: "Gestão das Aquisições Públicas",
    text: "Com a convicção de que o aprimoramento da gestão é um effort contínuo, a Memora oferta a Solução VITRO, que suporta e monitora os processos integrantes do ciclo completo de...",
  }
];

export default function Solucoes() {
  return (
    <div className="solucoes-page">
      {/* Hero Section */}
      <section className="solucoes-hero">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1>Soluções</h1>
            <p>
              Soluções aliadas à tecnologia que possibilitam a transformação digital 
              de empresas, promovem mudanças na experiência do cliente e melhoram 
              a performance das equipes nos diversos níveis de decisão.
            </p>
            <p>
              Da integração entre os times à ferramentas de gerenciamento de processos, 
              temos a solução sob medida para sua empresa, diminuindo riscos e otimizando resultados.
            </p>
          </div>
        </div>
        <div className="hero-image-overlay">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
            alt="Grupo colaborando em escritório" 
          />
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="solucoes-grid-section">
        <div className="solucoes-container">
          {cardsSolucoes.map((item, index) => (
            <div key={index} className="solucao-card">
              <div className="solucao-card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="solucao-card-footer">
                <Link to={`/solucao/${index + 1}`} className="btn-ler-mais">
                  LER MAIS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}