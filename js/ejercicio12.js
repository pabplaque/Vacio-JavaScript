/**
 * Ejercicio 12. Calculadora JavaScript
 * Autor: 
 */

/**
 * Implementa el Menú 1: Sumar
 * @author: Pablo Plaza
 * @return suma
 */
function menu1()
{
    // Implemente la opción de la calculadora que permite sumar.
    console.info("Suma:");
    let sumando1=parseInt(prompt("Introduzca el primer sumando: ",0));
    let sumando2=parseInt(prompt("Introduzca el segundo sumando: ",0));
    let resultado=sumando1+sumando2;
    console.log("El resultado de la suma "+sumando1+" + "+sumando2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 2: Restar
 * @author: Pablo Plaza
 * @return resta
 */
function menu2()
{
    // Implemente la opción de la calculadora que permite restar.
    console.info("Resta:");    
    // IMPLEMENTA TU CÓDIGO AQUÍ
    let minuendo=parseInt(prompt("Introduzca el minuendo: ",0));
    let sustraendo=parseInt(prompt("Introduzca el sustraendo: ",0));
    let resultado=minuendo-sustraendo;
    console.log("El resultado de la resta "+minuendo+" - "+sustraendo+" es "+resultado);
    return resultado;
}
/**
 * Implementa el Menú 3: Multiplicar
 * @author: Coloca tu nombre aquí.
 * @return multiplicación
 */
function menu3()
{
    // Implemente la opción de la calculadora que permite multiplicar.
    console.info("Multiplica:");
    let num1=parseInt(prompt("Introduzca el primer número: ",0));
    let num2=parseInt(prompt("Introduzca el segundo número: ",0));
    let resultado=num1*num2;
    console.log("El resultado de la multiplicación "+num1+" x "+num2+" es "+resultado);
    return resultado;
    
    
}

/**
 * Implementa el Menú 4: Dividir
 * @author: Coloca tu nombre aquí.
 * @return división
 */
function menu4()
{
    // Implemente la opción de la calculadora que permite dividir.
    console.info("Divide:");
    let dividendo=parseInt(prompt("Introduzca el dividendo: ",0));
    let divisor=parseInt(prompt("Introduzca el divisor: ",0));
    let resultado=dividendo/divisor;
    console.log("El resultado de la división "+dividendo+" : "+divisor+" es "+resultado);
    return resultado;

}

/**
 * Menú Aplicación Calculadora
 * @author: José Gaspar Sánchez García.
 */
function appMenu()
{
    let opcion=-1;
    do{
        console.log("\n*** CALCULADORA ***\n");
        console.log("Menú:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");
        opcion=parseInt(prompt("Introduzca opción: "));

        switch(opcion)
        {
            case 1: {menu1();break;}
            case 2: {menu2();break;}
            case 3: {menu3();break;}
            case 4: {menu4();break;}
            case 0: {console.info("Saliendo aplicación calculadora.");break;}
            default: {console.error("Error: Opción "+opcion+" incorrecta."); break;}
        }

    }while(opcion!=0)
}