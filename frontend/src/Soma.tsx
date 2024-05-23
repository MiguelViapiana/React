import { useState } from "react";

function Soma(){

    const [contador, setContador] = useState(0);
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [res, setRes] = useState(0);

    function incrementarContador(){
        setContador(contador +1);
        console.log(contador);
    }

    function clicar(){
        setRes(parseFloat(numero1)+ parseFloat(numero2));
        
    }

    function escreverNumero1(e : any){
        setNumero1(e.target.value);

    }
    function escreverNumero2(e : any){
        setNumero2(e.target.value);

    }

    return(
        <div>
            <h1>Soma: </h1>
            <label htmlFor="num1">Número 1: </label>
            <input type="text" onChange={(e : any) => setNumero1(e.target.value)}/>
            <label htmlFor="num2" >Número 2: </label>
            <input type="text" onChange={escreverNumero2}/>
            <button onClick={clicar}>Calcular</button>
            <button onClick={incrementarContador}>Contador</button>
            <p>
                Contador: { contador }
            </p>
            <p>
                Resultado: {res}
            </p>
        </div>
    );
}
export default Soma;