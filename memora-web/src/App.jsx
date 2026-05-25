import React from "react";
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

// IMPORTAÇÕES DOS BLOGS INDIVIDUAIS (BlogPages)
import Blog1 from './PaginasRedirecionadas/BlogR/BlogPages/Blog1';
import Blog2 from './PaginasRedirecionadas/BlogR/BlogPages/Blog2';
import Blog3 from './PaginasRedirecionadas/BlogR/BlogPages/Blog3';
import Blog4 from './PaginasRedirecionadas/BlogR/BlogPages/Blog4';
import Blog5 from './PaginasRedirecionadas/BlogR/BlogPages/Blog5';
import Blog6 from './PaginasRedirecionadas/BlogR/BlogPages/Blog6';

// IMPORTAÇÕES DAS VAGAS (PagesVagas)
import Vaga1 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga1';
import Vaga2 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga2';
import Vaga3 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga3';
import Vaga4 from './PaginasRedirecionadas/HomeR/PagesVagas/vaga4'; 
import Vaga5 from './PaginasRedirecionadas/HomeR/PagesVagas/Vaga5';

// IMPORTAÇÕES DAS SOLUÇÕES (PagesSolucoes)
import LerMais1 from "./PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais1";
import LerMais2 from "./PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais2";
import LerMais3 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais3';
import LerMais4 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais4';
import LerMais5 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais5';
import LerMais6 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais6';
import LerMais7 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais7';
import LerMais8 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais8';
import LerMais9 from './PaginasRedirecionadas/SolucoesR/PagesSolucoes/LerMais9';

import './App.css';

// COMPONENTE HOME CORRIGIDO
function Home() {
  return (
    <>
      {/* O conteúdo da página mantém a estrutura e os limites originais */}
      <div className="container">
        <Hero />
        <Stats />
        <Clients />
      </div>
      
      <Jobs />
      <Footer /> 
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Header /> 
      <Routes>
        {/* Rotas Principais */}
        <Route path="/"         element={<Home />} />
        <Route path="/vejamais" element={<VejaMais />}  /> 
        <Route path="/clientes" element={<ClientsNav />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/empresa"  element={<Empresa />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contatos" element={<Contatos />} />
        
        {/* ROTAS INDIVIDUAIS DOS BLOGS */}
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/blog/5" element={<Blog5 />} />
        <Route path="/blog/6" element={<Blog6 />} />
        
        {/* ROTAS DAS VAGAS */}
        <Route path="/vaga/1" element={<Vaga1 />} />
        <Route path="/vaga/2" element={<Vaga2 />} />
        <Route path="/vaga/3" element={<Vaga3 />} />
        <Route path="/vaga/4" element={<Vaga4 />} />
        <Route path="/vaga/5" element={<Vaga5 />} />

        {/* ROTAS DAS SOLUÇÕES (LER MAIS) */}
        <Route path="/solucao/1" element={<LerMais1 />} />
        <Route path="/solucao/2" element={<LerMais2 />} /> 
        <Route path="/solucao/3" element={<LerMais3 />} />
        <Route path="/solucao/4" element={<LerMais4 />} />
        <Route path="/solucao/5" element={<LerMais5 />} />
        <Route path="/solucao/6" element={<LerMais6 />} />
        <Route path="/solucao/7" element={<LerMais7 />} />
        <Route path="/solucao/8" element={<LerMais8 />} />
        <Route path="/solucao/9" element={<LerMais9 />} />

        {/* Rota Fallback para erro 404 */}
        <Route path="*"         element={<h1>404 – Página não encontrada</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;