function Contador(){

    var tn1 = window.document.querySelector('input#num1')
    var tn2 = window.document.querySelector('input#num2')
    var ResSoma = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2 

    ResSoma .innerHTML = `O RESULTADO DA SOMA DE ${n1} + ${n2} É ${s}`

/*
    var data = new Date()
    var hora = data.getHours()

    var hora = 22

    msg.innerHTML = `Agora sao ${hora} horas.`

    

    if(hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = '#bfbdb8'
    }else if(hora >= 12 && hora <= 18){
        img.src = "tarde.png"
        document.body.style.background = '#e27e17'
    }else{
        img.src = "noite.png"
        document.body.style.background = '#131f2b'
    }
*/
}