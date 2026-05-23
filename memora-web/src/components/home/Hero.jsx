import heroImg from '../../assets/genteComemorando.jpg';

export function Hero() {
  return (
    // OPÇÃO 1: Adicionar display flex e gap direto no pai (Recomendado)
    <section className="hero" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
      
      {/* OPÇÃO 2: Adicionar uma margem direita na div do texto */}
      <div className="hero-content" style={{ marginRight: '3rem' }}>
        <h1>Transformamos processos em <strong>resultados memoráveis</strong></h1>
        <p>Conectando tecnologia, metodologia e pessoas para transformar governos e organizações.</p>
        <button className="cta-btn">Veja mais</button>
      </div>
      
      <div className="hero-image">
        <img 
          src={heroImg} 
          alt="Gente Comemorando" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
        />
      </div>
    </section>
  );
}