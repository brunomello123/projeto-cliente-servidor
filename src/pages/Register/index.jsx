import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import utfprIMG from "../../assets/UtfprLogo.svg";

export const Register = () => {
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  return (
    <LayoutComponents >
      <form className="login-form">
      
      <span className="login-form-title">
          <img src={utfprIMG} alt="Jovem Programador" />
        </span>

        <span className="login-form-title"> Criar Conta </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={cpf !== "" ? "has-val input" : "input"}
            type="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Cpf"></span>
        </div>

        <div className="wrap-input">
          <input
            className={telefone !== "" ? "has-val input" : "input"}
            type="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Telefone"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Cpf e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}