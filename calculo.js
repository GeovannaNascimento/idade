/*
            Criança - até 11 anos de idade;
            Adolescente - dos 12 até 20 anos de idade;
            Adulto - dos 21 até 64 anos de idade;
            Idoso - 65 anos ou mais;
*/

var idade = parseFloat(document.getElementById("idade").value);
var resultado = document.getElementById("resultado");
var nome = document.getElementById("nome").value;


function verificar(event) {
    event.preventDefault();

    resultado = "(DIGITE UMA IDADE VÁLIDA)";

    if (idade <= 11) {
        resultado = "Criança";
    } else 
    
    if (idade >= 12 && idade <= 20) {
        resultado = "Adolescente";
    } else 
    
    if (idade >= 21 && idade <= 64) {
        resultado = "Adulto";
    } else 

    if (idade >= 65) {
        resultado = "Idoso";
    } else 
    
    document.getElementById("resultado").innerHTML = nome + " é " + resultado;

}