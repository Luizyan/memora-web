import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./adminBlog.css"; 

export default function AdminBlog() {
  const [titulo, setTitulo] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState("");
  const [categories, setCategories] = useState([]); 
  const [posts, setPosts] = useState([]);
  
  // Controle do estado de Edição (null por padrão)
  const [editandoId, setEditandoId] = useState(null);

  const CATEGORIAS_DISPONIVEIS = ["PROCESSOS", "TECNOLOGIA", "GESTÃO", "INOVAÇÃO", "DADOS", "ESTRATÉGIA"];

  const carregarPosts = () => {
    fetch("http://localhost:3000/blog")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados do servidor");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error("Erro ao listar:", err));
  };

  useEffect(() => {
    carregarPosts();
  }, []);

  const handleCategoryClick = (cat) => {
    if (categories.includes(cat)) {
      setCategories(categories.filter((c) => c !== cat));
    } else {
      setCategories([...categories, cat]);
    }
  };

  const handleIniciarEdicao = (post) => {
    // Captura o ID de forma limpa
    const idDoPost = post.id !== undefined ? post.id : post._id;
    
    setEditandoId(idDoPost);
    setTitulo(post.titulo);
    setExcerpt(post.excerpt);
    setConteudo(post.conteudo);
    setImagem(post.imagem);
    setCategories(post.categories || []);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !excerpt || !conteudo || !imagem || categories.length === 0) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const hoje = new Date();
    const meses = ["jan", "fev", "mar", "abr", "maio", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    const dataFormatada = `${hoje.getDate()} ${meses[hoje.getMonth()]} ${hoje.getFullYear()}`;

    const dadosPost = {
      titulo: titulo.trim(),
      excerpt: excerpt.trim(),
      conteudo: conteudo.trim(),
      imagem: imagem.trim(),
      categories
    };

    // Monta a rota dinamicamente baseada no modelo funcional do seu painel "Admin"
    const url = editandoId 
      ? `http://localhost:3000/blog/${editandoId}` 
      : "http://localhost:3000/blog";
    
    const metodo = editandoId ? "PUT" : "POST";

    // Só atribui data se for um post totalmente novo
    if (!editandoId) {
      dadosPost.data_criacao = dataFormatada;
    }

    fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosPost),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na comunicação com o banco MySQL");
        return res.json();
      })
      .then(() => {
        alert(editandoId ? "Post atualizado com sucesso!" : "Post do blog publicado com sucesso!");
        limparFormulario();
        carregarPosts();
      })
      .catch((err) => {
        console.error("Erro ao salvar:", err);
        alert("Ocorreu um erro ao salvar os dados. Verifique seu console backend.");
      });
  };

  const handleDeletar = (id) => {
    if (window.confirm("Deseja mesmo excluir este post permanentemente?")) {
      fetch(`http://localhost:3000/blog/${id}`, { method: "DELETE" })
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao deletar");
          alert("Post deletado com sucesso!");
          carregarPosts();
          if (editandoId === id) limparFormulario();
        })
        .catch((err) => console.error("Erro ao deletar:", err));
    }
  };

  const limparFormulario = () => {
    setTitulo("");
    setExcerpt("");
    setConteudo("");
    setImagem("");
    setCategories([]);
    setEditandoId(null);
  };

  return (
    <div className="admin-global-wrapper" style={{ padding: "20px" }}>
      
      <nav className="admin-nav-tabs" style={{ display: "flex", gap: "15px", marginBottom: "30px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <Link to="/admin" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          💼 Gerenciar Soluções
        </Link>
        <Link to="/adminblog" style={{ padding: "10px 20px", background: "#00a896", color: "#fff", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
          📝 Gerenciar Blog
        </Link>
        <Link to="/adminvagas" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          🚀 Gerenciar Vagas
        </Link>
      </nav>

      <div className="admin-container">
        <h1>Painel Admin - {editandoId ? "Editar Post" : "Novo Post do Blog"}</h1>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Título do Post" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <input type="text" placeholder="Resumo curto (excerpt)" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
          <input type="text" placeholder="URL da Imagem de Capa" value={imagem} onChange={(e) => setImagem(e.target.value)} />
          
          <div>
            <label>Categorias:</label>
            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              {CATEGORIAS_DISPONIVEIS.map(cat => (
                <button 
                  type="button" 
                  key={cat} 
                  onClick={() => handleCategoryClick(cat)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "15px",
                    backgroundColor: categories.includes(cat) ? "#2d5c5e" : "#fff",
                    color: categories.includes(cat) ? "#fff" : "#2d5c5e",
                    border: "1px solid #2d5c5e",
                    cursor: "pointer"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <textarea placeholder="Conteúdo completo do post..." rows="10" value={conteudo} onChange={(e) => setConteudo(e.target.value)}></textarea>
          
          <button type="submit">
            {editandoId ? "Salvar Alterações" : "Publicar no Blog"}
          </button>
          
          {editandoId && (
            <button type="button" onClick={limparFormulario} style={{ backgroundColor: "#ccc", color: "#000", padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer" }}>
              Cancelar Edição
            </button>
          )}
        </form>

        <h2>Gerenciar Posts</h2>
        
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th align="left">Título</th>
                <th align="left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => {
                const idAtual = post.id !== undefined ? post.id : post._id;
                return (
                  <tr key={idAtual} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px" }}>{post.titulo}</td>
                    <td>
                      <div className="actions-cell">
                        <button onClick={() => handleIniciarEdicao(post)} className="btn-editar">Editar</button>
                        <button onClick={() => handleDeletar(idAtual)} className="btn-deletar">Excluir</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}