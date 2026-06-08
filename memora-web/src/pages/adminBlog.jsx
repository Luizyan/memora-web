import React, { useState, useEffect } from "react";
import "./adminBlog.css"; 

export default function AdminBlog() {
  const [titulo, setTitulo] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState("");
  const [categories, setCategories] = useState([]); 
  const [posts, setPosts] = useState([]);
  
  // ESTADO PARA SABER SE ESTAMOS EDITANDO UM POST EXISTENTE
  const [editandoId, setEditandoId] = useState(null);

  const CATEGORIAS_DISPONIVEIS = ["PROCESSOS", "TECNOLOGIA", "GESTÃO", "INOVAÇÃO", "DADOS", "ESTRATÉGIA"];

  const carregarPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/blog");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
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

  // FUNÇÃO ATIVADA AO CLICAR EM EDITAR NA TABELA
  const handleIniciarEdicao = (post) => {
    setEditandoId(post.id);
    setTitulo(post.titulo);
    setExcerpt(post.excerpt);
    setConteudo(post.conteudo);
    setImagem(post.imagem);
    setCategories(post.categories || []);
    
    // Rola a página suavemente de volta para o topo (onde está o formulário)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !excerpt || !conteudo || !imagem || categories.length === 0) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const hoje = new Date();
    const meses = ["jan", "fev", "mar", "abr", "maio", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    const dataFormatada = `${hoje.getDate()} ${meses[hoje.getMonth()]} ${hoje.getFullYear()}`;

    const dadosPost = {
      titulo,
      excerpt,
      conteudo,
      imagem,
      categories, 
      data_criacao: dataFormatada
    };

    try {
      // Se tiver um ID em editandoId, fazemos um PUT ou POST editado para o backend
      // Dica: Como seu backend atual está configurado para receber posts novos, você pode futuramente criar a rota de PUT lá. 
      // Por enquanto, vamos manter a lógica de criação e atualização limpas.
      
      const url = editandoId ? `http://localhost:3000/blog/${editandoId}` : "http://localhost:3000/blog";
      const metodo = editandoId ? "PUT" : "POST"; // Caso seu back use POST geral ou PUT para editar

      const response = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosPost),
      });

      if (response.ok) {
        alert(editandoId ? "Post atualizado com sucesso!" : "Post do blog publicado com sucesso!");
        
        // Limpa tudo e reseta o estado de edição
        setTitulo("");
        setExcerpt("");
        setConteudo("");
        setImagem("");
        setCategories([]);
        setEditandoId(null);
        carregarPosts();
      }
    } catch (error) {
      console.error("Erro ao salvar post:", error);
    }
  };

  const handleDeletar = async (id) => {
    if (window.confirm("Deseja mesmo excluir este post?")) {
      try {
        const response = await fetch(`http://localhost:3000/blog/${id}`, { method: "DELETE" });
        if (response.ok) {
          alert("Post deletado!");
          carregarPosts();
        }
      } catch (error) {
        console.error("Erro ao deletar:", error);
      }
    }
  };

  return (
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
          <button type="button" onClick={() => {
            setEditandoId(null);
            setTitulo(""); setExcerpt(""); setConteudo(""); setImagem(""); setCategories([]);
          }} style={{ backgroundColor: "#ccc", color: "#000", padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            Cancelar Edição
          </button>
        )}
      </form>

      <h2>Gerenciar Posts</h2>
      
      {/* Classe responsive injetada para proteção no mobile */}
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th align="left">Título</th>
              <th align="left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px" }}>{post.titulo}</td>
                <td>
                  <div className="actions-cell">
                    <button onClick={() => handleIniciarEdicao(post)} className="btn-editar">Editar</button>
                    <button onClick={() => handleDeletar(post.id)} className="btn-deletar">Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}