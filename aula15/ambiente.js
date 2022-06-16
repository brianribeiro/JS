let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`O vetor é ${num}`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O segundo vetor tem valor ${num[1]}`)

let pos = num.indexOf(9)

if (pos == -1) {
    console.log(`O número pesquisado não existe`)
} else {
    console.log(`O número 8 está na posição ${pos}`)
}
