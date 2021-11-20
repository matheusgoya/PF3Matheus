let calcular = document.getElementById('calcular');


function pace () {
    let nome = document.getElementById('nome').value;
    let RendaMensal = parseFloat(document.getElementById('RendaMensal').value);
    let Parcelas = parseFloat(document.getElementById('Parcelas').value);
    let jurosBanco = parseFloat(document.getElementById('jurosBanco').value/100);
    let resultado = document.getElementById('resultado');

    if (nome !== '' && RendaMensal !== '' && Parcelas !== '') {
        let PMT = (RendaMensal*((((1+ jurosBanco)**Parcelas) - 1) / jurosBanco)).toFixed(2);
        var CalculoPorcentagem = (jurosBanco * 100);
        resultado.style.color = "white";
        resultado.textContent = `Olá ${nome}! Poupando R$
         ${RendaMensal} por ${Parcelas} meses, com o juros de ${CalculoPorcentagem}%, você irá ter um valor futuro poupado de R$ ${PMT} por mês. `;
    }
    else
    {
        resultado.textContent = `Para calcular o resultado, preencha todos os campos em branco!`;

    }

}

calcular.addEventListener('click', pace);
       
        
        

        
        