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
import AdminBlog  from './pages/adminBlog';
import { AdminVagas } from './pages/AdminVagas';
import Login      from "./pages/login";
import DetalheSolucao from "./pages/DetalheSolucao"; 
import PostInterno    from "./PaginasRedirecionadas/BlogR/PostInterno"; 

import './App.css';

// COMPONENTE HOME CORRIGIDO COM TAILWIND
function Home() {
  return (
    <>
    <Hero />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 box-border">
        
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
      <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
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
            <Route path="/login"    element={<Login />} />
            
            {/* PAINÉIS ADMINISTRATIVOS PROTEGIDOS */}
            <Route path="/admin"      element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="/adminblog"  element={<PrivateRoute><AdminBlog /></PrivateRoute>} />
            <Route path="/adminvagas" element={<PrivateRoute><AdminVagas /></PrivateRoute>} /> 
            
            <Route path="/blog/:id" element={<PostInterno />} /> 

            {/* ROTA ÚNICA E DINÂMICA DAS SOLUÇÕES */}
            <Route path="/solucao/:id" element={<DetalheSolucao />} />

          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;