const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVISION) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
}

const fundamentos = () => {
    console.log('Fundamentos JS');

    /*Tipos de variables:
    var: Declaracion antigua, va quedando obsoleta
    let: Variables cambiantes
    const: Variables constantes
    */
    let arreglo = [1, 2, 3, 4, 5];

    console.log(arreglo);
    console.log('Texto de prueba');

    /*Arreglos*/
    const diasLaborables = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);
    console.log(diasLaborables[10]); /*En JS no existe el null pointer, se reemplaza por umdefined*/
    let valor = '';
    console.log(valor);

    diasLaborables.push('Sabado');
    diasLaborables.unshift('Dias: ');
    console.log(diasLaborables);

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    /*Sentencias de control*/
    for (const dia of diasLaborables) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin viernes');
        } else {
            console.log('Aun no es viernes');
        }

        if (dia !== 'Viernes') {
            console.log('Dia normal');
        } else {
            console.log('Dia de salida');
        }
    }

    /*Manejo de objetos*/
    const miProfesor = {
        nombre: 'Edgar',
        apellido: 'Tipan',
        edad: 23,
        genero: 'Masculino',
        ciudad: 'Quito'
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre); /*Se pueden acceder a los atributos de mi objeto*/
    miProfesor.apellido = 'Papu'; /*Seteo de atributos*/
    console.log(miProfesor);

    if (miProfesor.ciudad === 'Quito') {
        console.log('Es de la capital');
    }

    const estudiante1 = {
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 25,
        genero: 'Masculino',
        ciudad: 'Quito'
    }
    const estudiante2 = {
        nombre: 'Juan',
        apellido: 'Saenz',
        edad: 20,
        genero: 'Masculino',
        ciudad: 'Cuenca'
    }
    const estudiante3 = {
        nombre: 'Maria',
        apellido: 'Dolores',
        edad: 18,
        genero: 'Femenino',
        ciudad: 'Manabi'
    }

    const estudiantes = [estudiante1, estudiante2, estudiante3];
    console.log(estudiantes);
    console.table(estudiantes);
}