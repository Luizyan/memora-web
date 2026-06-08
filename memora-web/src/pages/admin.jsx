import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- IMPORTANTE: adicionado para corrigir o fluxo de navegação
import "./admin.css"; 

export default function Admin() {
  // Estados do Formulário de Cadastro/Edição
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  
  // Controle de Estado do Banco de Dados
  const [servicos, setServicos] = useState([]);
  const [editandoId, setEditandoId] = useState(null); 
  const [mensagem, setMensagem] = useState("");

  // ==========================================
  // READ: Buscar serviços existentes no MySQL
  // ==========================================
  const carregarServicos = () => {
    fetch("http://localhost:3000/servicos")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados do servidor");
        return res.json();
      })
      .then((data) => setServicos(data))
      .catch((err) => console.error("Erro ao listar:", err));
  };

  useEffect(() => {
    carregarServicos();
  }, []);

  // ==========================================
  // CREATE & UPDATE (Dinamismo Total)
  // ==========================================
  const salvarServico = (e) => {
    e.preventDefault();

    const url = editandoId 
      ? `http://localhost:3000/servicos/${editandoId}` 
      : "http://localhost:3000/servicos";
    
    const method = editandoId ? "PUT" : "POST";

    const dadosServico = { 
      titulo: titulo.trim(), 
      descricao: descricao.trim(), 
      imagem: imagem.trim(), 
      conteudo: conteudo.trim() 
    };

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosServico),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na operação com o banco de dados");
        return res.json();
      })
      .then((resposta) => {
        if (editandoId) {
          setServicos((listaAtual) =>
            listaAtual.map((item) =>
              item.id === editandoId ? { ...item, ...dadosServico } : item
            )
          );
          setMensagem("Solução atualizada com sucesso!");
        } else {
          const novoItem = { id: resposta.id, ...dadosServico };
          setServicos((listaAtual) => [...listaAtual, novoItem]);
          setMensagem("Solução criada com sucesso!");
        }

        limparFormulario();
        setTimeout(() => setMensagem(""), 4000);
      })
      .catch((err) => {
        console.error("Erro ao salvar:", err);
        setMensagem("Ocorreu um erro ao salvar os dados. Verifique o console do backend.");
      });
  };

  // ==========================================
  // DELETE (Exclusão Instantânea)
  // ==========================================
  const deletarServico = (id) => {
    if (window.confirm("Tem certeza que deseja excluir permanentemente este card do portal?")) {
      fetch(`http://localhost:3000/servicos/${id}`, { method: "DELETE" })
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao deletar");
          return res.json();
        })
        .then(() => {
          setServicos((listaAtual) => listaAtual.filter((item) => item.id !== id));
          setMensagem("Solução removida com sucesso!");
          if (editandoId === id) limparFormulario();
          setTimeout(() => setMensagem(""), 4000);
        })
        .catch((err) => console.error("Erro ao deletar:", err));
    }
  };

  const prepararEdicao = (servico) => {
    setEditandoId(servico.id);
    setTitulo(servico.titulo);
    setDescricao(servico.descricao);
    setImagem(servico.imagem || "");
    setConteudo(servico.conteudo || "");
    setMensagem(""); 
  };

  const limparFormulario = () => {
    setEditandoId(null);
    setTitulo("");
    setDescricao("");
    setImagem("");
    setConteudo("");
  };

  return (
    <div className="admin-global-wrapper" style={{ padding: "20px" }}>
      
      {/* SEÇÃO DE LINKS DE NAVEGAÇÃO RÁPIDA ENTRE PAINÉIS */}
      <nav className="admin-nav-tabs" style={{ display: "flex", gap: "15px", marginBottom: "30px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <Link to="/admin" style={{ padding: "10px 20px", background: "#00a896", color: "#fff", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
          💼 Gerenciar Soluções
        </Link>
        <Link to="/adminblog" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          📝 Gerenciar Blog
        </Link>
        <Link to="/adminvagas" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          🚀 Gerenciar Vagas
        </Link>
      </nav>

      <div className="admin-page-container">
        {/* PAINEL DA ESQUERDA: Formulário Dinâmico */}
        <div className="admin-card-panel">
          <h2 className="admin-panel-title">
            {editandoId ? "📝 Editar Solução" : "✨ Nova Solução"}
          </h2>
          
          {mensagem && (
            <div className="admin-alert-success">
              {mensagem}
            </div>
          )}

          <form onSubmit={salvarServico} className="admin-form">
            <div className="form-group">
              <label>Título do Card:</label>
              <input
                type="text" 
                required 
                className="form-input"
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Consultoria em Nuvem"
              />
            </div>

            <div className="form-group">
              <label>Descrição Curta (Aparece no Card):</label>
              <textarea
                required 
                className="form-input form-textarea"
                style={{ height: "80px" }}
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Resumo rápido explicativo..."
              />
            </div>

            <div className="form-group">
              <label>URL da Imagem Banner:</label>
              <input
                type="text" 
                className="form-input"
                value={imagem} 
                onChange={(e) => setImagem(e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div className="form-group">
              <label>Conteúdo Completo (Aparece no Ler Mais):</label>
              <textarea
                className="form-input form-textarea"
                style={{ height: "130px" }}
                value={conteudo} 
                onChange={(e) => setConteudo(e.target.value)}
                placeholder="Digite aqui o texto longo detalhado..."
              />
            </div>

            <button type="submit" className="btn-admin-submit">
              {editandoId ? "Atualizar Alterações" : "Criar Card"}
            </button>

            {editandoId && (
              <button type="button" onClick={limparFormulario} className="btn-admin-cancel">
                Cancelar Edição
              </button>
            )}
          </form>
        </div>

        {/* PAINEL DA DIREITA: Tabela Gerencial */}
        <div className="admin-card-panel">
          <h2 className="admin-panel-title">📋 Monitoramento de Cards ({servicos.length})</h2>
          
          <div className="table-responsive-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descrição Resumida</th>
                  <th style={{ textAlign: "center" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {servicos.map((servico) => (
                  <tr key={servico.id}>
                    <td className="truncate-text font-semibold">
                      {servico.titulo}
                    </td>
                    <td className="truncate-text max-width-desc">
                      {servico.descricao}
                    </td>
                    <td className="actions-cell">
                      <button
                        onClick={() => prepararEdicao(servico)}
                        className="btn-action-edit"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deletarServico(servico.id)}
                        className="btn-action-delete"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
                
                {servicos.length === 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
                      Nenhum serviço registrado no banco de dados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}