import { Link } from 'react-router-dom';
import { Footer } from '../../components/home/Footer'; // 1. Importa o Footer (ajuste os pontos se o caminho der erro)
import './VejaMais.css';

export function VejaMais() {
  return (
    <> {/* 2. Abre o Fragment do React para permitir dois componentes irmãos */}
      
      <section className="veja-mais-container" style={{ position: 'relative', padding: '4rem 2rem', minHeight: '60vh' }}>
        {/* O botão X que aponta para a raiz "/" */}
        <Link 
          to="/" 
          style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            fontSize: '1.8rem', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none'
          }}
          aria-label="Fechar"
        >
          &times;
        </Link>

        <div className="veja-mais-conteudo">
          <h2>Mais sobre os nossos resultados</h2>
          <p>
            Aqui você pode colocar todos os textos detalhados, dados explicativos 
            e a metodologia da Memora que transformam governos e organizações.
          </p>
        </div>
      </section>

      <Footer /> 
    </>
  );
}