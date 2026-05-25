import React from "react";
import { Link } from "react-router-dom";
import "./BlogPages.css"; 
import { Footer } from "../../../components/home/Footer";

export default function Blog3() {
  return (
    <div className="blog-internal-page">
      <div className="post-content-area">
        <Link to="/blog" className="back-link">← Voltar para o Blog</Link>
        <article>
          <header className="post-header">
            <div className="post-tags-container">
              <span className="single-tag">GESTÃO</span>
            </div>
            <h1 className="post-title">
              O Exercício dos Pequenos Poderes – Liderança com foco nas pessoas
            </h1>
            <p className="post-meta">
              <span>📅 13 maio 2022</span>
              <span>💬 0 Comentários</span>
            </p>
          </header>
          
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80" 
            alt="Liderança com foco nas pessoas" 
            className="post-image"
          />
          
          <div className="post-body">
            <p>
              Depois de uma jornada intensa liderando organizações de diversos setores, fica evidente que o maior patrimônio de qualquer empresa não reside em seus servidores ou patentes, mas sim na sua capacidade humana.
            </p>
            <p>
              O papel fundamental do líder moderno já não passa por vigiar tarefas, mas sim por remover os obstáculos do caminho para que o seu ecossistema humano consiga progredir e inovar por conta própria, abdicando do microgerenciamento focado no ego.
            </p>
            <p>
              Quando distribuímos responsabilidade de verdade e damos espaço para que os pequenos poderes tomem decisões na ponta da operação, criamos uma cultura empresarial baseada na mútua confiança e voltada para a evolução individual de cada colaborador.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}