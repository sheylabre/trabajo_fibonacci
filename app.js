// ----------------------------------------------------------------------
// Ejercicio 01
function ejercicio01(x) {
    var y = new Array();

    for(var i = 1; i <= x; i++) {
        y.push(i);
    }

    return y;
}

var trigger01 = document.querySelector('#ejercicio01 .trigger'),
    input01 = document.querySelector('#ejercicio01 .input input'),
    output01 = document.querySelector('#ejercicio01 .output');

trigger01.addEventListener('click', function () {
    var x = parseInt(input01.value);
    var y = ejercicio01(x);
    output01.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 02
function ejercicio02(x) {
    var y = new Array();

    for(var i = x; i >= 1; i--) {
        y.push(i);
    }

    return y;
}

var trigger02 = document.querySelector('#ejercicio02 .trigger'),
    input02 = document.querySelector('#ejercicio02 .input input'),
    output02 = document.querySelector('#ejercicio02 .output');

trigger02.addEventListener('click', function () {
    var x = parseInt(input02.value);
    var y = ejercicio02(x);
    output02.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 03
function ejercicio03(x) {
    var y = new Array();

    for(var i = 2; i <= x; i+=2) {
        y.push(i);
    }

    return y;
}

var trigger03 = document.querySelector('#ejercicio03 .trigger'),
    input03 = document.querySelector('#ejercicio03 .input input'),
    output03 = document.querySelector('#ejercicio03 .output');

trigger03.addEventListener('click', function () {
    var x = parseInt(input03.value);
    var y = ejercicio03(x);
    output03.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 04
function ejercicio04(x) {
    var y = new Array();

    for(var i = 1; i <= x; i+=2) {
        y.push(i);
    }

    return y;
}

var trigger04 = document.querySelector('#ejercicio04 .trigger'),
    input04 = document.querySelector('#ejercicio04 .input input'),
    output04 = document.querySelector('#ejercicio04 .output');

trigger04.addEventListener('click', function () {
    var x = parseInt(input04.value);
    var y = ejercicio04(x);
    output04.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 05
function isPrime(x) {
    if(x == 2){
        return true;
    }

    y = Math.sqrt(x) + 1; // raiz cuadrada, modulo Math

    for(var i = 2; i <= y; i ++) {
        if(x%i == 0) {
            return false;
        }
    }

    return true;
}

function ejercicio05(x) {
    var y = new Array();

    for(var i = 1; i <= x; i++) {
        if( isPrime(i) ){
            y.push(i);
        }
    }

    return y;
}

var trigger05 = document.querySelector('#ejercicio05 .trigger'),
    input05 = document.querySelector('#ejercicio05 .input input'),
    output05 = document.querySelector('#ejercicio05 .output');

trigger05.addEventListener('click', function () {
    var x = parseInt(input05.value);
    var y = ejercicio05(x);
    output05.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 06
//
// Sucesion de Fibonnaci:
//  0, 1, 1, 2, 3, 5, 8, 13, ...
//  a_n = a_(n-1) + a_(n-2)
//
function fibonacci(x) {
    if(x == 0 || x == 1){
        return x;
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}

function ejercicio06(x) {
    var y = new Array();

    for(var i = 0; i <= x; i++) {
        y.push(fibonacci(i));
    }

    return y;
}

var trigger06 = document.querySelector('#ejercicio06 .trigger'),
    input06 = document.querySelector('#ejercicio06 .input input'),
    output06 = document.querySelector('#ejercicio06 .output');

trigger06.addEventListener('click', function () {
    var x = parseInt(input06.value);
    var y = ejercicio06(x);
    output06.textContent = y;
})

// ----------------------------------------------------------------------
// Ejercicio 07
//
// Sucesion de Fibonnaci:
//  0, 1, 1, 2, 3, 5, 8, 13, ...
//  a_n = a_(n-1) + a_(n-2)
//
function graphLine(x) {
    line = "";

    for(var i = 1; i <= x; i++){
        line = line.concat("*");
    }

    line = line.concat("<br/>");
    return line;
}

function ejercicio07(x) {
    var y = "";

    for(var i = 0; i <= x; i++) {
        y = y.concat(graphLine(i));
    }

    return y;
}

var trigger07 = document.querySelector('#ejercicio07 .trigger'),
    input07 = document.querySelector('#ejercicio07 .input input'),
    output07 = document.querySelector('#ejercicio07 .output');

trigger07.addEventListener('click', function () {
    var x = parseInt(input07.value);
    var y = ejercicio07(x);
    output07.html = y;
})

