import React from "react";
import { Button } from "../components/Button";

const Login = () => {
  return (
    <main className="grid lg:grid-cols-2 mx-5">
      <section className="lg:pl-16">
        <img src="#" alt="Logo-sou-junior-square" />
        <h1>Onde o Júnior tem vez!</h1>
        <Button background="outline" border="white">Saiba mais</Button>
      </section>

      <section>
        {/* aqui irá o login card */}
        <div>Login Card</div>
      </section>
    </main>
  );
};

export default Login;
