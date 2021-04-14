const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numero) {
    if (x == 5) {
        break
    }
    console.log(x, numero[x])
}


for (y in numero) {
    if (y == 5) {
        continue // IGNORA O INDICE 5, PULA O INDICE E CONTINUA
    }
    console.log(y, numero[y])
}


externo: for (a in numero) {
    for (b in numero) {
        if (a == 2 && b == 3) break externo
        console.log(b,a)
    }
}