function criaCartao(categoria, pergunta, resposta) {

}
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    let respostaEstaVisivel = false
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
    </div> container.appendChild(cartao)
    </div>

let respostaEstaVisivel = false

function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
 cartao.classList.toggle('active', respostaEstaVisivel)
    }
     container.appendChild(cartao)

     cartao.addEventListener('click', viraCartao) 
     {
     }
