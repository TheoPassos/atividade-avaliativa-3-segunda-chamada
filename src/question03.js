import leia from "readline-sync";

var numero = leia.question("Informe sua idade: ");

if (numero (12) > 0) {
    console.log("Você é uma criança");
} else if (numero (17) > 13) {
    console.log("Você é um adolescente");
} else if (numero (18) > 64) {
    console.log("Você é um adulto");
} else {
    console.log("Você é um idoso");
}