import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { Footer } from "../components/home/Footer";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  
  // 1. ESTADO PARA GUARDAR OS POSTS VINDOS DO BANCO
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. BUSCAR OS POSTS DO BACKEND QUANDO A TELA CARREGAR
  useEffect(() => {
    const puxarPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Erro ao buscar posts do blog:", error);
      } finally {
        setLoading(false);
      }
    };

    puxarPosts();
  }, []);

  // 3. PEGAR AS CATEGORIAS EXISTENTES DINAMICAMENTE
  const ALL_CATEGORIES = [...new Set(posts.flatMap((p) => p.categories || []))];

  // 4. FILTRAR OS POSTS (BUSCA E CHIPS)
  const filteredPosts = posts.filter((post) => {
    const matchText =
      post.titulo.toLowerCase().includes(search.toLowerCase()) ||
      post.categories.some((c) =>
        c.toLowerCase().includes(search.toLowerCase())
      );
    const matchCategory =
      !activeCategory || post.categories.includes(activeCategory);
    return matchText && matchCategory;
  });

  if (loading) return <div style={{ padding: "50px", textAlign: "center" }}>Carregando Blog...</div>;

  return (
    <div className="blog-page">

      {/* BARRA DE BUSCA E CHIPS */}
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

      {/* GRID DE POSTS VINDOS DO BANCO */}
      <main className="blog-grid">
        {filteredPosts.length === 0 ? (
          <p className="blog-no-results">Nenhum post encontrado.</p>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              {/* O Link agora aponta dinamicamente para o ID do banco */}
              <Link to={`/blog/${post.id}`} className="card-image-link">
                <div className="card-image-container">
                  <img src={post.imagem} alt={post.titulo} className="card-img" />
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
                    {post.titulo}
                  </Link>
                </h2>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-footer">
                  <span>📅 {post.data_criacao}</span>
                  <span>💬 {post.comentarios}</span>
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