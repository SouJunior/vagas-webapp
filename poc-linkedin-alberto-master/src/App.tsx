import "./App.css";
import { Button } from "./components/Button/styles";

function App() {
  return (
    <div className="App-wrapper">
      <header>Cabeçalho</header>
      <hr />
      <main>
        <p>No princípio...</p>
        <p>Não havia nada...</p>
        <p>Mas vai TER 🥳</p>
        <br />
        <Button>Primeiro componente</Button>
      </main>
      <hr />
      <footer>Rodapé</footer>
    </div>
  );
}

export default App;
