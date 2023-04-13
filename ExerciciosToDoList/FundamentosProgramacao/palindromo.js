const palavra = prompt("informe uma palavra para verificicarmos:")

function revertePalavra(palavra) {
    let palavraArr = palavra.toUpperCase();
    palavraArr = palavraArr.split("");
    let palavraArrInvertida = palavraArr.reverse();
    palavraArrInvertida = palavraArrInvertida.join('');
    return palavraArrInvertida;
}
// console.log(revertePalavra(palavra)); ate aqui OK
const palavraInvertida = revertePalavra(palavra);
// console.log(`A palavra intertida fica asssim ${palavraInvertida}`); ate aqui OK

function verificaPalindromo(palavra, palavraParaComparar) {
    let palavraUper = palavra.toUpperCase();
    // console.log(palavraUper, palavraParaComparar);
    if(palavraUper == palavraParaComparar){
        let palavraJaComapara = palavraParaComparar.toLowerCase();
        let palavraComparadaFinal = palavraJaComapara[0].toUpperCase() + palavraJaComapara.substring(1);
    //console.log(palavraLow, palavraJaComapara); ate aqui OK
       return `Sua palavra é um palíndromo, palavra na onrdem inversa fica assim: ${palavraComparadaFinal}`
    } else {
        return `Não é palíndromo.`;
    }
}
const resposta = verificaPalindromo(palavra, palavraInvertida)
// finalizado tudo ok
console.log(resposta);