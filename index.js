import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente01 = new Cliente("Ricardo", "13343545345");
const contaCorrenteRicardo = new ContaCorrente(1001, cliente01);
contaCorrenteRicardo.saldo = 100;


const cliente02 = new Cliente("Alice", "123344221");
const contaCorrenteAlice = new ContaCorrente(102, cliente02);
contaCorrenteAlice.saldo = 500;


console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

console.log("------------------ transferencia ---------------------")

contaCorrenteAlice.transferir(50, contaCorrenteRicardo);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);