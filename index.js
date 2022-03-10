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
        this.limpiar();
    }

    limpiar(){
        this.operandoActual = '';
        this.operandoPrevio = '';
        this.operacion = undefined;
    }

    borrar(){
        this.operandoActual = this.operandoActual.toString().slice(0, -1);
    }

    agregarNumero(numero){
        if(numero === '.' && this.operandoActual.includes('.')) return;
        this.operandoActual = this.operandoActual.toString() + numero.toString();
    }

    elegirOperacion(operacion){
        if(this.operandoActual === '') return;
        if(this.operandoPrevio !== ''){
            this.calcular();
        }
        this.operacion = operacion;
        this.operandoPrevio = this.operandoActual;
        this.operandoActual = '';
    }

    calcular(){
        let computar;
        const previo = parseFloat(this.operandoPrevio);
        const actual = parseFloat(this.operandoActual);
        if(isNaN(previo) || isNaN(actual)) return;
        switch (this.operacion){
            case '+':
                computar = previo + actual;
                break
            case '-':
                computar = previo - actual;
                break
            case '*':
                computar = previo * actual;
                break
            case '÷':
                computar = previo / actual;
                break
            default:
                return;        
        }
        this.operandoActual = computar;
        this.operacion = undefined;
        this.operandoPrevio = '';
        
    }

    mostrarComasNumero(numero){
        const numeroString = numero.toString();
        const digitoEntero = parseFloat(numeroString.split('.')[0]);
        const digitoDecimal = numeroString.split('.')[1];
        let digitoMostrado;
        if(isNaN(digitoEntero)){
            digitoMostrado = '';
        } else {
            digitoMostrado = digitoEntero.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if(digitoDecimal != null){
            return `${digitoMostrado}.${digitoDecimal}`;
        } else {
            return digitoMostrado;
        }
    }

    actualizarNumeros(){
        this.numActualIngresado.innerText = this.mostrarComasNumero(this.operandoActual);
        if(this.operacion != null){
            this.numPrevioIngresado.innerText = `${this.mostrarComasNumero(this.operandoPrevio)} ${this.operacion}`;
        } else {
            this.numPrevioIngresado.innerText = '';
        }
    }
}

const calculadora = new Calculadora(numPrevioIngresado, numActualIngresado);

numerosBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.agregarNumero(button.innerText);
        calculadora.actualizarNumeros();
    })
})

operadorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.elegirOperacion(button.innerText);
        calculadora.actualizarNumeros();
    })
})

igualBtn.addEventListener('click', () => {
    calculadora.calcular();
    calculadora.actualizarNumeros();
})

limpiarBtn.addEventListener('click', () => {
    calculadora.limpiar();
    calculadora.actualizarNumeros();
})

borrarBtn.addEventListener('click', () => {
    calculadora.borrar();
    calculadora.actualizarNumeros();
})

