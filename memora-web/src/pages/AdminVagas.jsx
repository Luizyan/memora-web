import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTANTE: adicionado para corrigir o fluxo de navegação entre os painéis
import './AdminVagas.css';

export function AdminVagas() {
  const [vagas, setVagas] = useState([]);
  const [editandoId, setEditandoId] = useState(null); // Estado para controlar se estamos editando
  const [novoItem, setNovoItem] = useState({
    titulo: '',
    categoria: '',
    descricao_curta: '',
    imagem: '',
    data_criacao: '',
    link_url: ''
  });

  // Função para buscar as vagas atualizadas do backend
  const carregarVagas = () => {
    fetch('http://localhost:3000/vagas')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Não foi possível carregar a lista de vagas.');
        }
        return res.json();
      })
      .then((data) => setVagas(data))
      .catch((err) => console.error('Erro ao buscar vagas:', err));
  };

  // Carrega as vagas assim que a tela abre
  useEffect(() => {
    carregarVagas();
  }, []);

  // Atualiza o estado conforme o usuário digita nos inputs
  const handleChange = (e) => {
    setNovoItem({ ...novoItem, [e.target.name]: e.target.value });
  };

  // Prepara o formulário com os dados da vaga selecionada para edição
  const handleIniciarEdicao = (vaga) => {
    setEditandoId(vaga.id);
    setNovoItem({
      titulo: vaga.titulo,
      categoria: vaga.categoria,
      descricao_curta: vaga.descricao_curta,
      imagem: vaga.imagem,
      data_criacao: vaga.data_criacao,
      link_url: vaga.link_url
    });
    // Rola a tela suavemente para o topo onde está o formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancela o modo de edição e limpa os campos
  const handleCancelarEdicao = () => {
    setEditandoId(null);
    setNovoItem({
      titulo: '',
      categoria: '',
      descricao_curta: '',
      imagem: '',
      data_criacao: '',
      link_url: ''
    });
  };

  // Envia os dados para salvar (CREATE ou UPDATE) no banco de dados
  const handleSubmit = (e) => {
    e.preventDefault();

    // Se o usuário não digitar uma data, gera automaticamente com a data de hoje (DD | MM | AAAA)
    let dataFinal = novoItem.data_criacao;
    if (!dataFinal.trim()) {
      const hoje = new Date();
      const dia = String(hoje.getDate()).padStart(2, '0');
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const ano = hoje.getFullYear();
      dataFinal = `${dia} | ${mes} | ${ano}`;
    }

    const payload = {
      ...novoItem,
      data_criacao: dataFinal
    };

    // Define dinamicamente a URL e o método com base no estado de edição
    const url = editandoId ? `http://localhost:3000/vagas/${editandoId}` : 'http://localhost:3000/vagas';
    const metodo = editandoId ? 'PUT' : 'POST';

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Falha no servidor ao processar a requisição.');
        }
        return res.json();
      })
      .then(() => {
        alert(editandoId ? 'Vaga atualizada com sucesso!' : 'Vaga cadastrada com sucesso!');
        handleCancelarEdicao(); // Limpa o formulário e sai do modo de edição
        carregarVagas(); // Atualiza a tabela imediatamente
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao salvar: Verifique se o seu Backend está rodando e sem erros no terminal.');
      });
  };

  // Remove uma vaga do banco de dados
  const handleDeletar = (id) => {
    if (window.confirm('Tem certeza que deseja remover esta vaga permanentemente?')) {
      fetch(`http://localhost:3000/vagas/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Não foi possível deletar a vaga.');
          }
          alert('Vaga removida com sucesso!');
          if (editandoId === id) handleCancelarEdicao(); // Se deletar a vaga que estava editando, limpa o form
          carregarVagas(); // Atualiza a tabela
        })
        .catch((err) => {
          console.error(err);
          alert('Erro ao tentar deletar a vaga.');
        });
    }
  };

  return (
    <div className="admin-global-wrapper" style={{ padding: "20px" }}>
      
      {/* ABAS DE NAVEGAÇÃO INTEGRADA DO SISTEMA GERAL */}
      <nav className="admin-nav-tabs" style={{ display: "flex", gap: "15px", marginBottom: "30px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <Link to="/admin" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          💼 Gerenciar Soluções
        </Link>
        <Link to="/adminblog" style={{ padding: "10px 20px", background: "#f1f5f9", color: "#334155", textDecoration: "none", borderRadius: "5px", fontWeight: "500" }}>
          📝 Gerenciar Blog
        </Link>
        <Link to="/adminvagas" style={{ padding: "10px 20px", background: "#00a896", color: "#fff", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
          🚀 Gerenciar Vagas
        </Link>
      </nav>

      <div className="admin-vagas-container">
        <header className="admin-vagas-header">
          <h2>Painel de Vagas (Empregare)</h2>
          <p>Gerencie as oportunidades exibidas no carrossel da Home</p>
        </header>
        
        <div className="admin-vagas-content">
          {/* Formulário de Cadastro / Edição */}
          <section className="form-section">
            <h3>{editandoId ? '📝 Editar Vaga' : '✨ Nova Vaga'}</h3>
            <form onSubmit={handleSubmit} className="admin-vagas-form">
              <div className="input-group">
                <label>Título da Vaga</label>
                <input 
                  type="text" 
                  name="titulo" 
                  placeholder="Ex: Designer UX/UI Sênior" 
                  value={novoItem.titulo} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Categoria / Área</label>
                <input 
                  type="text" 
                  name="categoria" 
                  placeholder="Ex: Design, Marketing, Tecnologia" 
                  value={novoItem.categoria} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Descrição Curta (Complemento do Card)</label>
                <input 
                  type="text" 
                  name="descricao_curta" 
                  placeholder="Ex: com foco em redes sociais e performance." 
                  value={novoItem.descricao_curta} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>URL da Imagem do Card</label>
                <input 
                  type="text" 
                  name="imagem" 
                  placeholder="Link da imagem (Unsplash, etc.)" 
                  value={novoItem.imagem} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Data de Criação (Opcional)</label>
                <input 
                  type="text" 
                  name="data_criacao" 
                  placeholder="Deixe em branco para usar a data atual" 
                  value={novoItem.data_criacao} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label>Link de Inscrição (Empregare)</label>
                <input 
                  type="url" 
                  name="link_url" 
                  placeholder="https://empregare.com/vaga/..." 
                  value={novoItem.link_url} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <button type="submit" className="btn-submit">
                {editandoId ? 'Salvar Alterações' : 'Cadastrar Oportunidade'}
              </button>

              {editandoId && (
                <button 
                  type="button" 
                  onClick={handleCancelarEdicao} 
                  className="btn-cancel" 
                  style={{ background: '#444', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', marginTop: '10px', width: '100%' }}
                >
                  Cancelar Edição
                </button>
              )}
            </form>
          </section>

          {/* Tabela de Visualização e Controle */}
          <section className="table-section">
            <h3>Vagas Ativas ({vagas.length})</h3>
            <div className="table-wrapper">
              <table className="admin-vagas-table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Categoria</th>
                    <th>Link Externo</th>
                    <th style={{ textAlign: "center" }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {vagas.length === 0 ? (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', color: '#8da2b4', padding: '20px' }}>
                        Nenhuma vaga cadastrada ou carregando...
                      </td>
                    </tr>
                  ) : (
                    vagas.map((vaga) => (
                      <tr key={vaga.id} style={{ borderLeft: editandoId === vaga.id ? '4px solid #00a896' : 'none' }}>
                        <td data-label="Título" className="vaga-title-td" title={vaga.titulo}>
                          {vaga.titulo}
                        </td>
                        <td data-label="Categoria">
                          <span className="badge-categoria">{vaga.categoria}</span>
                        </td>
                        <td data-label="Link Externo">
                          <a href={vaga.link_url} target="_blank" rel="noopener noreferrer" className="link-view">
                            Acessar Empregare
                          </a>
                        </td>
                        <td data-label="Ações">
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <button 
                              onClick={() => handleIniciarEdicao(vaga)} 
                              style={{ background: '#ffb703', color: '#000', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}
                            >
                              Editar
                            </button>
                            <button onClick={() => handleDeletar(vaga.id)} className="btn-delete">
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}