function verificar(){
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    if (fano.value.lenght == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './images/foto-bebe-m.png')
            }else if ( idade < 21){
                img.setAttribute('src', './images/foto-jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src', './images/foto-adulto-m.png')
            }else {
                img.setAttribute('src', './images/foto-idoso-m.png')
            }


        } else if (fsex[1].checked){
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './images/foto-bebe-f.png')
            }else if ( idade < 21){
                img.setAttribute('src', './images/foto-jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src', './images/foto-adulto-f.png')
            }else {
                img.setAttribute('src', './images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}