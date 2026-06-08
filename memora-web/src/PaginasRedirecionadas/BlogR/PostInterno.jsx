import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostInterno.css";
import { Footer } from "../../components/home/Footer";

export default function PostInterno() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blog/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error("Post não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarPost();
  }, [id]);

  if (loading) return <div className="post-loading">Carregando post...</div>;
  if (!post) return <div className="post-not-found">Post não encontrado!</div>;

  return (
    <div className="post-interno-page">
      <div className="post-interno-container">
        
        <Link to="/blog" className="btn-voltar-blog">
          ← Voltar para o Blog
        </Link>
        
        <article>
          <header className="post-header">
            <div className="post-categories-wrapper">
              {post.categories && post.categories.map((cat) => (
                <span key={cat} className="post-category-tag">{cat}</span>
              ))}
            </div>
            
            <h1 className="post-title">{post.titulo}</h1>
            
            <p className="post-meta">
              <span>📅 {post.data_criacao}</span>
              <span>💬 {post.comentarios || 0} Comentários</span>
            </p>
          </header>
          
          <img 
            src={post.imagem} 
            alt={post.titulo} 
            className="post-cover-image"
          />
          
          <div className="post-content">
            <div style={{ whiteSpace: "pre-line" }}>
              {post.conteudo}
            </div>
          </div>
        </article>
        
      </div>
      <Footer />
    </div>
  );
}