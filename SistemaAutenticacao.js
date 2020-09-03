/*
    Ser autenticável significa ter a o método senha
*/

export class  SistemaAutenticacao{
    
    static login (autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}

// a mudança da implementação passa para o objeto passado pelo atributo
// 'atenticável' a responsabilidade de ser eutenticável. Dessa forma tanto 
// Cliente quanto funcionário e seus fihos serão autenticáveis somente se
// possuirem o atributo "autentica". Caso não possuam um erro é retornado


/*
    --- Na implementação abaixo ser autenticável significa ter a PROPRIEDADE 'senha'

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
*/