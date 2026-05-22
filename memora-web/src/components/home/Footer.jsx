import { useNavigate } from 'react-router-dom';

const FacebookIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
);

const PinIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const socialIcon = (bg, Icon, url) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 30, height: 30, borderRadius: '50%', backgroundColor: bg,
      textDecoration: 'none'
    }}
  >
    <Icon />
  </a>
);

const ContactItem = ({ icon, children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: 14, color: '#ccc' }}>
    <span style={{ marginTop: 2 }}>{icon}</span>
    <span>{children}</span>
  </div>
);

export function Footer() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contatos');
  };

  return (
    <footer className="footer-container">
      <div className="cta-footer">
        <h2>Quer conhecer nossas soluções ou ficou com dúvida em algo?</h2>
        <button className="falar-conosco-btn" onClick={handleContactClick}>
          Falar conosco →
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '40px',
        padding: '48px 64px',
        borderBottom: '1px solid #333'
      }}>

        {/* Coluna 1 — Marca */}
        <div>
          <div className="logo-white" style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>memora</div>
          <ContactItem icon={<PinIcon />}>
            SIG Quadra 04, Lote 625 Parte A<br/>Brasília, Distrito Federal
          </ContactItem>
          <ContactItem icon={<PhoneIcon />}>
            (61) 3963-0030
          </ContactItem>
          <ContactItem icon={<MailIcon />}>
            contato@memora.com.br
          </ContactItem>
          
          {/* Redes sociais atualizadas com os seus links */}
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            {socialIcon('#1877F2', FacebookIcon, 'https://www.facebook.com/MEMORAVEL')}
            {socialIcon('#FF0000', YoutubeIcon, 'https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw')}
            {socialIcon('#0A66C2', LinkedInIcon, 'https://www.linkedin.com/company/memoraprocessos')}
            {socialIcon('#E1306C', InstagramIcon, 'https://www.instagram.com/memoraprocessosinovadores/')}
            {socialIcon('#25D366', PhoneIcon, 'https://wa.me/556139630030')}
          </div>
        </div>

        {/* Coluna 2 — Goiânia */}
        <div>
          <h4 style={{ color: '#fff', fontSize: 16, marginBottom: 20, fontWeight: 600 }}>Goiânia</h4>
          <ContactItem icon={<PinIcon />}>
            Av. Castelo Branco, 371, Edifício Lourenço Office, sala 2101 — 74.140-150, St. Oeste
          </ContactItem>
          <ContactItem icon={<PhoneIcon />}>
            (62) 99421-7576
          </ContactItem>
          <ContactItem icon={<MailIcon />}>
            contato@memora.com.br
          </ContactItem>
        </div>

        {/* Coluna 3 — Rio de Janeiro */}
        <div>
          <h4 style={{ color: '#fff', fontSize: 16, marginBottom: 20, fontWeight: 600 }}>Rio de Janeiro</h4>
          <ContactItem icon={<PinIcon />}>
            Rua Santa Luzia, 651 — Edifício Santos Dummont Office, 25º Andar, Coworking Town
          </ContactItem>
          <ContactItem icon={<PhoneIcon />}>
            (61) 3963-0030
          </ContactItem>
          <ContactItem icon={<MailIcon />}>
            contato@memora.com.br
          </ContactItem>
        </div>

      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 64px', fontSize: 13, color: '#888'
      }}>
        <p>Copyright © 2021-2026 MEMORA</p>
        <p style={{ cursor: 'pointer' }}>🔒 Política de privacidade</p>
      </div>
    </footer>
  );
}