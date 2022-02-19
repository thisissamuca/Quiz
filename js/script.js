$(document).ready(() => {

    /* -------------------- ** CRIANDO VARIÁVEIS ** ----------------------- */

    /* TODAS AS PERGUNTAS FEITAS */

    var perguntasFeitas = []

    /* CRIANDO TODAS AS PERGUNTAS DO JOGO */

    var perguntas = [

    // 1

        { pergunta: "Qual característica abaixo NÃO pertence ao relevo planície?",

          respostas: ['Áreas majoritariamente planas', 'Geralmente são de baixa altitude', 'Regiões que não são propensas a receberem cursos de água', 'Recebem grande quantidade de sedimentos de outras regiões'],

          acerto: "resp2"

        },

    // 2

        { pergunta: "áreas vegetais NÃO são capazes de influenciar... :",

          respostas: ['A contenção de raios ultravioletas emitidas pelo sol', 'A elevação da umidade relativa do ar', 'Aumento do índice    pluviométrico', 'A condutibilidade elétrica de nuvens e a frequência de trovões'],

          acerto: "resp3"

        },

        // 3

        { pergunta: "Quais os pares de características que uma montanha geralmente APRESENTA?",

          respostas: ['Alta altitude e vegetação coberta', 'Paisagem acidentada e tendência à vulcanismo', 'Cume bem definido e proximidade com corpos de água', 'Paisagem glacial e alta altitude'],

          acerto: "resp1"

        },

        // 4

        { pergunta: "Os seres decompositores apresentam um papel muito importante na natureza. Qual das função são VERDADEIRAS?",

        respostas: ['Se alimentar de carnes ou vegetais', 'Devolver a matéria orgânica para o ciclo energético', 'Os seres decompositores não   possuem uma função definida', 'Produzir energia para a cadeia trófica'],

        acerto: "resp1"

        },

        // 5

        { pergunta: "Qual dos elementos químicos FAZEM parte do grupo das conhecidas terras raras?",

        respostas: ['Li, Mg, Ag e Zn', 'Ca, K, Na e Mn', 'Ni, Au, Pt e Hg', 'La, Ce, Nd, e Sm'],

        acerto: "resp3"

        },

        // 6

        { pergunta: "Existem algumas possibilidades dentro do príncipio de Gause, qual alternativa NÃO apresenta uma das possibilidades?",

        respostas: ['Uma das espécies sofrerá esclavagismo', 'Uma das espécies será extinta', 'Uma das espécies irá migrar', 'Uma ou todas as   espécies irão alterar seus nichos ecológicos para evitar competição'],

        acerto: "resp0"

        },

        // 7

        { pergunta: "Quais das características geológicas NÃO fazem parte do Brasil?",

        respostas: ['Possui grande parte do território composto por bacias sedimentares e escudos cristalinos', 'Apresenta a segunda maior reserva  de terras raras do mundo', 'Há poucos dobramentos modernos devido à posição geográfica', 'Altitudes baixas e médias predominam a região'],

        acerto: "resp2"

        },

        // 8

        { pergunta: "O período pré-cambriano ocorreu os eventos mais importantes da terra. Qual foi o único evento NÃO presente nesse período?",

        respostas: ['Ínicio do movimento tectônico', 'Modificações nas condições climáticas e oceanográficas que permitiu a origem da vida',    'Formação da crosta terrestre e grande atividade vulcânica', 'Aparecimento dos primeiros vegetais e animais'],


        acerto: "resp2"

        },

        // 9

        { pergunta: "Os relevos possuem grande diversidade e características que definem uma região geográfica. Qual dos grupos abaixo NÃO faz  referência a um relevo?",

        respostas: ['Depressão, Cuesta e Chapada', 'Morro, Colina e montanha', 'Floresta, deserto e campo', 'Falésia, planalto e planície'],

        acerto: "resp2"

        },

        // 10

        { pergunta: "Os seres produtores são aqueles que produzem energia trófica primária para a cadeia alimentar. Indique qual animal abaixo FAZ parte dos seres produtores:",

        respostas: ['Vaca', 'Fitoplâncton', 'Abelha', 'Fungo'],

        acerto: "resp1"

        },

        // 11

        { pergunta: "Os relevos possuem algumas características que por sua vez influenciam o clima. Indique qual influência climática o relevo É CAPAZ de interagir:",

        respostas: ['Altas altitudes dificultam a passagem de massas de ar', 'Desviar fluxos hídricos para regiões mais baixas', 'Dificultar a  fixação de organismos vegetais', 'Colaborar para o incremento populacional'],

        acerto: "resp0"

        },

        // 12

        { pergunta: "Escudos cristalinos são importantes fontes de minerais metálicos na crosta terrestre. Indique qual característica que os   escudos cristalinos NÃO possuem:",

        respostas: ['Resistência a corrosão e intemperismo devido à formação geológica', 'Formações rochosas mais antigas do planeta', 'Formação geralmente em baixas altitudes', 'São compostas por rochas sedimentares'],

        acerto: "resp3"

        },

        // 13

        { pergunta: "Os métodos de separação de misturas são importantes formas de separação de substâncias, sejam elas liquidas, gasosas ou    sólidas. Indique a única alternativa NÃO faz parte desses métodos:",

        respostas: ['Filtração', 'Dissolução', 'Sublimação', 'Sifonação'],

        acerto: "resp2"

        },

        // 14

        { pergunta: "Os agentes internos geológicos (endógenos) são interações importantes para a dinâmica do planeta. Indique o fenômeno que NÃO faz parte desses processos: ",

        respostas: ['Orogênese', 'Vulcanismo', 'Abalo sísmico', 'Intemperismo'],

        acerto: "resp3"

        },

        // 15

        { pergunta: "As bacias sedimentares são estratificações de sedimentos acumulados em uma região, geralmente mais baixa. NÃO é possível   encontrar [...] nessas formações rochosas devido a/ao [...] dessas bacias sedimentares.",

        respostas: ['minerais metálicos; tempo de formação', 'fósseis; baixa altitude', 'águas subterrâneas; depressão absoluta', 'petróleo;    formação rochosa'],

        acerto: "resp0"

        },

        // 16

        { pergunta: "A cadeia alimentar possui diversos níveis tróficos, dentre eles o consumidor. Indique a única alternativa que NÃO apresenta nenhum consumidor primário em relação a uma cadeia alimentar completa:",

        respostas: ['Onça; Águia; Tatu', 'Vaca; Tucano; Macaco', 'Lagarto; Jacaré; Sucuri', 'Orca; Ovelha; Tubarão'],

        acerto: "resp0"

        },

        // 17

        { pergunta: "Os métodos de separação de misturas são importantes formas de separação de substâncias, sejam elas liquidas, gasosas ou    sólidas. Indique a única alternativa NÃO faz parte desses métodos:",

        respostas: ['Levigação', 'Destilação', 'Fusão', 'Evaporação'],

        acerto: "resp2"

        },

        // 18

        { pergunta: "Os agentes externos geológicos (exógenos) desempenham uma função importante no espaço geográfico que é a formação do relevo. Indique corretamente quais das alternativas NÃO é um agente exógeno:",

        respostas: ['Erosão pluvial', 'Erosão fluvial', 'Erosão glacial', 'Erosão biológico'],

        acerto: "resp3"

        },

        // 19

        { pergunta: "Algumas pessoas confundem a diferença de clima e tempo devido à suas semelhanças climáticas. Indique a DIFERENÇA CORRETA de clima e tempo:",

        respostas: ['Clima é o conjunto de fenômenos climáticos; Tempo são as variações no fluxo de massas de ar', 'Clima é o conjunto de variações atmosféricas nas últimas décadas; Tempo são oscilações momentâneas na mesma atmosfera', 'Clima são as condições do planeta; Tempo são as oscilações do clima em uma determinada região', 'Clima é o conjunto de variações atmosféricas; Tempo são as oscilações do clima em uma determinada região '],

        acerto: "resp1"

        },

        // 20

        { pergunta: "Os métodos de separação mecânicos servem para separarem substâncias que compartilham algumas semelhanças físicas. Indique  corretamente o ÚNICO método que NÃO faz parte das separações mecânicas:",

        respostas: ['Ventilação', 'Destilação fracionada', 'Mantação', 'Peneiração'],

        acerto: "resp1"

        },

    ]

    /* TODAS AS PERGUNTAS DO JOGO */

    var qtdPerguntas = perguntas.length - 1

    /* ------------------------------------------------------------------------------- */

    /* -------------------- ** CRIANDO FUNÇÕES ** ----------------------- */

    /* FUNÇÃO DE GERAR PERGUNTAS */

    gerarPergunta(qtdPerguntas);

    function gerarPergunta(maxPerguntas) {

        console.log('_________________________________________________________________________________________')

        console.log('Chamando a função de gerar perguntas')

        console.log(`O a quantidade máxima de perguntas é ${maxPerguntas}`)

        console.log('-----------------------')

        // Removendo a classe 'oculto' do botão #verific

        $('#verific').removeClass('oculto')

        // Gerar um número aleatório que é o indice da pergunta que será feita

        let aleatorio = Number((Math.random() * maxPerguntas).toFixed())

        console.log(`O número aleatório gerado é ${aleatorio}`)

        // Indicar qual foi a pergunta selecionada

        var perguntaSelecionada = perguntas[aleatorio].pergunta

        console.log(`A pergunta selecionada é ......... ${perguntaSelecionada}`)
        
        console.log('-----------------------')

        // Verificar se a pergunta já foi feita

        if (!perguntasFeitas.includes(aleatorio)) { // Caso a pergunta ainda não foi feita

            // Incluir indice da pergunta dentro do array perguntasFeitas

            perguntasFeitas.push(aleatorio)

            // Escrever no HTML

            $('#textQuiz').html(perguntaSelecionada)
            $('#textQuiz').attr('data-indice', aleatorio)

            // Preencher as respostas com um laço

            for (var i = 0; i < 4; i++) {

                $('#resp' + i).html(perguntas[aleatorio].respostas[i]);

            };

            // Chamando a função para embaralhar as respostas

            embaralharRespostas ();

            console.log('As respostas acabaram de serem embaralhadas')

            console.log('-----------------------')

        } else {

            if (perguntasFeitas.length < qtdPerguntas + 1) { // Caso a pergunta já foi feita

                // Chamando a função gerar perguntas

                return gerarPergunta(maxPerguntas);
                
            };

        };

    };

    /* FUNÇÃO DE EMBARALHAR RESPOSTAS */

    function embaralharRespostas () {

        console.log('Chamando a função de embaralhar respostas')

        // Acessar a div HTML que contém todas as respostas

        var containerRespostas = $('#respostas');

        // Dizer que as respostas são filhas do containerRespostas

        var btns = containerRespostas.children()

        // Criar um laço que embaralha as respostas

        for (var i = 0; i < btns.length; i++) {

            containerRespostas.append(btns.eq(Math.floor(Math.random() * btns.length)))

        };

    };

    /* FUNÇÃO DE RESETAR OS BOTÕES */

    function resetaBotoes () {

        console.log('Chamando a função de resetar botões')

        // Percorrendo toda a div com a classe 'resposta'

        $('.resposta').each(function () {

            if ($(this).hasClass('selecionada')) { // Caso a div esteja com a classe 'selecionada'

                $(this).removeClass('selecionada') // Removendo a classe 'selecionada'

                console.log('Foi removido a classe > selecionada < ')

                console.log('-----------------------')

            };

            if ($(this).hasClass('correta')) { // Caso a div esteja com a classe 'correta

                $(this).removeClass('correta') // Removendo a classe 'correta'

                console.log('Foi removido a classe > correta < ')

                console.log('-----------------------')

            };

            if ($(this).hasClass('errada')) { // Caso a div esteja com a classe 'errada'

                $(this).removeClass('errada') // Removendo a classe 'errada'

                console.log('Foi removido a classe > errada < ')

                console.log('-----------------------')

            };

        });

    };

    /* FUNÇÃO DE VERIFICAR A RESPOSTA */

    verificarResposta ();

    function verificarResposta () {

        // Adicionando o evento de clique no botão #verific

        $('#verific').click(function () {

            console.log('O botão de VERIFICAR RESPOSTA foi clicado')

            console.log('-----------------------')

            // Criando uma variável que recebe o índice da pergunta

            var indice = $('#textQuiz').attr('data-indice');

            console.log(`O índice da pergunta é ${indice}`)

            console.log('-----------------------')

            // Criando uma variável que recebe a resposta certa da pergunta em questão

            var respCerta = perguntas[indice].acerto;

            console.log(`A resposta certa é ${respCerta}`)

            console.log('-----------------------')

            // Percorrendo toda a div com a classe 'resposta'

            $('.resposta').each(function () {

                if ($(this).hasClass('selecionada')) { // Caso a div esteja com a classe 'selecionada'

                    var respEscolhida = $(this).attr('id') // Atribuindo o atribudo id no elemento

                    if (respCerta == respEscolhida) { // Caso a resposta escolhida for igual a resposta certa

                        console.log('Você acertou. Parabéns!')

                        console.log('-----------------------')

                        // Chamando a função para ir à próxima pergunta
    
                        proximaPergunta ();

                    } else {

                        console.log('Ohh, não! Você errou.')

                        console.log('-----------------------')

                        // Adicionando o atributo 'travado' a div #quiz

                        $('#quiz').attr('data-status', 'travado')

                        // Adicionando a classe 'oculto' do botão #verific

                        $('#verific').addClass('oculto')

                        // Adicionando a classe 'correta' ao id # que contém a resposta correta

                        $('#' + respCerta).addClass('correta')

                        // Removendo a classe 'selecionada' ao id # que contém a resposta escolhida

                        $('#' + respEscolhida).removeClass('selecionada')

                        // Adicionando a classe 'errada' ao id # que contém a resposta escolhida

                        $('#' + respEscolhida).addClass('errada')

                        // Definindo um time para agir

                        setTimeout(function () {

                            // Chamando a função para ir à próxima pergunta
        
                            proximaPergunta();
        
                        }, 3500);

                    };
                    
                };

            });

        });

    };

    /* FUNÇÃO DE IR PARA A PRÓXIMA PERGUNTA */

    function proximaPergunta () {

        // Removendo a classe 'oculto' do botão #verific

        $('#verific').removeClass('oculto')

        // Chamando a função para resetar os botões

        resetaBotoes();

        // Chamando a função para carregar novas perguntas
    
        gerarPergunta(qtdPerguntas);
    
    };

    /* FUNÇÃO DE TRAVAR OS BOTÕES */

    travar();

    function travar () {

        // Percorrendo toda a div com a classe 'resposta'

        $('.resposta').click(function () {

            if ($('.quiz').attr('data-status') != 'travado') { // Caso a div não esteja com o atributo 'travado'

                // Chamando a função para resetar os botões

                resetaBotoes ();

                // Adicionando ao elemento a classe 'selecionada'
    
                $(this).addClass('selecionada')
        
            };
    
        });

    };

})