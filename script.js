function selecionarPrato (item) {
   const pratoClicado = document.querySelector(".prato.selecionado");
   if(pratoClicado !== null) {
    pratoClicado.classList.remove("selecionado");
   }

   item.classList.add("selecionado");
   ativarBotao();
}

function selecionarBebida (item) {
    const bebidaClicada = document.querySelector(".bebida.selecionado");
    if(bebidaClicada !== null) {
     bebidaClicada.classList.remove("selecionado");
    }
 
    item.classList.add("selecionado");
    ativarBotao();
 }

 function selecionarSobremesa (item) {
    const sobremesaClicada = document.querySelector(".sobremesa.selecionado");
    if(sobremesaClicada !== null) {
     sobremesaClicada.classList.remove("selecionado");
    }
 
    item.classList.add("selecionado");
    ativarBotao();
 }

 function ativarBotao () {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if(pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        let botao = document.querySelector(".botao-pedir");
        botao.classList.add("pode-pedir");
        botao.innerHTML = "<h1>Fechar pedido</h1>";
    }
 }