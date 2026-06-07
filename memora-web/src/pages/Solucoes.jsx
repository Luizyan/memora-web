import React, { useEffect, useState } from "react";
import "./Solucoes.css";
import { Footer } from "../components/home/Footer";
import { Link } from "react-router-dom";

export default function Solucoes() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/servicos")
      .then((response) => response.json())
      .then((data) => {
        setServicos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar serviços:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="solucoes-page">
      {/* Hero Section */}
      <section className="solucoes-hero">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1>Soluções</h1>

            <p>
              Soluções aliadas à tecnologia que possibilitam a transformação
              digital de empresas, promovem mudanças na experiência do cliente e
              melhoram a performance das equipes nos diversos níveis de decisão.
            </p>

            <p>
              Da integração entre os times à ferramentas de gerenciamento de
              processos, temos a solução sob medida para sua empresa,
              diminuindo riscos e otimizando resultados.
            </p>
          </div>
        </div>

        <div className="hero-image-overlay">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
            alt="Grupo colaborando em escritório"
          />
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="solucoes-grid-section">
        <div className="solucoes-container">

          {loading && <p>Carregando serviços...</p>}

          {!loading &&
            servicos.map((item) => (
              <div key={item.id} className="solucao-card">
                <div className="solucao-card-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>

                <div className="solucao-card-footer">
                  <Link
                    to={`/solucao/${item.id}`}
                    className="btn-ler-mais"
                  >
                    LER MAIS
                  </Link>
                </div>
              </div>
            ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}