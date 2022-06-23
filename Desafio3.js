//MINHA TENTATIVA
//Estou tendo um pouco de dificuldade, pois estou pensando de forma errada eu acho, pois estou com medo de 
//fazer o codigo do 0 e fico tentando apenas tirar ou colocar coisas no código que já existe.
/*let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('saldo') as HTMLInputElement;

campoSaldo.innerHTML = 0

function somarAoSaldo(soma:number):number | string {
    return campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    return campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    if(typeof soma === 'number')
    return somarAoSaldo(soma);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});*/
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
