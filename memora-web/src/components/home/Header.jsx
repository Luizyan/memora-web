import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

// Importando a logo da pasta assets
import logoMemora from '../../assets/logo-min.png'; 

const YoutubeIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#2d5c5e">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#2d5c5e">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#2d5c5e">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#2d5c5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PhoneIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#2d5c5e">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const MenuIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const iconStyle = (bg) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: bg,
  flexShrink: 0,
});

// REMOVIDO "CONTATOS" DA LISTA ABAIXO
const navItems = [
  { label: 'Início',   to: '/' },
  { label: 'Empresa',  to: '/empresa' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Blog',     to: '/blog' },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  const location = useLocation();

  const handleSearchClick = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleBlur = () => {
    if (searchValue === '') setSearchOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearchValue('');
      setSearchOpen(false);
    }
    if (e.key === 'Enter') {
      console.log('Pesquisar por:', searchValue);
    }
  };

  return (
    <header className="header-container">
      
      {/* 1. TOP BAR */}
      <div className="top-bar-bg">
        <div className="top-bar-content">
          <div className="social-icons-wrapper">
            <a href="https://www.facebook.com/MEMORAVEL" target="_blank" rel="noopener noreferrer" style={iconStyle('#ffffff')}>
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw" target="_blank" rel="noopener noreferrer" style={iconStyle('#ffffff')}>
              <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/company/memoraprocessos" target="_blank" rel="noopener noreferrer" style={iconStyle('#ffffff')}>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/memoraprocessosinovadores/" target="_blank" rel="noopener noreferrer" style={iconStyle('#ffffff')}>
              <InstagramIcon />
            </a>
            <a href="https://wa.me/556139630030" target="_blank" rel="noopener noreferrer" style={iconStyle('#ffffff')}>
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <div className="navbar-bg">
        <div className="navbar-content">
          
          <Link to="/" className="logo">
            <img 
              src={logoMemora} 
              alt="Memora Processos Inovadores" 
              className="logo-img"
            />
          </Link>

          {/* Links do Desktop */}
          <ul className="nav-links-desktop">
            {navItems.map(({ label, to }) => {
              const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
              return (
                <li key={to}>
                  <Link to={to} className={`nav-link-item ${isActive ? 'active' : ''}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Lado Direito: Ações */}
          <div className="nav-right-actions">
            
            {/* Caixa de Busca */}
            <div
              onClick={!searchOpen ? handleSearchClick : undefined}
              className="search-container"
              style={{
                width: searchOpen ? '180px' : '110px',
                borderColor: searchOpen ? '#ffffff' : 'rgba(255,255,255,0.4)',
                cursor: searchOpen ? 'text' : 'pointer',
              }}
            >
              <SearchIcon />
              {searchOpen ? (
                <input
                  ref={inputRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                  placeholder="Pesquisar..."
                  className="search-input"
                />
              ) : (
                <span style={{ fontSize: '13px', color: '#ffffff' }}>Pesquisar</span>
              )}
            </div>

            {/* Botão Hamburguer */}
            <button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

          </div>
        </div>
      </div>

      {/* 3. MENU MOBILE EXPANSÍVEL */}
      {menuOpen && (
        <ul className="nav-links-mobile">
          {navItems.map(({ label, to }) => {
            const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
            return (
              <li key={to}>
                <Link 
                  to={to} 
                  onClick={() => setMenuOpen(false)} 
                  className={`nav-link-mobile-item ${isActive ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

    </header>
  );
}