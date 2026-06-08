import React, { useState, useEffect } from "react";
import "./admin.css"; // Certifique-se de que o seu admin.css está na mesma pasta

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

    // Tratamento básico para evitar o envio de espaços em branco desnecessários
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
          // UPDATE DINÂMICO: Atualiza apenas o item editado na lista sem dar refresh
          setServicos((listaAtual) =>
            listaAtual.map((item) =>
              item.id === editandoId ? { ...item, ...dadosServico } : item
            )
          );
          setMensagem("Serviço atualizado com sucesso!");
        } else {
          // CREATE DINÂMICO: Adiciona o novo card gerado diretamente no final da tabela
          const novoItem = { id: resposta.id, ...dadosServico };
          setServicos((listaAtual) => [...listaAtual, novoItem]);
          setMensagem("Serviço criado com sucesso!");
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
          // DELETE DINÂMICO: Remove o item filtrando a lista na hora por ID
          setServicos((listaAtual) => listaAtual.filter((item) => item.id !== id));
          
          setMensagem("Serviço removido com sucesso!");
          if (editandoId === id) limparFormulario();
          setTimeout(() => setMensagem(""), 4000);
        })
        .catch((err) => console.error("Erro ao deletar:", err));
    }
  };

  // Prepara os inputs clonando os dados do card escolhido para edição
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
  );
}