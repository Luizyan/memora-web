import { Footer } from '../components/home/Footer';
import './ClientsNav.css';

const clients = [
  { name: 'AGR',        fullName: 'Agência Goiana de Regulação',                              bg: '#1a3a6b', color: '#fff' },
  { name: 'AHM',        fullName: 'Autarquia Hospitalar Municipal',                           bg: '#0057a8', color: '#fff' },
  { name: 'ANEEL',      fullName: 'Agência Nacional de Energia Elétrica',                     bg: '#006633', color: '#fff' },
  { name: 'ApexBrasil', fullName: 'Agência Brasileira de Promoção de Exportações',            bg: '#fff',    color: '#009639', border: '1px solid #ddd' },
  { name: 'BB',         fullName: 'Banco do Brasil',                                          bg: '#f8c300', color: '#003882' },
  { name: 'BDMG',       fullName: 'Banco de Desenvolvimento de Minas Gerais',                 bg: '#fff',    color: '#e30613', border: '1px solid #ddd' },
  { name: 'Caixa',      fullName: 'Caixa Econômica Federal',                                  bg: '#006aa7', color: '#fff' },
  { name: 'SERPRO',     fullName: 'Serviço Federal de Processamento de Dados',                bg: '#003f7f', color: '#fff' },
  { name: 'INSS',       fullName: 'Instituto Nacional do Seguro Social',                      bg: '#1a6b3a', color: '#fff' },
  { name: 'TCU',        fullName: 'Tribunal de Contas da União',                              bg: '#8b0000', color: '#fff' },
  { name: 'SEBRAE',     fullName: 'Serviço Brasileiro de Apoio às Micro e Pequenas Empresas', bg: '#005baa', color: '#fff' },
  { name: 'CNJ',        fullName: 'Conselho Nacional de Justiça',                             bg: '#2c3e6b', color: '#fff' },
];

export default function ClientsNav() {
  return (
    <div className="clients-page">

      <section className="clients-hero">
        <div className="clients-hero__particles">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="clients-hero__content">
          <h1 className="clients-hero__title">Clientes</h1>
        </div>
      </section>

      <section className="clients-about">
        <div className="clients-about__inner">
          <p>
            Há 17 anos fornecendo soluções em Gestão de Processos para clientes públicos e privados,
            alcançamos resultados que demonstram na prática que a visão da empresa em atuar como
            agente de melhoria e inovação é uma realidade.
          </p>
          <p>
            Temos construído um histórico de relação com o mercado que envolve mais de{' '}
            <strong>300 casos de sucesso</strong> e recebemos, neste tempo de atuação, vários
            prêmios nacionais e internacionais, destacando a performance da empresa.
          </p>
        </div>
      </section>

      <section className="clients-logos">
        <div className="clients-logos__grid">
          {clients.map((c) => (
            <div
              key={c.name}
              className="clients-logos__card"
              style={{ backgroundColor: c.bg, border: c.border || 'none' }}
              title={c.fullName}
            >
              <span className="clients-logos__label" style={{ color: c.color }}>
                {c.name}
              </span>
              <span className="clients-logos__sub" style={{ color: c.color }}>
                {c.fullName}
              </span>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}