const getButton = document.querySelector('#button');
const getItemForShowResult = document.querySelector('#gerar');
const getButtonClear = document.querySelector('#clear');

getButton.addEventListener('click', () => {
    // Essa parte serve para adicionar e retirar classes
    getButton.classList.add('tirar');
    getButtonClear.classList.remove('limpar');
    const resultado = (getItemForShowResult.innerHTML); // pega a string(numeros contida nela) passada pelo usuario;
    
    getItemForShowResult.innerHTML = Number(eval(resultado)).toFixed(1); // vai servir para pegar a string contida na variavel e verifica a expressão numerica e depois calcula ela (o eval no caso)
});

getButtonClear.addEventListener('click', () => {
    // Essa parte serve também para retirar e adicionar classes
    getButton.classList.remove('tirar');
    getButtonClear.classList.add('limpar');
});

// Essa função serve para quando aperta o butão AC, retirar o texto da tela e deixa vazio a tela
getButtonClear.addEventListener('click', () => {
    getItemForShowResult.innerHTML = "";
});

// Essa função vai mostrar os valores dos botões apertados
function inserir(value) {
    getItemForShowResult.innerHTML += value;
}
