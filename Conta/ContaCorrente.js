import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    
    constructor(agencia, cliente){
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){

        let taxa = 1.1;
        return super._sacar(taxa, valor);
    }

    teste(){
        super.teste() // chamada de método da classe pai
        console.log("teste na classe ContaCorrente");
        
    }
}
// // early return;
// retornar o valor de uma função ou método o quanto antes
        // - aumenta: legibilidade e performance
        // - facilita a manutenção 
        // - previne bugs

        // a melhoria da legibilidade ocorre porque passamos a evitar 
        // if aninhados que pioram muita a legibilidade do código
        
        // a performance melhora pois deixamos de perforrer uma série de ifs e elses ,
        // já que estamos retornando o mais rápido possível.
        // ------- https://dorianneto.com.br/boas-praticas/torne-se-um-ninja-das-funcoes-com-early-return/


// EM javascript é possível inserir atributos em classes de forma dinâmica
