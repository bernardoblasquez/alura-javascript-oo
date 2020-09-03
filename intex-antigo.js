import {Cliente} from "./Conta/Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";


const cliente01 = new Cliente("Ricardo", "13343545345");
const contaCorrenteRicardo = new ContaCorrente(1001, cliente01);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(contaCorrenteRicardo, "\n");

const contaPoupanca = new ContaPoupanca(50, cliente01, 1001);
contaPoupanca.depositar(400);
contaPoupanca.sacar(100);
contaPoupanca.teste();
console.log(contaPoupanca);

const contaSalario = new ContaSalario(50, cliente01, 1001);
console.log(contaSalario);
contaSalario.sacar(10);

//const contaPai = new Conta(50, cliente01, 1001);