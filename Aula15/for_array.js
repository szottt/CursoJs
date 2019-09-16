let num = [5, 8, 4, 9]
num.push(1)

num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso Primeiro vetor é ${num[0]}`)
console.log(`O nosso vetor tem ${num.length}`)
console.log(num)

// for = para
for(let pos=0;pos<num.length;pos++){
    console.log(`Nosso ${pos+1}º vetor é ${num[pos]} na posicao ${pos}`)
}

// in = dentro ou em     
for(let pos in num ){
    console.log(`Nosso ${pos+1}º vetor é ${num[pos]} na posicao ${pos}`)
}