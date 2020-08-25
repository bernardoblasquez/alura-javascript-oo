export class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        } 
    }

    depositar(valor){
        if (valor <= 0) return // early return;
        this.saldo += valor;
    }
}


// retornar o valor de uma função ou método o quanto antes
        // - aumenta: legibilidade e performance
        // - facilita a manutenção 
        // - previne bugs

        // a melhoria da legibilidade ocorre porque passamos a evitar 
        // if aninhados que pioram muita a legibilidade do código
        
        // a performance melhora pois deixamos de perforrer uma série de ifs e elses ,
        // já que estamos retornando o mais rápido possível.
        // ------- https://dorianneto.com.br/boas-praticas/torne-se-um-ninja-das-funcoes-com-early-return/