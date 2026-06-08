import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogPages/BlogPages.css"; // Reaproveitando seu CSS atual das páginas internas
import { Footer } from "../../components/home/Footer";

export default function PostInterno() {
  const { id } = useParams(); // Pega o ID da URL (ex: se for /blog/12, id será 12)
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

  if (loading) return <div style={{ padding: "50px", textAlign: "center" }}>Carregando post...</div>;
  if (!post) return <div style={{ padding: "50px", textAlign: "center" }}>Post não encontrado!</div>;

  return (
    <div className="blog-internal-page">
      <div className="post-content-area">
        <Link to="/blog" className="back-link">← Voltar para o Blog</Link>
        <article>
          <header className="post-header">
            <div className="post-tags-container">
              {/* post.categories já vem mapeado como Array lá do nosso Backend */}
              {post.categories.map((cat) => (
                <span key={cat} className="single-tag">{cat}</span>
              ))}
            </div>
            <h1 className="post-title">{post.titulo}</h1>
            <p className="post-meta">
              <span>📅 {post.data_criacao}</span>
              <span>💬 {post.comentarios} Comentários</span>
            </p>
          </header>
          
          <img 
            src={post.imagem} 
            alt={post.titulo} 
            className="post-image"
          />
          
          <div className="post-body">
            {/* Como o conteúdo pode ter quebras de linha (\n), essa estilização ajuda a respeitar os parágrafos */}
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