function tabuada() {
    var valor = document.getElementById('valor')
    var tab = document.getElementById('seltab')

    if (valor.value.length == 0) {
        alert('Por favor, digite um número válido.')
    } else {
        let n = Number(valor.value)
        c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }   
}