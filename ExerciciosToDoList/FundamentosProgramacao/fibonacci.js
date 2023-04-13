const ress = document.querySelector(".ress");
const numeroUsuario = parseInt(prompt("Informe ate onde quer ir no fibonacci:"));

function fibonacci(numero) {
    let num0 = -1;
    let num1 = 1;
    ress.innerHTML = `Fibonacci: `;
    for (let i = -1; i < numero; i++) {
        let atual = num0 + num1;
        num0 = num1;
        num1 = atual;
        ress.innerHTML += `${atual}, `;
    }
}

console.log(fibonacci(numeroUsuario));