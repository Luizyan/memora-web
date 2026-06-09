import "./Stats.css"; // Garante que está puxando o arquivo local correto

export function Stats() {
  const resultados = [
    { cifra: "+500", desc: "colaboradores" },
    { cifra: "6", desc: "escritórios" },
    { cifra: "+R$ 1,8 bi", desc: "recuperados" },
    { cifra: "+ de 50 mi", desc: "impactadas" },
  ];

  return (
    <section className="stats">
      <h2 className="stats-title">Nossos Resultados</h2>

      <div className="stats-grid">
        {resultados.map((item, index) => (
          <div key={index} className="stat-card">
            {/* O segredo está nessas duas classes abaixo que ligam com o CSS */}
            <span className="stat-number">{item.cifra}</span>
            <span className="stat-label">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}