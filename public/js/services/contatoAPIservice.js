angular.module("listatelefonica").factory("contatosApI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl+"/contatos.html");;
    };
    return {
        getContatos: _getContatos
    };
});