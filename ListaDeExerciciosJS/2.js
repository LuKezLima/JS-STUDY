function categoriaTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("O triangulo é equilátero")
    } else if (a == b || a == c || b == c) {
        console.log('O triangulo é isósceles')
    }
    else {
        console.log('O triangulo é Escaleno')
    }
}

categoriaTriangulo(2, 2, 2)


function categoriaTrian(a, b, c) {
    switch (a, b, c) {
        case a == b && b == c:
            console.log("O triangulo é equilátero")
            break;
        case a == b || a == c || b == c:
            console.log("O triangulo é isósceles")
            break;
        case a != b && b != c:
            console.log("O triangulo é escaleno")
            break;
    }
}

categoriaTrian(1, 2, 3)