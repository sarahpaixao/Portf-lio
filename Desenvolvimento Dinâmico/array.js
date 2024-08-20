var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("array invertido: " + valores.reverse());

for(var pos = 0 ; pos < valores.length; pos++){
    console.log("posição:  " + pos + " valor  " + valores[pos]);
}

//calcular a média de todos os números de um array

var soma = 0
for (var pos = 0 ; pos < valores.length; pos++){
    soma  += valores[pos];

}

var media = soma/valores.length;

console.log(media);

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join( ' | ' ));
console.log(arr1.join( '  ' ));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);


var arr2 = [1,2,3,4,5,6,7];
arr2.splice(1,1);
console.log(arr2);

var arr3 = [1,2,3,4,5,6,7];
arr3.splice(2,2)
console.log(arr3);


var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1,1, "Luiz");
console.log(nomes);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1,2, "Luiz","Ronaldo");
console.log(nomes);

var país = ["Brasil", "Argentina", "Colômbia"];
país.unshift("Uruguai")
console.log(país)


var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["davi","Manuela"]
var pessoas1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);
console.log(empresa)
