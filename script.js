function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==  0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'foto/babymas.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'foto/kidsmas.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'foto/adol-mas.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'foto/jovem-mas.png')
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'foto/adulto-mas.png')
            } else if (idade < 60) {
                // terceira idade
                img.setAttribute('src', 'foto/3idade-mas.png')
            } else {
                img.setAttribute('src', 'foto/idoso-mas.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'foto/babyfem.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'foto/kidsfem.png')
            } else if (idade < 18) {
                // adolecente
                img.setAttribute('src', 'foto/adol-fem.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'foto/jovem-fem.png')
            } else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'foto/adulto-fem.png')
            } else if (idade < 60) {
                //terceita idade 
                img.setAttribute('src', 'foto/3idade-fem.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto/idoso-fem.png')
            }
            
        }
        res.style.textAlign ='center'
        res.innerHTML  = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
       }
    }