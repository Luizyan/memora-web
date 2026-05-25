import React from "react";
import { Link } from "react-router-dom";
import "./BlogPages.css"; 
import { Footer } from "../../../components/home/Footer";

export default function Blog5() {
  return (
    <div className="blog-internal-page">
      <div className="post-content-area">
        <Link to="/blog" className="back-link">← Voltar para o Blog</Link>
        <article>
          <header className="post-header">
            <div className="post-tags-container">
              <span className="single-tag">TECNOLOGIA</span>
              <span className="single-tag">DADOS</span>
            </div>
            <h1 className="post-title">
              A importância da Segurança da Informação no mundo ágil
            </h1>
            <p className="post-meta">
              <span>📅 02 fev 2023</span>
              <span>💬 5 Comentários</span>
            </p>
          </header>
          
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80" 
            alt="Segurança da Informação" 
            className="post-image"
          />
          
          <div className="post-body">
            <p>
              Com o aumento exponencial da digitalização e a migração de operações completas para a nuvem, proteger os ativos de dados tornou-se a prioridade número um de qualquer negócio sustentável.
            </p>
            <p>
              No desenvolvimento ágil, onde novos recursos são implantados semanalmente ou até diariamente, a segurança não pode ser um processo de revisão tardio deixado para o final do projeto. Ela precisa ser integrada desde as primeiras etapas do planejamento de arquitetura através do conceito de DevSecOps.
            </p>
            <p>
              Garantir políticas rígidas de criptografia, controle estrito de acessos de usuários e auditorias frequentes de vulnerabilidades são os pilares fundamentais para blindar a infraestrutura e reter a confiança dos clientes em um ecossistema digital altamente conectado.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}