import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import "./DetalheSolucao.css"; // Certifique-se de importar o arquivo CSS aqui

export default function DetalheSolucao() {
  const { id } = useParams();
  const [servico, setServico] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/servicos/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Não encontrado");
        return response.json();
      })
      .then((data) => {
        setServico(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-500 font-medium">Carregando detalhes...</div>;
  if (!servico) return <div className="text-center py-20 text-red-500 font-medium">Solução não encontrada.</div>;

  return (
    <div className="detalhe-solucao-container">
      <div className="detalhe-solucao-content">
        
        <Link to="/solucoes" className="btn-voltar">
          ← Voltar para Soluções
        </Link>

        <article className="detalhe-solucao-article">
          {/* Título */}
          <h1 className="detalhe-solucao-titulo">{servico.titulo}</h1>
          
          {/* Divisor */}
          <div className="detalhe-solucao-divisor"></div>

          {/* Imagem vinda do Banco */}
          {servico.imagem && (
            <div className="detalhe-solucao-image-container">
              <img 
                src={servico.imagem} 
                alt={servico.titulo} 
                className="detalhe-solucao-image"
              />
            </div>
          )}

          {/* Descrição Curta (Subtítulo) */}
          <p className="detalhe-solucao-descricao-curta">{servico.descricao}</p>

          {/* Texto de Conteúdo Longo */}
          <p className="detalhe-solucao-conteudo-completo">
            {servico.conteudo || "Nenhum conteúdo detalhado disponível para esta solução."}
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}