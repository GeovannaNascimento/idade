/*
            Criança - até 11 anos de idade;
            Adolescente - dos 12 até 20 anos de idade;
            Adulto - dos 21 até 64 anos de idade;
            Idoso - 65 anos ou mais;
*/
var idade;
var resultado;
var nome;

function verificar(event) {
    event.preventDefault();

    idade = parseFloat(document.getElementById("idade").value);
    nome = (document.getElementById("nome")).value;

    resultado = document.getElementById("resultado");

    if (idade <= 11) {
        resultado.innerHTML = nome + "<br/> é " + "<br/> Criança";
    } else 
    
    if (idade >= 12 && idade <= 20) {
        resultado.innerHTML = nome + "<br/> é " + "<br/> Adolescente";
    } else 
    
    if (idade >= 21 && idade <= 64) {
        resultado.innerHTML = nome + "<br/> é " + "<br/> Adulto";
    } else 

    if (idade >= 65) {
        resultado.innerHTML = nome + "<br/> é " + "<br/> Idoso";
    } else 
    
    document.getElementById("idade").value = "";
}