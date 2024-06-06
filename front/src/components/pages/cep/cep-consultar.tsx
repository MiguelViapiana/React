import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";


function CepConsultar(){

    //Executar algum codigo no carregamneto do componente
    const[logradouro, setlogradouro] = useState("");
    const[bairro, setBairro] = useState("");
    const[uf, setUf] = useState("");
    const[localidade, setLocalidade] = useState("");
    const[cep, setCep] = useState("");
    useEffect(()=> { 
        

        console.log("O componente foi carregado!!");
        //carregarCep();

        
    }, []);

    function carregarCep(){
        
        //FETCH ou AXIOS
        fetch('http://localhost:5169/produtos/listar')
            .then((resposta)=> resposta.json())
            .then((endereco : Endereco) => {
                console.log(endereco.logradouro);
            setLocalidade(endereco.localidade);
            setBairro(endereco.bairro);
            setlogradouro(endereco.logradouro);
            setUf(endereco.uf);
            

        })
        ;
    }

    return(
        <div>
            <h1>Listar produtos</h1>

            <h1>Consultar CEP</h1>
            <input type="text" placeholder="Digite o CEP" onBlur={carregarCep} onChange={(e : any) => setCep(e.target.value)}/>
            <p>{logradouro}</p>
            <p>{bairro}</p>
            <p>{localidade}</p>
            <p>{uf}</p>

        </div>
    );
}
export default CepConsultar;

