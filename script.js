let nomePrato, nomeBebida, nomeSobremesa, precoPrato, precoBebida, precoSobremesa, total, telaBranca;

function ajustarValor () {
   precoPrato = precoPrato.replace("R$ ", "");
   precoPrato = precoPrato.replace(",", ".");
   precoPrato = Number(precoPrato) * 100;
   precoBebida = precoBebida.replace("R$ ", "");
   precoBebida = precoBebida.replace(",", ".");
   precoBebida = Number(precoBebida) * 100;
   precoSobremesa = precoSobremesa.replace("R$ ", "");
   precoSobremesa = precoSobremesa.replace(",", ".");
   precoSobremesa = Number(precoSobremesa) * 100;

   total = (precoPrato + precoBebida + precoSobremesa) / 100;
}

function selecionarPrato (item) {
   const pratoClicado = document.querySelector(".prato.selecionado");
   if(pratoClicado !== null) {
    pratoClicado.classList.remove("selecionado");
   }

   item.classList.add("selecionado");
   ativarBotao ();
}

function selecionarBebida (item) {
    const bebidaClicada = document.querySelector(".bebida.selecionado");
    if(bebidaClicada !== null) {
     bebidaClicada.classList.remove("selecionado");
    }
 
    item.classList.add("selecionado");
    ativarBotao ();
 }

 function selecionarSobremesa (item) {
    const sobremesaClicada = document.querySelector(".sobremesa.selecionado");
    if(sobremesaClicada !== null) {
     sobremesaClicada.classList.remove("selecionado");
    }
 
    item.classList.add("selecionado");
    ativarBotao ();
 }

 function ativarBotao () {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if(pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        let botao = document.querySelector(".botao-pedir");
        botao.classList.add("ativar");
        botao.innerHTML = "<h1>Fechar pedido</h1>";
    }
 }

 function armazenarNome () {
   nomePrato = document.querySelector(".prato.selecionado :nth-child(2)").innerHTML;
   nomeBebida = document.querySelector(".bebida.selecionado :nth-child(2)").innerHTML;
   nomeSobremesa = document.querySelector(".sobremesa.selecionado :nth-child(2)").innerHTML;
 }

 function armazenarPreco () {
   precoPrato = document.querySelector(".prato.selecionado :nth-child(4)").innerHTML;
   precoBebida = document.querySelector(".bebida.selecionado :nth-child(4)").innerHTML;
   precoSobremesa = document.querySelector(".sobremesa.selecionado :nth-child(4)").innerHTML;
   ajustarValor ();
 }

 function finalizarPedido () {
   let mensagem = `
      Olá, gostaria de fazer o pedido:
      - Prato: ${nomePrato}
      - Bebida: ${nomeBebida}
      - Sobremesa: ${nomeSobremesa}
      Total: R$ ${total.toFixed(2)}
   `
   mensagem = encodeURIComponent(mensagem);
   window.open(`https://wa.me/667788991010?text=${mensagem}`)   
}

 function confirmarPedido () {
   armazenarNome ();
   armazenarPreco ();
   telaBranca = document.querySelector(".tela-branca");
   telaBranca.classList.remove("escondida");
   telaBranca.innerHTML = `
   <div class="caixa-confirmacao">
            <h1>Confirme seu pedido</h1>    
            <div class="confere prato">
                <h2>${nomePrato}</h2>
                <h2>${(precoPrato / 100).toFixed(2)}</h2>
            </div>
            <div class="confere bebida">
                <h2>${nomeBebida}</h2>
                <h2>${(precoBebida / 100).toFixed(2)}</h2>
            </div>
            <div class="confere sobremesa">
                <h2>${nomeSobremesa}</h2>
                <h2>${(precoSobremesa / 100).toFixed(2)}</h2>
            </div>
            <div class="confere total">
                <h1>TOTAL</h1>
                <h1>R$ ${total.toFixed(2)}</h1>
            </div>
            <div class="botao-confirmar" onclick="finalizarPedido()">
                <h3>Tudo certo, pode pedir!</h3>
            </div>
            <div class="botao-cancelar" onclick="cancelar()">
                <h1>Cancelar</h1>
            </div>
        </div>
        `
 }

 function cancelar () {
   telaBranca = document.querySelector(".tela-branca");
   telaBranca.classList.add("escondida");
 }