// Função para gerar letras aleatórias
function gerarLetraAleatoria() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letras[Math.floor(Math.random() * letras.length)];
}

// Função para gerar o caça-palavras
function gerarCacaPalavras(palavra, gridId) {
    const gridContainer = document.getElementById(gridId);
    const tamanhoGrid = 10;
    const grid = [];

    // Cria uma matriz vazia
    for (let i = 0; i < tamanhoGrid; i++) {
        grid[i] = [];
        for (let j = 0; j < tamanhoGrid; j++) {
            grid[i][j] = gerarLetraAleatoria();
        }
    }

    // Insere a palavra na matriz
    const startRow = Math.floor(Math.random() * tamanhoGrid);
    const startCol = Math.floor(Math.random() * (tamanhoGrid - palavra.length));

    for (let i = 0; i < palavra.length; i++) {
        grid[startRow][startCol + i] = palavra[i];
    }

    // Renderiza o grid no HTML
    gridContainer.innerHTML = '';
    for (let i = 0; i < tamanhoGrid; i++) {
        for (let j = 0; j < tamanhoGrid; j++) {
            const cell = document.createElement('div');
            cell.innerText = grid[i][j];
            cell.addEventListener('click', function() {
                this.style.backgroundColor = '#a0e7a0'; // Marca a letra clicada
            });
            gridContainer.appendChild(cell);
        }
    }
}

// Palavras a serem encontradas
const palavras = ['RAPOSA', 'BOCA', 'GATO', 'BANANA'];

// Atualiza os caça-palavras no HTML
const palavraElements = document.querySelectorAll('.palavra');
palavraElements.forEach((element, index) => {
    element.innerText = `Encontre a palavra: ${palavras[index]}`;
});

// Gera os caça-palavras
gerarCacaPalavras('RAPOSA', 'grid-container1');
gerarCacaPalavras('BOCA', 'grid-container2');
gerarCacaPalavras('GATO', 'grid-container3');
gerarCacaPalavras('BANANA', 'grid-container4');
