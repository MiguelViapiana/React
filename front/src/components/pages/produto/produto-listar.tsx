import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";
import { Produto } from "../../../models/Produto";
import axios from "axios";

function ProdutoListar() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    console.log("Carregou componente");

    fetch("http://localhost:5169/produtos/listar")
      .then((resposta) => resposta.json())
      .then((produtos: Produto[]) => {
        setProdutos(produtos);
      });
  }, []);

  function deletar(id: string){
    axios.delete(`http://localhost:5169/produtos/deletar/${id}`)
        .then(resposta => {
            console.log(resposta);
            //setProdutos(resposta.data);
        });
  }

  return (
    <div>
      <h1>Listar produtos</h1>
      <table border={5}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Criado Em</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.valor}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.criadoEm}</td>
              <td>
                <button onClick={() => {deletar(produto.id!)}}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProdutoListar;
