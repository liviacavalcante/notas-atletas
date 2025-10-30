let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(objetoAtletas) {
    for (let i = 0; i < objetoAtletas.length; i++){
        
        let atleta = objetoAtletas[i];
        let notas = atleta.notas;

        console.log("Atletas: " + atleta.nome);
        console.log("Notas Obtidas: " + notas.join(","));

        notas = notas.sort(function(a, b){
            return a - b;
        });

        let notasComputadas = notas.slice(1, 4);

        let soma = 0;
        notasComputadas.forEach(function(nota){
            soma = soma + nota;
        });

        let media = soma / notasComputadas.length;

        console.log("Média válida: " + media);
        console.log("");

    }
}

calcularMedia(atletas)