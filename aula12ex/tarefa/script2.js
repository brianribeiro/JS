    document.getElementById('foto').style.display = 'none'

function pronto() {
    var ano = document.getElementById('ano')
    var anos = ano.value
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')

    if (ano.value.length == 0) {
        alert('Verifique os dados e tente novamente.')
    } else if (ano.value < 1971 || ano.value > 2021) {
        alert('O Campeonato Brasileiro ocorreu entre 1971 e 2021!')
    } else if (ano.value == 1971 || ano.value == 2021) {
        //ATLÉTICO MINEIRO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/CAM.png'
        res.innerHTML = `Atlético Mineiro foi campeão em ${anos}!`
    } else if (ano.value == 1972 || ano.value == 1973 || ano.value == 1993 || ano.value == 1994 || ano.value == 2016 || ano.value == 2018) {
        //PALMEIRAS
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/PAL.png'
        res.innerHTML = `Palmeiras foi campeão em ${anos}!`
    } else if (ano.value == 1974 || ano.value == 1989 || ano.value == 1997 || ano.value == 2000) {
        //VASCO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/VAS.png'
        res.innerHTML = `Vasco foi campeão em ${anos}!`
    } else if (ano.value == 1975 || ano.value == 1976 || ano.value == 1979) {
        //INTERNACIONAL
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/INT.png'
        res.innerHTML = `Internacional foi campeão em ${anos}!`
    } else if (ano.value == 1977 || ano.value == 1986 || ano.value == 1991 || ano.value == 2006 || ano.value == 2007 || ano.value == 2008) {
        //SÃO PAULO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/SPO.png'
        res.innerHTML = `São Paulo foi campeão em ${anos}!`
    } else if (ano.value == 1978) {
        //GUARANI
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/GUA.png'
        res.innerHTML = `Guarani foi campeão em ${anos}!`
    } else if (ano.value == 1980 || ano.value == 1982 || ano.value == 1983 || ano.value == 1992 || ano.value == 2009 || ano.value == 2019 || ano.value == 2020) {
        //FLAMENGO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/FLA.png'
        res.innerHTML = `Flamengo foi campeão em ${anos}!`
    } else if (ano.value == 1981 || ano.value == 1996) {
        //GRÊMIO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/GRE.png'
        res.innerHTML = `Grêmio foi campeão em ${anos}!`
    } else if (ano.value == 1984 || ano.value == 2010 || ano.value == 2012) {
        //FLUMINENSE
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/FLU.png'
        res.innerHTML = `Fluminense foi campeão em ${anos}!`
    } else if (ano.value == 1985) {
        //CORITIBA
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/CTB.png'
        res.innerHTML = `Coritiba foi campeão em ${anos}!`
    } else if (ano.value == 1987) {
        //SPORT
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/SPT.png'
        res.innerHTML = `Sport foi campeão em ${anos}!`
    } else if (ano.value == 1988) {
        //BAHIA
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/BAH.png'
        res.innerHTML = `Bahia foi campeão em ${anos}!`
    } else if (ano.value == 1990 || ano.value == 1998 || ano.value == 1999 || ano.value == 2005 || ano.value == 2011 || ano.value == 2015 || ano.value == 2017) {
        //CORINTHIANS
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/COR.png'
        res.innerHTML = `Corinthians foi campeão em ${anos}!`
    } else if (ano.value == 1995) {
        //BOTAFOGO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/BOT.png'
        res.innerHTML = `Botafogo foi campeão em ${anos}!`
    } else if (ano.value == 2001) {
        //ATHLETICO PARANAENSE
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/CAP.png'
        res.innerHTML = `Athletico Paranaense foi campeão em ${anos}!`
    } else if (ano.value == 2002 || ano.value == 2004) {
        //SANTOS
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/SAN.png'
        res.innerHTML = `Santos foi campeão em ${anos}!`
    } else if (ano.value == 2003 || ano.value == 2013 || ano.value == 2014) {
        //CRUZEIRO
        document.getElementById('foto').style.display = 'block'
        document.getElementById('escudo').src = 'img/CRU.png'
        res.innerHTML = `Cruzeiro foi campeão em ${anos}!`
    }
}