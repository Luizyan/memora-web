# 🌐 Memora Web

Site institucional da **Memora Processos Inovadores** com painel administrativo integrado para gestão autônoma de conteúdo.

---

## 🧩 Sobre o Projeto

O Memora Web é o site institucional da empresa, desenvolvido com foco em performance e autonomia para o time administrativo. A plataforma conta com uma interface protegida por autenticação, permitindo que administradores gerenciem conteúdos sem depender de desenvolvedores.

### Funcionalidades disponíveis para administradores

- 📢 Gerenciar notícias na seção **Na Mídia**
- ✍️ Criar, editar e excluir postagens no **Blog**
- 💼 Adicionar e atualizar vagas em **Trabalhe Conosco**
- 👥 Gerenciar a página de **Clientes**
- 📄 Atualizar outros conteúdos conforme necessário

---

## 🚀 Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|------------|
| Frontend | React + Vite + JSX |
| Backend | Node.js + Express |
| Banco de Dados | MySQL |
| Autenticação | JWT (JSON Web Token) |

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- MySQL rodando localmente
- npm ou yarn

---

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/memora-web.git
cd memora-web
```

---

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta do backend com as seguintes variáveis:

```env
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=seu_banco
JWT_SECRET=sua_chave_secreta
```

---

### 3. Inicie o Backend

```bash
cd backend
npm install
node src/app.js
```

> Servidor rodando em `http://localhost:5000`

---

### 4. Inicie o Frontend

```bash
cd frontend
npm install
npm run dev
```

> Acesse em `http://localhost:5173`

---

## 🔒 Autenticação

O painel administrativo é protegido por **JWT**. Apenas usuários com credenciais válidas têm acesso. O token é gerado no login e validado a cada requisição protegida.

---

## 💡 Benefícios

- ✅ Autonomia para o time administrativo
- ✅ Interface intuitiva e segura
- ✅ Atualizações em tempo real no site
- ✅ Menos dependência de desenvolvedores para conteúdo

---

## 📄 Licença

Projeto de uso interno da **Memora Processos Inovadores**.
