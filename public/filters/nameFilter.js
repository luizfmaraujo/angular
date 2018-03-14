angular.module('listatelefonica').filter('name',function(){
    return function (input){
        var listaDeNomes = input.split(" ");
        var listaNomeFormatada = listaDeNomes.map(function(nome){
            return nome.charAt(0).toUpperCase() + nome.substring(1);
        });
        return listaNomeFormatada.join(" ");
    };
});
