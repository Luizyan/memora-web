import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const YoutubeIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#252222">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#252222">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#252222">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#252222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="#252222"/>
  </svg>
);

const MailIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#252222">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6" stroke="#252222" strokeWidth="1.5" fill="none"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="#252222">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
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

const navItems = [
  { label: 'Início',   to: '/' },
  { label: 'Empresa',  to: '/empresa' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Contatos', to: '/contatos' },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
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
    <header className="header">
      <div className="top-bar">
        <div className="social-icons-wrapper" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw" target="_blank" rel="noreferrer" style={iconStyle('#fff')}>
            <YoutubeIcon />
          </a>
          <a href="https://www.facebook.com/MEMORAVEL" target="_blank" rel="noreferrer" style={iconStyle('#fff')}>
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/memoraprocessos" target="_blank" rel="noreferrer" style={iconStyle('#fff')}>
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/memoraprocessosinovadores/" target="_blank" rel="noreferrer" style={iconStyle('#fff')}>
            <InstagramIcon />
          </a>
          <a href="mailto:contato@memora.com.br" style={iconStyle('#fff')}>
            <MailIcon />
          </a>
          <a href="tel:6139630030" style={iconStyle('#fff')}>
            <PhoneIcon />
          </a>
        </div>
        <button className="admin-btn">Área do Administrador</button>
      </div>

      <nav className="navbar">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo">MEMORA</div>
        </Link>

        <ul className="nav-links">
          {navItems.map(({ label, to }) => {
            const isActive =
              to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(to);

            return (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#000' : 'inherit',
                    fontWeight: isActive ? '700' : 'inherit',
                    borderBottom: isActive ? '2px solid currentColor' : '2px solid transparent',
                    paddingBottom: '2px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          onClick={!searchOpen ? handleSearchClick : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid',
            borderColor: searchOpen ? '#555' : '#ccc',
            cursor: searchOpen ? 'text' : 'pointer',
            transition: 'all 0.3s ease',
            width: searchOpen ? '220px' : '120px',
            backgroundColor: searchOpen ? '#fff' : 'transparent',
            boxSizing: 'border-box',
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
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                backgroundColor: 'transparent',
              }}
            />
          ) : (
            <span style={{ fontSize: '14px', color: '#555' }}>Pesquisar</span>
          )}
        </div>
      </nav>
    </header>
  );
}