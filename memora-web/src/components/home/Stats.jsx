export function Stats() {
  const resultados = [
    { cifra: "+500", desc: "colaboradores" },
    { cifra: "6", desc: "escritórios" },
    { cifra: "+R$ 1,8 bi", desc: "recuperados" },
    { cifra: "+ de 50 mi", desc: "impactadas" },
  ];

  return (
    <section className="stats">
      <div className="stats-info">
        {/* Adicionado o fontWeight: 800 ou 'bold' para engrossar a fonte */}
        <h2 style={{ fontWeight: 800 }}>Nossos resultados</h2>
      </div>
      <div className="stats-grid">
        {resultados.map((item, index) => (
          <div key={index} className="stat-card">
            <strong>{item.cifra}</strong> {item.desc}
          </div>
        ))}
      </div>
    </section>
  );
}