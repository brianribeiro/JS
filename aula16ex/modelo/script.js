// Valor x adicionado
// Valor inválido ou já encontrado na lista
// Adicione valores antes de finalizar

let valor = document.getElementById('num')
let lista = document.getElementById('lista')
let resultado = document.getElementById('fim')
let dados = []

function add() {
    if (isNumber(valor.value) && !inList(valor.value, dados)) {
        let val = Number(valor.value)
        lista.innerHTML += `<option>Valor ${val} adicionado!</option>`
        dados.push(val)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    valor.value = ''
    valor.focus()
    resultado.innerHTML = ''
}

function isNumber(n) {
    if (valor.value >= 1 && valor.value <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function clearlist() {
    if (dados.length == 0) {
        alert('Não há valores para apagar.')
    } else {
        lista.innerHTML = ''
        resultado.innerHTML = ''
    }
}

function res() {
    if (dados.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = dados[0]
        let menor = dados[0]
        let soma = 0
        let média = 0
        for (let pos in dados) {
            soma += dados[pos]
            if (dados[pos] > maior)
            maior = dados[pos]
            if (dados[pos] < menor)
            menor = dados[pos]
        }

        resultado.innerHTML += 
        `
        <p>Ao todo, temos ${dados.length} números cadastrados!</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${soma/dados.length}.</p>
        `
    }
}

/*
//Somando os valores
function soma() {
    let soma = 0
    for(let i in dados) {
        soma += dados[i]
    }
    return soma
}
*/


/*
function add() {
    if (valor.value.length == 0) {
        alert('Adicione um número!')
    } else if (valor.value < 1 || valor.value > 100) {
        alert('Valor inválido, digite algum entre 1 e 100.')
    } else if (isNumber(valor.value) && !inLista(valor.value)) {
        alert('Valor já encontrado na lista.')
    } else {
        let val = Number(valor.value)
        resultado.innerHTML += `<option>Valor ${val} adicionado!</option>`
        dados.push(val)
    }
}

function res() {
    if (dados.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        dados.sort()
        finalizando.innerHTML += `<p>Ao todo, temos ${dados.length} números cadastrados.</p>`
        finalizando.innerHTML += `<p>O maior valor informado foi x</p>`
        finalizando.innerHTML += `<p>O menor valor informado foi ${dados[0]}</p>`
        finalizando.innerHTML += `<p>Somando todos os valores, temos x</p>`
        finalizando.innerHTML += `<p>A média dos valores digitados é x</p>`
    }
}
*/



// Ao todo, temos x números cadastrados

// O maior valor informado foi x

// O menor valor informado foi x

// Somando todos os valores, temos x

// A média dos valores digitados é x

// Ao adicionar mais um número os resultados acima desaparecem

