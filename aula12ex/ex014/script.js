function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 7 && hora <= 17) {
        //DIA
        img.src = 'img/dia.png'
        document.body.style.background = '#49acf1'
    } else if (hora == 6) {
        //AMANHECER
        img.src = 'img/amanhecer.png'
        document.body.style.background = '#ffcc56'
    } else if (hora == 18) {
        //ENTARDECER
        img.src = 'img/entardecer.png'
        document.body.style.background = '#f6a937'
    } else {
        //NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#062134'
    }
}
