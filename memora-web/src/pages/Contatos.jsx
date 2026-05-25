import { Footer } from "../components/home/Footer";
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import './Contatos.css';

export default function Contatos() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const response = await fetch('http://localhost:8080/api/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          mensagem: mensagem
        })
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        // Limpa o formulário
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        const erro = await response.json();
        alert(erro.mensagem || 'Erro ao enviar mensagem.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="contatos-container">
      {/* Hero Section */}
      <div className="contatos-hero">
        <div className="contatos-hero-overlay" />
        <div className="contatos-hero-content">
          <h1>Venha ser memorável</h1>
          <p>Entre em contato e saiba mais sobre nossas soluções inovadoras</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contatos-content">
        <div className="contatos-grid">
          {/* Left Column - Contact Info */}
          <div>
            <div className="contatos-info-box">
              <h2>INFORMAÇÕES PARA CONTATO</h2>
              
              <div className="contatos-info-item">
                <MapPin className="contatos-info-icon" />
                <div>
                  <p className="contatos-info-label">Endereço:</p>
                  <p className="contatos-info-text">SIG Quadra 04, Lote G25 Parte A</p>
                  <p className="contatos-info-text">Brasília, Distrito Federal</p>
                </div>
              </div>

              <div className="contatos-info-item">
                <Phone className="contatos-info-icon" />
                <div>
                  <p className="contatos-info-label">Fone:</p>
                  <p className="contatos-info-text">(61) 3963-0030</p>
                </div>
              </div>

              <div className="contatos-info-item">
                <Mail className="contatos-info-icon" />
                <div>
                  <p className="contatos-info-label">Email:</p>
                  <p className="contatos-info-text">contato@memora.com.br</p>
                </div>
              </div>

              <div className="contatos-social-section">
                <p className="contatos-social-title">
                  Siga <span>nossas redes</span>
                </p>
                
                {/* Redes sociais com os links oficiais da Memora */}
                <div className="contatos-social-buttons" style={{ display: 'flex', gap: '10px' }}>
                  
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/MEMORAVEL" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contatos-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contatos-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/memoraprocessosinovadores/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contatos-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/memoraprocessos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contatos-social-btn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
                      <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.12 20.452H3.555V9h3.565v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm15.11 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="contatos-form" onSubmit={handleSubmit}>
              <div className="contatos-form-fields">
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Texto"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />

                <button 
                  type="submit" 
                  className="contatos-submit-btn"
                  disabled={enviando}
                >
                  {enviando ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}