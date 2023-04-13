//recebendo e guardando o numero do usuario
const numeroIP = parseInt(prompt("Informe um numero Interiro Positivo"));

//verificação de numero interiro positivo
if (numeroIP == parseInt(numeroIP)) {
    console.log(parseInt(numeroIP));
} else {
    alert("Verifique se o numero digitado é Inteiro e positivo e retorne a operação.")
}

function somaIP(numero) {
    let numeroFinal = 0;
    for(let i = 0; i < numeroIP + 1; i++) {
        numeroFinal += i;
    }
    return numeroFinal;
}
console.log(somaIP(numeroIP));
