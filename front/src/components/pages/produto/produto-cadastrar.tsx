import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { useNavigate } from "react-router-dom";

function ProdutoCadastar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  function cadastrarProduto(e: any) {
    e.preventDefault();

    const produto: Produto = {
      nome: nome,
      descricao: descricao,
      quantidade: quantidade,
      valor: valor,
    };

    fetch("http://localhost:5169/produtos/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => resposta.json())
      .then((produto: Produto) => {
        setNome("");
        navigate("/pages/produto/listar");
      });
  }
  return (
    <div>
      <h1>Cadastar Produto</h1>
      <form onSubmit={cadastrarProduto}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(e: any) => setDescricao(e.target.value)}
          required
        />
        <label>Quantidade:</label>
        <input
          type="text"
          onChange={(e: any) => setQuantidade(e.target.value)}
          required
        />
        <label>Valor:</label>
        <input
          type="text"
          onChange={(e: any) => setValor(e.target.value)}
          required
        />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProdutoCadastar;
