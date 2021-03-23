function soBoanoticia(nota) {
    if (nota >= 7) {
        console.log('Parabens! sua nota foi ' + nota)
    }
}

soBoanoticia(7)
soBoanoticia(5)

function seForVerdade(valor) {
    if (valor) {
        console.log('é verdade... ' + valor)
    }

}

seForVerdade(true)
seForVerdade(1)
seForVerdade(0)
seForVerdade(null)
seForVerdade(undefined)