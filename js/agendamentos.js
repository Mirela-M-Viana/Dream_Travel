//Código para calcular uma linha
            // let mult_qtd_passagem = document.querySelector(".qtd").textContent * document.querySelector(".valor-passagem").textContent
            // let valorHotel = parseInt(document.querySelector(".valor-hotel").textContent)
            // document.querySelector(".valor-total").textContent = mult_qtd_passagem + valorHotel

            //Captura todas as encomendas para calcular o total
            var clientes = document.querySelectorAll(".cliente");

    for (var count = 0; count < clientes.length; count++) {
        // Captura o cliente atual
        var clientesGeral = clientes[count];

        // Captura a quantidade de passagens
        var qtdPassagem = parseInt(clientesGeral.querySelector(".qtd").textContent);

        // Captura o valor da passagem
        var valorPassagem = parseInt(clientesGeral.querySelector(".valor-passagem").textContent);

        // Captura o valor do hotel
        var valorHotel = parseInt(clientesGeral.querySelector(".valor-hotel").textContent);



        //Validação
        if(qtdPassagem < 1 || isNaN(qtdPassagem)){
            clientesGeral.querySelector(".qtd").textContent = "Quantidade inválida"
            clientesGeral.querySelector(".qtd").style.color= "red";
        }else {
            //calcula o valor total
            clientesGeral.querySelector(".valor-total").textContent = calcularTotal(qtdPassagem,valorPassagem,valorHotel);

            clientesGeral.querySelector(".valor-hotel", ".valor-passagem").textContent = parseFloat(valorHotel, valorPassagem).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }


    }

    //FUNÇÃO
function calcularTotal(qtdPassagem_agendamento, valorPassagem_agendamento, valorHotel_agendamento){
        var total = 0

        total = (qtdPassagem_agendamento * valorPassagem_agendamento) + valorHotel_agendamento;

        return total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
}