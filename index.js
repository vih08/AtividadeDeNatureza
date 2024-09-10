var foco = 7
var posicao = 12
var altura = 10
var p

if (foco > 0) {
    console.log("Espelho Côncavo")
} else if (foco == 0) {  
    console.log("Espelho plano")
} else if (foco < 0) {
    console.log("Espelho Convexo")
}

if (posicao > 0) {
    console.log("ok")
} else if (posicao <= 0) {
    console.log("Não pode")
}

if (altura > 0) {
    console.log("Objeto para cima")
} else if (altura == 0) { 
    console.log("Não Existe")
} else if (altura < 0) {
    console.log("Objeto para baixo")
}

if (posicao == foco) {
    console.log("Imagem imprópria")
}

p = (foco * posicao) / (posicao - foco)

if (p > 0) {
    console.log("Imagem real, fora do espelho")
} else if (p < 0) {
    console.log("Imagem virtual, dentro do espelho")
}
 
