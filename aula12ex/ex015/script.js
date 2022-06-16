function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade <= 2) {
                //bebe
                img.setAttribute('src', 'img/h_bebe.png')
            } else if (idade <= 12) {
                //criança
                img.setAttribute('src', 'img/h_crianca.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'img/h_jovem.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'img/h_adulto.png')
            } else if (idade <= 110) {
                //idoso
                img.setAttribute('src', 'img/h_idoso.png')
            } else {
                //morto
                img.setAttribute('src', 'img/morte.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade <= 2) {
                //bebe
                img.setAttribute('src', 'img/m_bebe.png')
            } else if (idade <= 12) {
                //criança
                img.setAttribute('src', 'img/m_crianca.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'img/m_jovem.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'img/m_adulta.png')
            } else if (idade <=110) {
                //idoso
                img.setAttribute('src', 'img/m_idosa.png')
            } else {
                //morto
                img.setAttribute('src', 'img/morte.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        if (idade > 110) {
            res.innerHTML = `A pessoa tem ${idade} anos e provavelmente já morreu.`
        }
        res.appendChild(img)
    }
}