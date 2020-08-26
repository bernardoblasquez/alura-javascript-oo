export class Cliente {
    nome;
    _cpf;
   // conta;

   constructor(nome, cpf){
       this.nome = nome;
       this._cpf = cpf;
   }

    get cpf(){
        return this._cpf
    }

}