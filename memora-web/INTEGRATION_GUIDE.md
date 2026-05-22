# Guia de Integração da Memora Web

## 📋 Índice
- [Configuração do Ambiente](#configuração-do-ambiente)
- [API Configuration](#api-configuration)
- [Social Media Links](#social-media-links)
- [Rodando o Projeto](#rodando-o-projeto)
- [Endpoints Disponíveis](#endpoints-disponíveis)

## 🔧 Configuração do Ambiente

### Frontend (React + Vite)

1. **Copiar arquivo de configuração**:
   ```bash
   cp memora-web/.env.example memora-web/.env.local
   ```

2. **Editar `.env.local`** para definir a URL da API:
   ```env
   VITE_API_URL=http://localhost:8080
   ```

   Para produção:
   ```env
   VITE_API_URL=https://api.memora.com.br
   ```

3. **Instalar dependências**:
   ```bash
   cd memora-web
   npm install
   ```

4. **Rodar em desenvolvimento**:
   ```bash
   npm run dev
   ```

### Backend (Spring Boot)

1. **Configurar banco de dados** em `memora-server/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/memora_sql
   spring.datasource.username=root
   spring.datasource.password=sua_senha
   ```

2. **Construir o projeto**:
   ```bash
   cd memora-server
   ./mvnw clean install
   ```

3. **Rodar o servidor**:
   ```bash
   ./mvnw spring-boot:run
   ```

   O servidor estará disponível em: `http://localhost:8080`

## 🔌 API Configuration

A configuração centralizada da API está em `src/config/api.js` e fornece os seguintes helpers:

### `postRequest(endpoint, data)`
Realiza uma requisição POST para a API.

**Exemplo**:
```javascript
import { postRequest } from '../config/api';

const enviarContato = async () => {
  try {
    const response = await postRequest('/api/cadastrar', {
      nome: 'João Silva',
      email: 'joao@example.com',
      mensagem: 'Olá, gostaria de saber mais'
    });
    console.log('Sucesso:', response);
  } catch (error) {
    console.error('Erro:', error.message);
  }
};
```

### `getRequest(endpoint)`
Realiza uma requisição GET para a API.

```javascript
import { getRequest } from '../config/api';

const listarContatos = async () => {
  try {
    const contacts = await getRequest('/api/listar');
    console.log('Contatos:', contacts);
  } catch (error) {
    console.error('Erro:', error.message);
  }
};
```

### `putRequest(endpoint, data)`
Realiza uma requisição PUT para a API.

```javascript
import { putRequest } from '../config/api';

const atualizarContato = async () => {
  try {
    const response = await putRequest('/api/alterar', {
      id: 1,
      nome: 'João Silva Atualizado'
    });
    console.log('Sucesso:', response);
  } catch (error) {
    console.error('Erro:', error.message);
  }
};
```

### `deleteRequest(endpoint)`
Realiza uma requisição DELETE para a API.

```javascript
import { deleteRequest } from '../config/api';

const removerContato = async (id) => {
  try {
    const response = await deleteRequest(`/api/remover/${id}`);
    console.log('Sucesso:', response.mensagem);
  } catch (error) {
    console.error('Erro:', error.message);
  }
};
```

## 🌐 Social Media Links

Os links das redes sociais estão centralizados em `src/config/socialLinks.js`:

### Redes Sociais Disponíveis
- **Facebook**: https://www.facebook.com/MEMORAVEL
- **YouTube**: https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw
- **Instagram**: https://www.instagram.com/memoraprocessosinovadores/
- **LinkedIn**: https://www.linkedin.com/company/memoraprocessos

### Usando os Links nos Componentes

```javascript
import { getSocialLinksArray, getSocialLink } from '../config/socialLinks';

// Obter todos os links
const allLinks = getSocialLinksArray();
allLinks.forEach(link => {
  console.log(`${link.name}: ${link.url}`);
});

// Obter um link específico
const facebookLink = getSocialLink('facebook');
console.log(facebookLink.url);

// Verificar se um link existe
if (getSocialLink('instagram')) {
  console.log('Instagram está configurado');
}
```

## 🚀 Rodando o Projeto

### Desenvolvimento Local

1. **Terminal 1 - Backend**:
   ```bash
   cd memora-server
   ./mvnw spring-boot:run
   ```

2. **Terminal 2 - Frontend**:
   ```bash
   cd memora-web
   npm run dev
   ```

3. **Acessar a aplicação**:
   ```
   http://localhost:5173
   ```

### Produção

1. **Compilar o Frontend**:
   ```bash
   cd memora-web
   npm run build
   ```

2. **Deploy do Backend**:
   ```bash
   cd memora-server
   java -jar target/memora-server-0.0.1-SNAPSHOT.jar
   ```

## 📡 Endpoints Disponíveis

### Contatos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/cadastrar` | Criar novo contato |
| GET | `/api/listar` | Listar todos os contatos |
| PUT | `/api/alterar` | Atualizar um contato |
| DELETE | `/api/remover/{id}` | Remover um contato |

### Exemplo de Resposta

**POST `/api/cadastrar`**:
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@example.com",
  "mensagem": "Olá, gostaria de saber mais"
}
```

**GET `/api/listar`**:
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@example.com",
    "mensagem": "Olá, gostaria de saber mais"
  }
]
```

## ⚠️ Troubleshooting

### "Erro ao conectar com o servidor"
- Verifique se o backend está rodando em `http://localhost:8080`
- Confira a URL em `.env.local`
- Verifique os logs do Spring Boot

### "CORS Error"
- O backend já está configurado com `@CrossOrigin(origins = "*")`
- Se ainda assim tiver problemas, verifique se o método está sendo chamado corretamente

### Validação de Formulário
- **Nome vazio**: "vc nao digitou o seu nome"
- **Mensagem vazia**: "vc nao escreveu sua mensaem"
- **Email vazio**: "vc não digitou seu Email"

## 📚 Estrutura do Projeto

```
memora-web/
├── memora-web/          # Frontend React + Vite
│   ├── src/
│   │   ├── config/      # Configurações (api.js, socialLinks.js)
│   │   ├── pages/       # Páginas
│   │   ├── components/  # Componentes
│   │   └── App.jsx
│   └── package.json
├── memora-server/       # Backend Spring Boot
│   ├── src/main/java/com/squad7/memora_server/
│   │   ├── Controller/  # APIs REST
│   │   ├── Service/     # Lógica de negócios
│   │   ├── Model/       # Entidades
│   │   └── Repository/  # Acesso a dados
│   ├── pom.xml
│   └── src/main/resources/application.properties
```

## 🔐 Variáveis de Ambiente

### Frontend
- `VITE_API_URL` - URL base da API (padrão: http://localhost:8080)

### Backend
- `spring.datasource.url` - URL do banco de dados MySQL
- `spring.datasource.username` - Usuário do banco de dados
- `spring.datasource.password` - Senha do banco de dados

## 📞 Suporte

Para mais informações, verifique:
- Documentação do Spring Boot: https://spring.io/projects/spring-boot
- Documentação do React: https://react.dev
- Documentação do Vite: https://vitejs.dev
