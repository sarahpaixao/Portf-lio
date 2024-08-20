var bebidas = 2;
var valor;

switch(bebidas){
    case 1:
        console.log("cafe")
        valor = 5.0;
        break;

    case 2:
        console.log("leite")
        valor = 4.5;
        break;

    case 3:
        console.log("chá")
        valor = 3.5;
        break;

    default:
        console.log("Essa opção não existe")

}

if (valor != null){
    console.log("O valor total é R$ " + valor.toFixed(2));
}