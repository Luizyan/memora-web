import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        alert("Login realizado com sucesso!");

        window.location.href = "/#/admin";
      } else {
        alert(data.mensagem);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">
          Área Administrativa
        </h1>

        <p className="login-subtitle">
          Faça login para acessar o painel.
        </p>

        <form
          className="login-form"
          onSubmit={fazerLogin}
        >

          <div className="login-group">
            <label>Email</label>

            <input
              type="email"
              className="login-input"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-group">
            <label>Senha</label>

            <input
              type="password"
              className="login-input"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>

        </form>

      </div>
    </div>
  );
}