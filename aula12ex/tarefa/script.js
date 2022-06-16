function pronto() {
    var ano = document.getElementById('ano')
    var anos = ano.value
    var img = document.createElement('img')
    img.setAttribute('id', 'escudo')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')
    if (ano.value.length == 0) {
        alert('Verifique os dados e tente novamente.')
    } else if (ano.value < 1971 || ano.value > 2021) {
        alert('O Campeonato Brasileiro ocorreu entre 1971 e 2021!')
    } else if (ano.value == 1971 || ano.value == 2021) {
        //ATLÉTICO MINEIRO
        img.setAttribute('src', 'img/CAM.png')
        foto.appendChild(img)
        res.innerHTML = `Atlético Mineiro foi campeão em ${anos}!`
    } else if (ano.value == 1972 || ano.value == 1973 || ano.value == 1993 || ano.value == 1994 || ano.value == 2016 || ano.value == 2018) {
        //PALMEIRAS
        img.setAttribute('src', 'img/PAL.png')
        foto.appendChild(img)
        res.innerHTML = `Palmeiras foi campeão em ${anos}!`
    } else if (ano.value == 1974 || ano.value == 1989 || ano.value == 1997 || ano.value == 2000) {
        //VASCO
        img.setAttribute('src', 'img/VAS.png')
        foto.appendChild(img)
        res.innerHTML = `Vasco foi campeão em ${anos}!`
    } else if (ano.value == 1975 || ano.value == 1976 || ano.value == 1979) {
        //INTERNACIONAL
        img.setAttribute('src', 'img/INT.png')
        foto.appendChild(img)
        res.innerHTML = `Internacional foi campeão em ${anos}!`
    } else if (ano.value == 1977 || ano.value == 1986 || ano.value == 1991 || ano.value == 2006 || ano.value == 2007 || ano.value == 2008) {
        //SÃO PAULO
        img.setAttribute('src', 'img/SPO.png')
        foto.appendChild(img)
        res.innerHTML = `São Paulo foi campeão em ${anos}!`
    } else if (ano.value == 1978) {
        //GUARANI
        img.setAttribute('src', 'img/GUA.png')
        foto.appendChild(img)
        res.innerHTML = `Guarani foi campeão em ${anos}!`
    } else if (ano.value == 1980 || ano.value == 1982 || ano.value == 1983 || ano.value == 1992 || ano.value == 2009 || ano.value == 2019 || ano.value == 2020) {
        //FLAMENGO
        img.setAttribute('src', 'img/FLA.png')
        foto.appendChild(img)
        res.innerHTML = `Flamengo foi campeão em ${anos}!`
    } else if (ano.value == 1981 || ano.value == 1996) {
        //GRÊMIO
        img.setAttribute('src', 'img/GRE.png')
        foto.appendChild(img)
        res.innerHTML = `Grêmio foi campeão em ${anos}!`
    } else if (ano.value == 1984 || ano.value == 2010 || ano.value == 2012) {
        //FLUMINENSE
        img.setAttribute('src', 'img/FLU.png')
        foto.appendChild(img)
        res.innerHTML = `Fluminense foi campeão em ${anos}!`
    } else if (ano.value == 1985) {
        //CORITIBA
        img.setAttribute('src', 'img/CTB.png')
        foto.appendChild(img)
        res.innerHTML = `Coritiba foi campeão em ${anos}!`
    } else if (ano.value == 1987) {
        //SPORT
        img.setAttribute('src', 'img/SPT.png')
        foto.appendChild(img)
        res.innerHTML = `Sport foi campeão em ${anos}!`
    } else if (ano.value == 1988) {
        //BAHIA
        img.setAttribute('src', 'img/BAH.png')
        foto.appendChild(img)
        res.innerHTML = `Bahia foi campeão em ${anos}!`
    } else if (ano.value == 1990 || ano.value == 1998 || ano.value == 1999 || ano.value == 2005 || ano.value == 2011 || ano.value == 2015 || ano.value == 2017) {
        //CORINTHIANS
        img.setAttribute('src', 'img/COR.png')
        foto.appendChild(img)
        res.innerHTML = `Corinthians foi campeão em ${anos}!`
    } else if (ano.value == 1995) {
        //BOTAFOGO
        img.setAttribute('src', 'img/BOT.png')
        foto.appendChild(img)
        res.innerHTML = `Botafogo foi campeão em ${anos}!`
    } else if (ano.value == 2001) {
        //ATHLETICO PARANAENSE
        img.setAttribute('src', 'img/CAP.png')
        foto.appendChild(img)
        res.innerHTML = `Athletico Paranaense foi campeão em ${anos}!`
    } else if (ano.value == 2002 || ano.value == 2004) {
        //SANTOS
        img.setAttribute('src', 'img/SAN.png')
        foto.appendChild(img)
        res.innerHTML = `Santos foi campeão em ${anos}!`
    } else if (ano.value == 2003 || ano.value == 2013 || ano.value == 2014) {
        //CRUZEIRO
        img.setAttribute('src', 'img/CRU.png')
        foto.appendChild(img)
        res.innerHTML = `Cruzeiro foi campeão em ${anos}!`
    }
}