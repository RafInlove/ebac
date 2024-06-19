//Elementos
const form = document.querySelector("#form-atividade");
const inputNomeAtividade = document.querySelector("#nome-atividade");
const inputNotaAtividade = document.querySelector("#nota-atividade");
const corpoTabela = document.querySelector('tbody');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
let linhas = '';
const atividades = [];
const notas = [];
let mediaFinalValor = document.querySelector("#media-final-valor");
let mediaFinalResultado = document.querySelector("#media-final-resultado");
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));
//Evento
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});
//Funções
function adicionaLinha() {
    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atiidade ${inputNomeAtividade.value} já foi inserida!`);
    }
    else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
        
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const media = calculaMedia();

    mediaFinalValor.innerHTML = media;
    mediaFinalResultado.innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}