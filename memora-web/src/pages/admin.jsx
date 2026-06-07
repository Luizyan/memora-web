import { useState } from "react";
import "./admin.css";

export default function Admin() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState("");

  const cadastrarServico = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/servicos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descricao,
          conteudo,
          imagem,
        }),
      });

      const data = await response.json();

      alert(data.mensagem);

      setTitulo("");
      setDescricao("");
      setConteudo("");
      setImagem("");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar serviço");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-content">

        <h1>Painel Administrativo</h1>

        <form onSubmit={cadastrarServico}>

          <input
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <input
            placeholder="URL da imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />

          <textarea
            placeholder="Conteúdo"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />

          <button type="submit">
            Criar Card
          </button>

        </form>

      </div>
    </div>
  );
}