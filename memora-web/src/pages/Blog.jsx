import React from "react";
import "./Blog.css";
import { Footer } from "../components/home/Footer";

const posts = [
  // ... (os 3 posts anteriores continuam aqui)
  {
    id: 1,
    image: "https://picsum.photos/id/20/800/600",
    categories: ["PROCESSOS", "TECNOLOGIA"],
    title: "Gestão comprometida e inovação no combate à violência contra a mulher no Brasil",
    excerpt: "A violência contra a mulher ainda é um cenário desafiador...",
    date: "7 dez 2022",
    comments: 0
  },
  {
    id: 2,
    image: "https://picsum.photos/id/0/800/600",
    categories: ["TECNOLOGIA"],
    title: "Machine Learning e Big Data na Transformação Digital",
    excerpt: "Machine Learning e Big Data na Transformação Digital...",
    date: "20 jul 2022",
    comments: 0
  },
  {
    id: 3,
    image: "https://picsum.photos/id/156/800/600",
    categories: ["GESTÃO"],
    title: "O Exercício dos Pequenos Poderes – Liderança com foco nas pessoas",
    excerpt: "Jeovani Salomão* – Depois de uma passagem de três anos...",
    date: "13 maio 2022",
    comments: 0
  },
  // NOVOS POSTS ABAIXO
  {
    id: 4,
    image: "https://picsum.photos/id/160/800/600", // Imagem de ambiente de trabalho moderno
    categories: ["INOVAÇÃO"],
    title: "Cultura de Inovação: Como preparar sua equipe para o futuro",
    excerpt: "Inovar vai além da tecnologia; trata-se de pessoas e processos alinhados a um propósito comum...",
    date: "15 jan 2023",
    comments: 2
  },
  {
    id: 5,
    image: "https://picsum.photos/id/447/800/600", // Imagem de código/tecnologia
    categories: ["TECNOLOGIA", "DADOS"],
    title: "A importância da Segurança da Informação no mundo ágil",
    excerpt: "Com o aumento da digitalização, proteger os ativos de dados tornou-se a prioridade número um...",
    date: "02 fev 2023",
    comments: 5
  },
  {
    id: 6,
    image: "https://picsum.photos/id/486/800/600", // Imagem de estratégia/objetivos
    categories: ["ESTRATÉGIA"],
    title: "Planejamento Estratégico 2026: Metas e Visão de Futuro",
    excerpt: "Como as grandes organizações estão se estruturando para os desafios do próximo triênio...",
    date: "10 mar 2023",
    comments: 1
  }
];

export default function Blog() {
  return (
    <div className="blog-page">
      <main className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="card-image-container">
              <img src={post.image} alt={post.title} className="card-img" />
              <div className="card-tags">
                {post.categories.map((cat) => (
                  <span key={cat} className="tag">{cat}</span>
                ))}
              </div>
            </div>
            
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-excerpt">{post.excerpt}</p>
              <div className="card-footer">
                <span className="meta-item">📅 {post.date}</span>
                <span className="meta-item">💬 {post.comments}</span>
              </div>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}