const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

function atualizarEstadoSetas() {
    setaVoltar.classList.toggle('desabilitar', imagemAtual === 0);
    setaAvancar.classList.toggle('desabilitar', imagemAtual === imagens.length - 1);
}

setaAvancar.addEventListener('click', function () {
    if (imagemAtual !== imagens.length - 1) {
        imagemAtual++;        
    }

    esconderImagens();
    mostrarImagem();
    atualizarEstadoSetas();
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--;
    }

    esconderImagens();
    mostrarImagem();
    atualizarEstadoSetas();
})
