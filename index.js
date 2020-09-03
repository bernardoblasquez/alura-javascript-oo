import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 94666555);
console.log(diretor);
diretor.cadastrarSenha("12345");
const estaLogado = SistemaAutenticacao.login(diretor, "12345");
console.log(`diretor está logado: ${estaLogado}`);





const cliente = new Cliente("Alice", 55666867, "12345XX");
const estaLogado03 = SistemaAutenticacao.login(cliente, "12345XX");

console.log('');
console.log(cliente);
console.log(`cliente está logado: ${estaLogado03}`);






