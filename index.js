const numerosBtn = document.querySelectorAll('[data-numero]');
const operadorBtn = document.querySelectorAll('[data-operador]');
const igualBtn = document.querySelector('[data-igual]');
const limpiarBtn = document.querySelector('[data-limpiar-todo]');
const borrarBtn = document.querySelector('[data-borrar]');
const numPrevioIngresado = document.querySelector('[data-numero-previo]');
const numActualIngresado = document.querySelector('[data-numero-actual]');

class Calculadora{
    constructor(numPrevioIngresado, numActualIngresado){
        this.numPrevioIngresado = numPrevioIngresado;
        this.numActualIngresado = numActualIngresado;
    }

    limpiar(){

    }

    borrar(){

    }

    calcular(){

    }

    agregarNumero(numero){
        this.operandoActual = numero;
    }

    elegirOperacion(){

    }

    actualizarNumeros(){
        this.numActualIngresado.innerText = this.agregarNumero(this.operandoActual);
    }
}

const calculadora = new Calculadora(numPrevioIngresado, numActualIngresado);

numerosBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.agregarNumero(button.innerText);
        calculadora.actualizarNumeros();
    })
})
