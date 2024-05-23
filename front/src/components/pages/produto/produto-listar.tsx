import { useEffect } from "react";

function ProdutoListar(){

    //consultar os pordutos da API e exibir na tela
    //- Resolver o problema de CORS (API)
    // Como exibir um array na tela utilizando REACT

    //Executar algum codigo no carregamneto do componente
    useEffect(()=> { 
        console.log("O componente foi carregado!!");

        //FETCH ou AXIOS
        fetch('https://viacep.com.br/ws/80540010/json/')
            .then((resposta)=> resposta.json())
            .then((cep) => {
                console.log(cep.cep);
            });
    }, []);

    return(
        <div>
            <h1>Listar produtos</h1>
        </div>
    );
}
export default ProdutoListar;

