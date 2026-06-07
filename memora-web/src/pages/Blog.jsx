import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { Footer } from "../components/home/Footer";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80",
    categories: ["PROCESSOS", "TECNOLOGIA"],
    title: "Gestão comprometida e inovação no combate à violência contra a mulher no Brasil",
    excerpt: "A violência contra a mulher ainda é um cenário desafiador...",
    date: "7 dez 2022",
    comments: 0,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80",
    categories: ["TECNOLOGIA"],
    title: "Machine Learning e Big Data na Transformação Digital",
    excerpt: "Machine Learning e Big Data na Transformação Digital...",
    date: "20 jul 2022",
    comments: 0,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    categories: ["GESTÃO"],
    title: "O Exercício dos Pequenos Poderes – Liderança com foco nas pessoas",
    excerpt: "Jeovani Salomão* – Depois de uma passagem de três anos...",
    date: "13 maio 2022",
    comments: 0,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    categories: ["INOVAÇÃO"],
    title: "Cultura de Inovação: Como preparar sua equipe para o futuro",
    excerpt: "Inovar vai além da tecnologia; trata-se de pessoas e processos alinhados a um propósito comum...",
    date: "15 jan 2023",
    comments: 2,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    categories: ["TECNOLOGIA", "DADOS"],
    title: "A importância da Segurança da Informação no mundo ágil",
    excerpt: "Com o aumento da digitalização, proteger os ativos de dados tornou-se a prioridade número um...",
    date: "02 fev 2023",
    comments: 5,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    categories: ["ESTRATÉGIA"],
    title: "Planejamento Estratégico 2026: Metas e Visão de Futuro",
    excerpt: "Como as grandes organizações estão se estruturando para os desafios do próximo triênio...",
    date: "10 mar 2023",
    comments: 1,
  },
];

const ALL_CATEGORIES = [...new Set(posts.flatMap((p) => p.categories))];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredPosts = posts.filter((post) => {
    const matchText =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.categories.some((c) =>
        c.toLowerCase().includes(search.toLowerCase())
      );
    const matchCategory =
      !activeCategory || post.categories.includes(activeCategory);
    return matchText && matchCategory;
  });

  return (
    <div className="blog-page">

      {/* BARRA DE BUSCA */}
      <div className="blog-search-wrapper">
        <div className="blog-search-box">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Buscar posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch("")}>✕</button>
          )}
        </div>
        <div className="blog-chips">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blog-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() =>
                setActiveCategory((prev) => (prev === cat ? null : cat))
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE POSTS */}
      <main className="blog-grid">
        {filteredPosts.length === 0 ? (
          <p className="blog-no-results">Nenhum post encontrado.</p>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.id}`} className="card-image-link">
                <div className="card-image-container">
                  <img src={post.image} alt={post.title} className="card-img" />
                  <div className="card-tags">
                    {post.categories.map((cat) => (
                      <span key={cat} className="tag">{cat}</span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="card-body">
                <h2 className="card-title">
                  <Link to={`/blog/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {post.title}
                  </Link>
                </h2>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-footer">
                  <span className="meta-item">📅 {post.date}</span>
                  <span className="meta-item">💬 {post.comments}</span>
                </div>
              </div>
            </article>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}