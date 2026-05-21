import { HashRouter, Routes, Route } from 'react-router-dom';

import { Header }  from './components/home/Header';
import { Hero }    from './components/home/Hero';
import { Stats }   from './components/home/Stats';
import { Footer }  from './components/home/Footer';
import { Jobs }    from './components/home/Jobs';
import { Clients } from './components/home/Clients';

import ClientsNav from './pages/ClientsNav';
import Blog       from './pages/Blog';
import Empresa    from './pages/Empresa';
import Solucoes   from './pages/Solucoes';
import Contatos   from './pages/Contatos';

import './App.css';

function Home() {
  return (
    <div className="container">
      <Hero />
      <Stats />
      <Clients />
      <Jobs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/clientes" element={<ClientsNav />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/empresa"  element={<Empresa />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*"         element={<h1>404 – Página não encontrada</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;