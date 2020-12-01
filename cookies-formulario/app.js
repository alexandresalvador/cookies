const url = `https://api.postmon.com.br/v1/cep/${zipcode}`;
const btnPesquisaCep = document.querySelector('#buttonPesquisa');

function buscarEndereco(cep) {
    fetch(url, cep)
        .then(data => {
            console.log(data);
        }).catch() => {
        console.log('error');
    });
}



// criar cookie

function setCookie(name, exdays)    //função universal para criar cookie
var expires;

var date;

var value;
date = new Date(); //  criando o COOKIE com a data atual
date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
expires = date.toUTCString();
value = "TESTE123";
document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
}

// mostrar cookie

function getCookie() {
    var c_name = document.cookie; // listando o nome de todos os cookies
    if (c_name != undefined && c_name.length > 0) // verificando se o mesmo existe
    {
        var posCookie = c_name.indexOf(cookieSeuNome); // checando se existe o cookieSeuNome 
        if (posCookie >= 0) //se existir o cookie mostra um alert no browser
        {
            alert("Cookie Existe!!!");
        }
        else
            alert("Cookie não existe!!!");
    }

    // excluir cookie

    function eraseCookie(name) {
        setCookie(name, -1); // deletando o cookie encontrado a partir do mostraCookie
    }