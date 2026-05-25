import React from "react";
import { Link } from "react-router-dom";
import "./BlogPages.css"; 
import { Footer } from "../../../components/home/Footer";

export default function Blog4() {
  return (
    <div className="blog-internal-page">
      
      {/* Todo o conteúdo textual e de mídia fica preso dentro da área limitada e centralizada */}
      <div className="post-content-area">
        <Link to="/blog" className="back-link">
          ← Voltar para o Blog
        </Link>
        
        <article>
          <header className="post-header">
            <div className="post-tags-container">
              <span className="single-tag">TECNOLOGIA</span>
            </div>
            <h1 className="post-title">
              Machine Learning e Big Data na Transformation Digital
            </h1>
            <p className="post-meta">
              <span>📅 20 jul 2022</span>
              <span>💬 0 Comentários</span>
            </p>
          </header>
          
          <img 
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000&auto=format&fit=crop&q=80" 
            alt="Machine Learning e Big Data" 
            className="post-image"
          />
          
          <div className="post-body">
            <p>
              A transformação digital deixou de ser um plano para o futuro e passou a ser uma regra de sobrevivência para qualquer empresa no ecossistema de negócios atual. No epicentro desta revolução tecnológica, encontramos duas forças massivas trabalhando em conjunto: o Big Data e o Machine Learning.
            </p>
            <p>
              A quantidade de dados digitais gerados globalmente a cada segundo é astronómica. Capturar, estruturar e analisar esse mar de informações através de infraestruturas de Big Data permite que as corporações extraiam padrões cruciais sobre as preferências e comportamentos do consumidor.
            </p>
            <p>
              Ao somar os algoritmos de Machine Learning a este ecossistema, os sistemas tornam-se capazes de aprender de forma autónoma com os históricos de dados. Isto traduz-se na automatização de decisões altamente complexas, previsão exata de fraudes e hiper-personalização em tempo real de plataformas de e-commerce e serviços digitais.
            </p>
          </div>
        </article>
      </div>

      {/* O Footer fica fora de tudo, esticando de ponta a ponta sem quebras */}
      <Footer />
      
    </div>
  );
}