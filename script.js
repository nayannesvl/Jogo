const imagem = document.querySelector('img');
const input = document.querySelector('input');
const botao = document.querySelector('button');
const pontuacaoContainer = document.querySelector('.pontuacao-container');
const pontuacao = document.querySelector('#pontuacao');
const campoErro = document.querySelector('#campo-erro');

let pontos = 0;
let nomeDoPersonagem;

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () =>{
    let numeroAleatorio = gerarValorAleatorio(); 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data)=> {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem = data.name;
    });
}

Jogar = () => {
    pegarPersonagem();
    pontuacaoContainer.style.display = 'flex';
    botao.innerHTML = 'jogar';
    input.style.opacity = 1;
    nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
    let nomeDigitado = input.value.toLowerCase();

    if(nomeDoPersonagem == nomeDigitado){
        pontos = pontos+1;
    }else{
        campoErro.innerHTML = `Você errou. O nome era ${nomeDoPersonagem}`;
    }
    pontuacao.innerHTML = pontos;
}
botao.onclick = Jogar;


