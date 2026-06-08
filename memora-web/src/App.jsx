import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Header }  from './components/home/Header';
import { Hero }    from './components/home/Hero';
import { Stats }   from './components/home/Stats';
import { Footer }  from './components/home/Footer'; 
import { Jobs }    from './components/home/Jobs';
import { Clients } from './components/home/Clients';

import PrivateRoute from "./components/PrivateRoute";

import { VejaMais } from './PaginasRedirecionadas/HomeR/VejaMais';

import ClientsNav from './pages/ClientsNav';
import Blog       from './pages/Blog';
import Empresa    from './pages/Empresa';
import Solucoes   from './pages/Solucoes';
import Admin      from './pages/admin';
import Login      from "./pages/login";
import DetalheSolucao from "./pages/DetalheSolucao"; // <--- NOVA IMPORTAÇÃO DINÂMICA

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

import './App.css';

// COMPONENTE HOME CORRIGIDO COM TAILWIND
function Home() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 box-border">
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
      <div className="w-full min-h-screen overflow-x-hidden bg-white flex flex-col">
        <Header /> 
        
        <main className="w-full flex-grow">
          <Routes>
            {/* Rotas Principais */}
            <Route path="/"         element={<Home />} />
            <Route path="/vejamais" element={<VejaMais />}  /> 
            <Route path="/clientes" element={<ClientsNav />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/empresa"  element={<Empresa />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/admin"    element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="/login"    element={<Login />} />
            
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

            {/* ROTA ÚNICA E DINÂMICA DAS SOLUÇÕES (Substitui LerMais1 até LerMais9) */}
            <Route path="/solucao/:id" element={<DetalheSolucao />} />

          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;