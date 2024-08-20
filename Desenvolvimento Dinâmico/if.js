var pais = "Brasil";
if(pais != "Brasil"){
    console.log("você é estrangeiro")
}else {
    console.log("você é brasileiro")
}

//exemplo2
var idade = 22;
if(idade < 16){
    console.log("você não vota")
}else if (idade < 18 || idade > 65){
    console.log("voto opcional")
}else{
    console.log("voto obrigatório")
}