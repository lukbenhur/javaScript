let contadorWrapper = document.getElementById("currentNumber");
var heading = document.getElementsByTagName('h1')[0];
heading.style.color = 'white';
let numero = 0;

function increment() {
    if (numero >= 10) {
        alert("quantidade max permitida 10");
    } else {
        numero += 1;
        contadorWrapper.innerHTML = numero;
        switch (numero) {
            default:
                document.getElementsByTagName('h1')[0].style.color = 'green';
                break;
            case 7:
                document.getElementsByTagName('h1')[0].style.color = 'yellow';
                break;
            case 8:
                document.getElementsByTagName('h1')[0].style.color = 'orange';
                break;
            case 9:
                document.getElementsByTagName('h1')[0].style.color = 'brown';
                break;
            case 10:
                document.getElementsByTagName('h1')[0].style.color = 'red'
                break;
        }

    }

}

function decrement() {
    if (numero <= 0) {
        alert("nao é possivel numeros negativos");
    } else {
        numero -= 1;
        contadorWrapper.innerHTML = numero;
        console.log(numero);
    }
    switch (numero) {
        default:
            var heading = document.getElementsByTagName('h1')[0];
            heading.style.color = 'green';
            break;
        case 7:
            var heading = document.getElementsByTagName('h1')[0];
            heading.style.color = 'yellow';
            break;
        case 8:
            var heading = document.getElementsByTagName('h1')[0];
            heading.style.color = 'orange';
            break;
        case 9:
            var heading = document.getElementsByTagName('h1')[0];
            heading.style.color = 'brown';
            break;
        case 10:
            var heading = document.getElementsByTagName('h1')[0];
            heading.style.color = 'red';
            break;
    }
}

