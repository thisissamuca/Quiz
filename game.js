var perguntasFeitas = []

// Perguntas do jogo

var perguntas = [

    // 1

    { pergunta: "Qual característica abaixo não pertence ao relevo planície?",

      respostas: ['Áreas planas', 'Baixa altitude', 'Regiões não propensas a cursos de água', 'Próximas à planaltos', 'Recebem grande quantidade de sedimentos'],

      acerto: "resp2"

    },

    // 2

    { pergunta: "O que áreas vegetais não são capazes de influenciar em fatores climáticos e geográficos?",

      respostas: ['Conter raios solares', 'Elevar a umidade relativa do ar', 'Aumentar o índice de precipitação', 'Segurar sedimentos', 'Conter a erosão pluvial e fluvial'],

      acerto: "resp3"

    },

    // 3
    
    { pergunta: "Quais os pares de características que uma montanha geralmente apresenta?",

      respostas: ['Alta altitude e vegetação coberta', 'Paisagem acidentada e tendência à vulcanismo', 'Cume bem definido e proximidade com   corpos de água', 'Baixa altitude e próximas à morros', 'Paisagem glacial e alta altitude'],

      acerto: "resp1"

    },

]

var qtdPerguntas = perguntas.length - 1

gerarPergunta(qtdPerguntas)

function gerarPergunta(maxPerguntas) {

    // Gerar um número aleatório

    let aleatorio = Number((Math.random() * maxPerguntas).toFixed())

    // Verificar se a pergunta foi feita

    if (!perguntasFeitas.includes(aleatorio)) {

        perguntasFeitas.push(aleatorio)
        
        // Preencher o HTML

        var p_selecionada = perguntas[aleatorio].pergunta;

        $('#textQuiz').html(p_selecionada);
        $('#textQuiz').attr('data-indice', aleatorio);

        // Colocar as respostas

        for (var i = 0; i < 5; i++) {

            $('#resp' + i).html(perguntas[aleatorio].respostas[i]);
        }

        // Embaralhar as respostas

        var containerRespostas = $('#respostas');

        var botoes = containerRespostas.children()

        for (var i = 1; i < botoes.length; i++) {
            containerRespostas.append(botoes.eq(Math.floor(Math.random() * botoes.length)))
        }
  
    } else {    

        // Se a pergunta já foi feita

        if (perguntasFeitas.length < qtdPerguntas + 1) {

            return gerarPergunta(maxPerguntas)

        } else {

            $('.quiz').addClass('oculto')
            $('#mensagem').html('Parabéns, você venceu.')
            $('#status').removeClass('oculto')

        }
    }

}

function newGame() {

    $('#confirm').removeClass('oculto')

    $('#quiz').attr('data-status', 'ok')

    var perguntasFeitas = []

    resetaBotoes()

    gerarPergunta(qtdPerguntas)


    $('.quiz').removeClass('oculto')
    $('#status').addClass('oculto')

}

function resetaBotoes () {

    $('.resposta').each(function() {

        if ($(this).hasClass('selecionada')) {

            $(this).removeClass('selecionada')
                
        }

        if ($(this).hasClass('correta')) {
            $(this).removeClass('correta')
        }

        if ($(this).hasClass('errada')) {
            $(this).removeClass('errada')
        }

    })
}

$('#confirm').click(function () {

    var indice = $('#textQuiz').attr('data-indice');

    var respCerta = perguntas[indice].acerto;

    $('.resposta').each(function () {

        if ($(this).hasClass('selecionada')) {

            var respEscolhida = $(this).attr('id');

            if (respCerta == respEscolhida) {

                console.log('Acertou')

                proximaPergunta ()

            } else {

                console.log('ERRROUUU')

                $('#quiz').attr('data-status', 'travado')
                $('#confirm').addClass('oculto')
                $('#' + respCerta).addClass('correta')
                $('#' + respEscolhida).removeClass('selecionada')
                $('#' + respEscolhida).addClass('errada')
                setTimeout(function () {

                    gameOver()

                }, 2000)
            
            }
        }
    })

})

function gameOver () {

    $('.quiz').addClass('oculto')
    $('#mensagem').html('Game Over!')
    $('#status').removeClass('oculto')
}

function proximaPergunta () {

    resetaBotoes()

    gerarPergunta(qtdPerguntas)

}

$('#novoJogo').click(function() {
    newGame()
})