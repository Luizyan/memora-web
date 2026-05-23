import { Link } from 'react-router-dom'; // Importe o Link
import heroImg from '../../assets/genteComemorando.jpg';

export function Hero() {
  return (
    <section className="hero" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
      <div className="hero-content">
        <h1>Transformamos processos em <strong>resultados memoráveis</strong></h1>
        <p>Conectando tecnologia, metodologia e pessoas para transformar governos e organizações.</p>
        
        {/* Transformado em Link apontando para a nova rota */}
        <Link to="/vejamais" className="cta-btn" style={{ textDecoration: 'none' }}>
          Veja mais
        </Link>
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