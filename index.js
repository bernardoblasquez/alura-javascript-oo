import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente01 = new Cliente("Ricardo", "13343545345");
const contaCorrenteRicardo = new ContaCorrente(1001, cliente01);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(contaCorrenteRicardo);

const contaPoupanca = new ContaPoupanca(50, cliente01, 1001);
contaPoupanca.depositar(400);
contaPoupanca.sacar(100);
contaPoupanca.teste();

console.log(contaPoupanca);


