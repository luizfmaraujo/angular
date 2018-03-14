angular.module('listatelefonica', []).controller('listacontrole', function ($scope, $http,contatosApI) {
    $scope.app = "luiz";
    contatosApI.getContatos().then(function (response) {
        $scope.contatos = [{ datacad: '24/02/2018', name: 'joao do celso', country: 'Norway' },
        { datacad: '24/04/2018', name: 'Jose da suzana', country: 'Sweden' },
        { datacad: '24/03/2018', name: 'Maria da Gloria', country: 'Denmark' }
        ];
    });

    $scope.idiomas = [
        { nome: "PT", lingua: "portugues" },
        { nome: "EN", lingua: "inglês" }
    ]
    $scope.adicionar = function (contato) {
        $scope.contatos.push(contato);
        delete $scope.contato;
    }
});