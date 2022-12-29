let numeroMultiplo4 = 0
for (numeroMultiplo4; numeroMultiplo4 <= 45; numeroMultiplo4++) {
    if(numeroMultiplo4 % 4 === 0) {
        console.log(numeroMultiplo4)
    }
}


// let numerosPar_0_50 = 0
// for ( numerosPar_0_50; numerosPar_0_50 <= 50; numerosPar_0_50+=2) {
//     console.log(numerosPar_0_50)
// }
let numeroMultiplo4 = 0
for (numeroMultiplo4; numeroMultiplo4 <= 45; numeroMultiplo4++) {
    if(numeroMultiplo4 % 4 === 0) {
        console.log(numeroMultiplo4)
    }
}
// }
}
let numero1 = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro numero"))


if (numero1 === numero2) {
    console.log("Los numeros son iguales")
} else if (numero1 < numero2) {
    for(let i = numero1; i < numero2; i++) {
        console.log(i)
    }
} else if (numero1 > numero2) {
    for(let i = numero1; i > numero2; i--) {
        console.log(i)
    }
}
