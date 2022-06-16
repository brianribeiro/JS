function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO]')
    } else {
        res.innerHTML = '<p>Contando: </p>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1.')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
            } //Contagem crescente
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            } //Contagem decrescente
        }
        res.innerHTML += `\u{1F3C1}`
    }
}