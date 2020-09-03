/*
    Ser autenticável significa ter a propriedade Senha
*/

export class  SistemaAutenticacao{
    
    static login (funcionario, senha){
        console.log("valor de funcionario:", funcionario);
        console.log("valor do metodo funcionario.senha: " + funcionario.senha);
        return funcionario.senha == senha;
    }

    // nessa implementação, ao passar a classe cliente como atributo (funcionário)
    // e a senha igual ao definida em cliente o método login retornará FALSO 
    // ao invés de um erro, pois o atributo senha será criado em tempo de execução
    // 
}