/* 
Objetivo: quando clicar na aba, tem que mostrar o conteúdo da aba clicada
e esconder o conteúdo da aba anterior.

*/

// passo 1 - pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // passo 2 - identificar o clique no elemento aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacao(aba);
    })
})

function selecionarAba(aba){
     // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
     const abaSelecionada = document.querySelector(".aba.selecionado");
     abaSelecionada.classList.remove("selecionado");

     // passo 4 - marcar a aba clicada como selecionada
     aba.classList.add("selecionado");
}

function mostrarInformacao(aba){
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}