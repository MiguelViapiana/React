import React from "react";
import ProdutoListar from "./components/pages/produto/produto-listar";
import CepConsultar from "./components/pages/cep/cep-consultar";
import ProdutoCadastar from "./components/pages/produto/produto-cadastrar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/produto/listar"}>Listar Produtos</Link>
            </li>
            <li>
              <Link to={"/pages/produto/cadastrar"}>Cadastrar Produtos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/pages/produto/listar" element={<ProdutoListar/>}/>
          <Route path="/pages/produto/cadastrar" element={<ProdutoCadastar/>} />
        </Routes>
        <footer>
          <p>Desenvolvido por Miguel Viapiana Jung</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
