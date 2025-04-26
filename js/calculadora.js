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
    console.log(diasLaborables[10]); /*En JS no existe el null pointer, se reemplaza por undefined*/
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

    const ciudadano = {
        nombre: 'Edgar',
        apellido: 'Tipan',
        direccion: {
            callePrincipal: 'Av. America',
            calleSecundaria: 'Av. La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'Frente al Dilipa'
            }
        }
    }
    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    ciudadano.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano);

    const estudiantes2 = [{ nombre: 'Carla', apellido: 'Castillo' }, { nombre: 'Viviana', apellido: 'Paez' }];
    console.log(estudiantes2);
    console.log(estudiantes2[1].apellido);

    /*Desestructuración de arreglos*/
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [c1, c2, c3, c4, c5] = colores; /*Desestructuramos otorgando un alias*/
    console.log(c1);
    console.log(c5);

    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);

    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    desestructuracionArreglo(colores); /*Se puede desestructurar cualquier variable que se sepa que es un arreglo*/

    const [, p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);/*Conclusion: La desestructuracion de un objeto se la hace a traves de sus posiciones*/

    /*Desestructuracion por operador REST:
    Desestructura un arreglo, eligiendo lo que queremos conservar*/
    console.log('Desestructuracion por operador REST:')
    const[p1,...resto] = desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);

    /*Desestructuración de objetos*/
    const auto = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2020,
        color: 'Amarillo'
    }

    const { marca, color, anio } = auto; /*las posiciones no importan*/
    console.log(color);

    const { anio1 } = {
        marca1: 'Toyota',
        modelo1: 'Prius',
        anio1: 2020,
        color1: 'Amarillo'
    }
    console.log(anio1);

    desestructuracionObjeto(auto);/*Se pueden desestructurar objetos que entran como variables*/

    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombreR: 'Daniel',
            apellidoR: 'Teran'
        }
    }
    const { rector, nombreR } = universidad;
    console.log(rector);
    const { apellidoR } = rector;
    console.log(apellidoR);

    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Daniel',
            apellidoR2: 'Teran'
        }
    }
    const { nombre2, rector2: { nombreR2 } } = universidad2;
    console.log(nombreR2);

    /*Desestructuracion por operador REST para objetos:*/
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'Prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }
    const{marcaR,...restoO} = autoR;
    console.log(marcaR);
    console.log(restoO)
}

function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores;
}

function desestructuracionObjeto({ marca, color }) {
    console.log(marca);
    console.log(color);
}