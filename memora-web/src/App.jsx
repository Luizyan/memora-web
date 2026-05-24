import { HashRouter, Routes, Route } from 'react-router-dom';

import { Header }  from './components/home/Header';
import { Hero }    from './components/home/Hero';
import { Stats }   from './components/home/Stats';
import { Footer }  from './components/home/Footer'; 
import { Jobs }    from './components/home/Jobs';
import { Clients } from './components/home/Clients';

import { VejaMais } from './PaginasRedirecionadas/HomeR/VejaMais';

import ClientsNav from './pages/ClientsNav';
import Blog       from './pages/Blog';
import Empresa    from './pages/Empresa';
import Solucoes   from './pages/Solucoes';
import Contatos   from './pages/Contatos';

// Importações com os caminhos corretos baseados na sua estrutura de pastas
import Vaga1 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga1';
import Vaga2 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga2';
import Vaga3 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga3';
import Vaga4 from './PaginasRedirecionadas/HomeR/PagesVagas/vaga4'; // Caminho com 'v' minúsculo conforme seu explorador
import Vaga5 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga5';

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
        <Route path="/vejamais" element={<VejaMais />}  /> 
        <Route path="/clientes" element={<ClientsNav />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/empresa"  element={<Empresa />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contatos" element={<Contatos />} />
        
        {/* Rotas das páginas de vagas */}
        <Route path="/vaga/1" element={<Vaga1 />} />
        <Route path="/vaga/2" element={<Vaga2 />} />
        <Route path="/vaga/3" element={<Vaga3 />} />
        <Route path="/vaga/4" element={<Vaga4 />} />
        <Route path="/vaga/5" element={<Vaga5 />} />

        <Route path="*"         element={<h1>404 – Página não encontrada</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;