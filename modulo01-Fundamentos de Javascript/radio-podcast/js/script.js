window.addEventListener('load', start);
var globalInputRange = null;
var globalInputFrequency = null;
var divPodcast = null;

function start() {
  //console.log('DOM carrefado');
  globalInputRange = document.querySelector('#inputRange'); //captura dos elementos do inputRange
  globalInputFrequency = document.querySelector('#inputFrequency'); //captura dos elementos do inputFrequecy
  globalDivPodcast = document.querySelector('#divPodcast'); //captura dos elementos da divPodcast

  //TESTANDO as três captura para se está funcionando:
  //globalInputRange.value = "108";
  //globalInputFrequency.value = "108";
  //globalDivPodcast.innerHTML = "Oi";

  //Fazendo o inputRange funcionar:
  globalInputRange.addEventListener('input', handleRangeChange);
  //evento é melhor.Pois na medida que move o input. Já dispara a função
}

function handleRangeChange(event) {
  //console.log(event.target.value); //para saber onde o valor do evento se encontra para ser o input
  var currentFrequency = event.target.value; //fazendo o input se refletir na frequência
  globalInputFrequency.value = currentFrequency; //pega o valor da captura do inputFrenquecy para converter no valor do evento

  //Filtrar os dados a partir dos valores do range. Que se encontra no podcast.js
  //Onde os ID´s no podcast.js serão as chaves pra encontrar seus dados.
  showpodcastFrom(currentFrequency); //passando uma função com uma variável.
}

function showpodcastFrom(frequency) {

  // MODELO DO JAVASCRIPT PURO
  //a função não precisa ter o mesmo nome do argumento anterior
  var podcast = null;
  //Assim que pesquisar no vetor de podcasts. Irá pesquisar no ID. E quando encontrar o ID batendo com a frequência.
  //Significa que achou a frequência  de um  podcast. Onde será exibido esse podcast na tela.

  // for(var i = 0; realPodcasts.length; i++){//vai começar do zero e percorrer todos os podcasts
  // var currentPodcast = realPodcasts[i]; //para ter acesso ao realPodcasts realPodcasts na posição "i";
  //testar para saber se está percorrendo todos.Usá-se clg para chamar o console.log();
  //console.log(currentPodcast);
  
  // if(currentPodcast.id === frequency){ //se o podcast atual com ID for equivalente a frequency                                          
  //pode mostrar na "div"
  //  renderPodcast(currentPodcast);//vai renderizar o podcast pelo podcast atual através do currentPodcast
  //podcast = currentPodcast;//fica no lugar do renderPodcast
  //  break; //pra quebrar o laço. Caso a estrutura de decisão não encontre. Vai ficar nulo embaixo. Passa o renderPodcast para renderizar na tela
  // }
  //}

  //JAVASCRIPT MODERNO QUE SUBSTITUI O "FOR" UTILIZANDO APENAS 2 LINHAS
  podcast = realPodcasts.find(function (podcast) {
    return podcast.id === frequency;
  });
  renderPodcast(podcast);
}

function renderPodcast(podcast) {
  if (!podcast) {//para testar se ele existe
    globalDivPodcast.textContent = 'Nenhum Podcast encontrado'; // senão encontra, passa uma msgm padrão
    return; // encerra a estrutura de decisão. justamente para não para usar o else
  }

  var {img, title, description} = podcast; //object edstruction

  globalDivPodcast.innerHTML = `
    <img src='./img/${img}' />
    <h2>${title}</h2>
    <p>${description}</p>
  `;
}
