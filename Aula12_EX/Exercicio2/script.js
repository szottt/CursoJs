function Verificar(){
        var data = new Date()
        var ano = data.getUTCFullYear()
        var fano = window.document.getElementById('txtano')
        var res = window.document.querySelector('div#res')

        if(fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('ERRO')
        }else{
            var fsex = document.getElementsByName('radsext')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

            if (fsex[0].checked){
                //genero = 'Homem'
                if(idade >= 0 && idade <10){
                    //Criança

                    genero = 'Criança'
                    img.setAttribute('src', 'HomemCrianca.jpg')

                }else if( idade < 21){
                    //Jovem
                    genero = 'Adolescente'
                    img.setAttribute('src', 'HomemAdolescente.jpg')

                }else if(idade >= 21 && idade < 50){
                    //Adulto
                    genero = 'Adulto'
                    img.setAttribute('src', 'HomemAdulto.jpg')

                }else{
                    //Idoso
                    genero = 'Idoso'
                    img.setAttribute('src', 'HomemVelho.jpg')

                }
            }else if(fsex[1].checked ){
                //genero = 'Mulher'
                if(idade >= 0 && idade <10){
                    //Criança
                    genero = 'Criança'
                    img.setAttribute('src', 'MulherCrianca.jpg')

                }else if( idade < 21){
                    //Jovem
                    genero = 'Adolescente'
                    img.setAttribute('src', 'MulherAdolescente.jpg')

                }else if(idade >= 21 && idade < 50){
                    //Adulto
                    genero = 'Adulta'
                    img.setAttribute('src', 'MulherAdulta.jpg')

                }else{
                    //Idoso
                    genero = 'Idosa'
                    img.setAttribute('src', 'MulherVelha.jpg')
                    
                }
            }

            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }

   
}