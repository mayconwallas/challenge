const numero = parseInt(prompt("Informe um numero"));

function fatorial(numero) {
    let numeroFinal = numero;
    for(let i = numero -1; i > 0; i--) {
        numeroFinal *= i;
        console.log(numeroFinal);
        console.log(i);
    }
    return numeroFinal;
}
console.log(fatorial(numero));
