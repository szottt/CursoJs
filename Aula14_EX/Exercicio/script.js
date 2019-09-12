function Contador(){

    let ini = window.document.querySelector('input#num1')
    let fim = window.document.querySelector('input#num2')
    let passo = window.document.querySelector('input#num3')
    let res = window.document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Conta!'
       //window.alert('Faltam Dados [ERRO!]')
        
    }else{
        res.innerHTML = `Contando: <br>` 
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                //Contagem Crescente
                res.innerHTML += ` ${c} \u{1F449} `
            }
            
        }else{
            for(let c = i; c >= f; c -= p){
                //Contagem Recurssiva
                res.innerHTML += `${c} \u{1f449}` 
            }
        }
        res.innerHTML += `\u{1f3c1}`
        
        
    }




}    


/*site para emojis
    https://unicode.org/emoji/charts/full-emoji-list.html
*/