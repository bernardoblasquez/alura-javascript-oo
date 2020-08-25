import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


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