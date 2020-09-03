export class  SistemaAutenticacao{
    
    static login (funcionario, senha){
        console.log("valor de funcionario:", funcionario)
        console.log("valor do metodo funcionario.senha: " + funcionario.senha)
        return funcionario.senha == senha;
    }
}