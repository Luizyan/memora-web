import heroImg from '../../assets/genteComemorando.jpg';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transformamos processos em <strong>resultados memoráveis</strong></h1>
        <p>Conectando tecnologia, metodologia e pessoas para transformar governos e organizações.</p>
        <button className="cta-btn">Veja mais</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Gente Comemorando" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
    </section>
  );
}