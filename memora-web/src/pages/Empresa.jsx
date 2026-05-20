import "./Empresa.css";

import { Footer } from "../components/home/Footer";
import { Clients } from "../components/home/Clients";

// Imagem do Unsplash
const historiaHero =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80";

function Container({ children }) {
  return (
    <div className="empresa-container">
      {children}
    </div>
  );
}

function SectionTitle() {
  return (
    <header className="empresa-header">
      <Container>
        <h1 className="empresa-main-title">
          Nossa história
        </h1>
      </Container>
    </header>
  );
}

function HistoryBlock({
  title,
  introText,
  imageSrc,
  imageAlt,
  children,
  fullWidthText = false,
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="empresa-section">
      <Container>

        {!fullWidthText && (
          <div
            className={`empresa-history-top ${
              hasImage
                ? "empresa-history-top-with-image"
                : ""
            }`}
          >

            {/* TEXTO */}
            <div className="empresa-history-intro">
              <h2 className="empresa-history-title">
                {title}
              </h2>

              <div className="empresa-prose">
                {introText}
              </div>
            </div>

            {/* IMAGEM */}
            {hasImage && (
              <figure className="empresa-history-figure">
                <img
                  src={imageSrc}
                  alt={imageAlt || ""}
                  loading="lazy"
                  className="empresa-history-image"
                />
              </figure>
            )}
          </div>
        )}

        {fullWidthText && (
          <>
            <h2 className="empresa-history-title empresa-history-title-left">
              {title}
            </h2>
            <div className="empresa-prose empresa-full-width-text">
              {introText}
            </div>
          </>
        )}

        {/* TEXTO ABAIXO */}
        {children && (
          <div className="empresa-bottom-text empresa-prose">
            {children}
          </div>
        )}

      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="empresa-values-section">
      <Container>
        <div className="empresa-values-divider"></div>
        
        <div className="empresa-values-grid">
          {/* Propósito */}
          <div className="empresa-value-card">
            <div className="empresa-value-icon">
              {/* Ícone de pessoas */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="25" r="8" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="32" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="55" cy="32" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="18" cy="42" r="5" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="62" cy="42" r="5" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M40 35C45 35 48 40 48 45V52H32V45C32 40 35 35 40 35Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M25 40C29 40 31 44 31 48V52H19V48C19 44 21 40 25 40Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M55 40C59 40 61 44 61 48V52H49V48C49 44 51 40 55 40Z" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            <h3 className="empresa-value-title">Propósito</h3>
            <div className="empresa-value-underline"></div>
            <p className="empresa-value-text">
              Ser útil à sociedade como agente de transformação das organizações.
            </p>
          </div>

          {/* Missão */}
          <div className="empresa-value-card">
            <div className="empresa-value-icon">
              {/* Ícone de alvo */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="40" r="4" fill="currentColor"/>
                <path d="M52 28L58 22M58 22L62 18M58 22L54 18M58 22L62 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="empresa-value-title">Missão</h3>
            <div className="empresa-value-underline"></div>
            <p className="empresa-value-text">
              Conhecer nossos clientes, construir e entregar soluções de gestão e tecnologia, 
              que resultem na conquista de seus objetivos.
            </p>
          </div>

          {/* Visão */}
          <div className="empresa-value-card">
            <div className="empresa-value-icon">
              {/* Ícone de olho */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40C10 40 20 25 40 25C60 25 70 40 70 40C70 40 60 55 40 55C20 55 10 40 10 40Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="40" r="5" fill="currentColor"/>
                <path d="M35 20L40 15L45 20M35 60L40 65L45 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="empresa-value-title">Visão</h3>
            <div className="empresa-value-underline"></div>
            <p className="empresa-value-text">
              Propagar transformações digitais únicas, que ampliem a prosperidade da sociedade, 
              com soluções genuinamente Memoráveis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Empresa() {
  return (
    <main className="empresa-page">

      <SectionTitle />

      {/* BLOCO 1 - Pensamento sistêmico e orientado à gestão */}
      <HistoryBlock
        title="Pensamento sistêmico e orientado à gestão"
        imageSrc={historiaHero}
        imageAlt="Equipe colaborando em reunião de trabalho"

        introText={
          <>
            <p>
              Com essa diretriz, nos especializamos em
              processos organizacionais, sob a ótica da
              gestão, e em vários segmentos da tecnologia
              da informação. <strong>Construímos sólidas 
              parcerias as quais nos permitem grande 
              flexibilidade de ofertas ajustadas aos 
              desafios dos nossos clientes.</strong>
            </p>

            <p>
              Em função da amplitude do portfólio dos nossos
              parceiros e fruto das nossas especializações,
              temos construído com sucesso soluções de grande
              valor agregado para o mercado.
            </p>
          </>
        }
      >
        <p>
          A soma das competências internas, parcerias e
          casos de sucesso, ao longo dos anos, tem nos
          permitido, além da prestação de serviços
          especializados e da comercialização de soluções
          integradas de parceiros, desenvolver nossas
          próprias soluções.
        </p>

        <p>
          Com destaque o <strong>Vitro</strong>, que aprimora a governança
          e a transparência das contratações de produtos
          e serviços realizadas pela Administração, e
          o <strong>beekme</strong>, uma solução de entrega de conteúdo 
          digital utilizando tecnologia de microlocalização.
        </p>
      </HistoryBlock>

      {/* BLOCO 2 - Valorização dos colaboradores e comunicação multilateral */}
      <HistoryBlock
        title="Valorização dos colaboradores e comunicação multilateral"
        fullWidthText={true}

        introText={
          <>
            <p>
              Sob o aspecto da gestão interna, que reflete
              diretamente a nossa capacidade de atendimento,
              também decidimos trilhar caminhos diferentes
              das empresas tradicionais. Ao invés de um modelo 
              mecanicista, com base em rígida hierarquia, 
              relações de comando e controle, comunicações e 
              diretrizes unilaterais (do topo para a base), 
              optamos por um modelo biológico.
            </p>

            <p>
              Nesse conceito, há uma valorização das pessoas
              que compõem a organização, permitindo um ambiente
              de parceria, onde o todo é maior que a soma das
              partes. Ao invés de uma hierarquia rígida, temos 
              modelos que descentralizam o poder decisório e se 
              auto-organizam em busca da melhor solução para cada 
              situação. A comunicação é multilateral e pode fluir em
              qualquer direção.
            </p>

            <p>
              A sustentação de um modelo de gestão dessa natureza 
              implica em mudanças comportamentais e no ambiente de 
              trabalho. No primeiro aspecto, cultivamos uma forte 
              adesão aos valores corporativos, que foram criados 
              de forma participativa e cuja aplicação e evolução 
              é guardada por um grupo voluntário com participantes 
              das diversas áreas da empresa.
            </p>

            <p>
              Sob o aspecto físico, criamos um ambiente onde o 
              colaborador pode conciliar suas atribuições com 
              diversas opções de entretenimento no ambiente de 
              trabalho, que vão desde uma partida de ping-pong 
              até uma massagem-express. Vivemos o princípio da 
              "liberdade com responsabilidade"!
            </p>
          </>
        }
      />

      {/* BLOCO 3 - Excelência em todas as etapas */}
      <HistoryBlock
        title="Excelência em todas as etapas"
        fullWidthText={true}

        introText={
          <>
            <p>
              Os resultados alcançados demonstram na prática
              que nossas escolhas foram acertadas. A Memora 
              construiu um histórico de relação com o mercado, 
              que envolve diversos clientes atendidos, e mais 
              de 17 anos de mercado.
            </p>

            <p>
              Recebemos ao longo dos anos vários prêmios
              nacionais e internacionais, que destacam a nossa
              performance. Estabelecemos uma filial em Goiânia 
              e um escritório em Portugal, onde atendemos projetos 
              continuados de serviço, bem como temos atuação em 
              diversas outras unidades da federação.
            </p>

            <p>
              Internamente, incentivamos um clima organizacional 
              descontraído, com reduzido nível de stress, aliado 
              a um alto grau de profissionalismo e comprometimento. 
              Engajamo-nos em diversos projetos sociais, apoiando 
              pessoas e organizações que atuam na inserção social 
              de indivíduos carentes por meio da música, do esporte 
              e da filantropia.
            </p>

            <p>
              Nossa crença mais profunda é que o somatório das
              estratégias adotadas têm um poder de transformação 
              social, que passa pelos nossos clientes, nossos 
              colaboradores, nossos parceiros, as entidades 
              filantrópicas que apoiamos e se propaga na medida 
              em que crescemos. Junte-se a nós, conheça nosso 
              projeto e venha viver o desafio de ter uma sociedade 
              melhor.
            </p>
          </>
        }
      />

      {/* SEÇÃO DE VALORES */}
      <ValuesSection />

      <Clients />
      <Footer />
    </main>
  );
}