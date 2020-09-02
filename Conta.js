
export class Conta{

    constructor(saldoInicial, agencia, cliente){
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;

        console.log(this.constructor);

        if(this.constructor == Conta){
            throw new Error("Vc não deveria instaciar um objeto do tipo conta diretamente, pois ela é uma classe abstrata")
        }
    }

    set cliente(novoValor){
        
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    // Método Abstrato
    sacar(valor){
       throw new Error("o metodo sacar de Conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa*valor
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if (valor <= 0) return // early return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("teste na classe Conta");
        
    }
}

// --- Classe abstrata ---
// Uma classe que nunca deve ser instanciada diretamente. 
// Ela é um molde para classes filhas

// Classes abstratas são pensadas de forma que elas apenas possam ser 
// herdadas por outras.

// Métodos abstratos devem ser sobrescritos pelas classes filhas.
