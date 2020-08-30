
export class Conta{

    constructor(saldoInicial, agencia, cliente){
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
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

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
        
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