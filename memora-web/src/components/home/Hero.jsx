import { Link } from 'react-router-dom';
import heroImg from '../../assets/genteComemorando.jpg';
import './Hero.css'; // <--- O import vital para puxar o arquivo exclusivo

export function Hero() {
  return (
    <div className="hero-home-bg"> {/* Aplica o fundo de ponta a ponta */}
      <section className="hero-home"> {/* Segura o conteúdo em 1200px */}
        
        <div className="hero-home-content">
          <h1>Transformamos processos em <strong>resultados memoráveis</strong></h1>
          <p>Conectando tecnologia, metodologia e pessoas para transformar governos e organizações.</p>
          
          <Link to="/vejamais" className="hero-home-cta">
            Veja mais
          </Link>
        </div>
        
        <div className="hero-home-image">
          <img src={heroImg} alt="Gente Comemorando" />
        </div>

      </section>
    </div>
  );
}