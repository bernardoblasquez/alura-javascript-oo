import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente01 = new Cliente("Ricardo", "13343545345");
const contaCorrenteRicardo = new ContaCorrente(1001, cliente01);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente01, 1001);



console.log(contaPoupanca);
console.log(contaCorrenteRicardo);

