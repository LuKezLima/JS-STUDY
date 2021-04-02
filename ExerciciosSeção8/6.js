function inverso(valor) {
    if (typeof valor === "boolean") {
        console.log(!valor)
    } else if (typeof valor === "number") {
        console.log(-valor)
    } else {
        console.log(`booleano ou números esperado, mas o parametro é do tipo ${typeof valor}`)
    }
}

inverso(false)
inverso(2000)
inverso("Programação")