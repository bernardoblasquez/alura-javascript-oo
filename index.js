
class Cliente {
    nome;
    cpf;
   // conta;
}

class ContaCorrente{
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

        // retornar o valor de uma função ou método o quanto antes
        // - aumenta: legibilidade e performance
        // - facilita a manutenção 
        // - previne bugs

        // a melhoria da legibilidade ocorre porque passamos a evitar 
        // if aninhados que pioram muita a legibilidade do código
        
        // a performance melhora pois deixamos de perforrer uma série de ifs e elses ,
        // já que estamos retornando o mais rápido possível.
    }
}

const cliente01 = new Cliente();
cliente01.nome = "Ricardo";
cliente01.cpf = "13343545345";

const cliente02 = new Cliente();
cliente02.nome = "Alice";
cliente02.cpf = "123344221"

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo);


console.log(cliente01);
console.log(cliente02)