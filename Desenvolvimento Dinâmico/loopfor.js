var a = [10,20,30,40,50,60]


//opcao 1
for (let valor of a){
    console.log(valor)
}

//opcao 2
a.forEach(valor => console.log(valor))


var tot = 0;
a.forEach(valor => {
    tot += valor;
})
console.log(tot)