var pessoa = { 
    nome:"luiz",
    idade: 27
};
console.log(pessoa);
var Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

var carlos = new Pessoa("Carlos",26);
console.log(carlos);