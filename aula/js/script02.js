//será executada somente quando a pagina for carregada 
window.addEventListener('load', start);

var globalNames = [ // vetor ou array
  'Um', 
  'Dois',
  'Três',
  'Quatro'
];
var inputName = null;

function start(){
  //console.log('start'); --=-para testar console
  inputName = document.querySelector('#inputName');

  preventFormSubmit(); //evitar que o fome seja carregado
  activateInput(); // mandei ativar o input no inicio
}

function preventFormSubmit(){ //pode definir funcoes dentro de outra
  function handleFormSubmit(event){ //pode colocar qualquer palavra dentro do argmento mas vou chamar de calopsita
    event.preventDefault();//evitar que o form seja carregada. EVITA CARREGAMENTO PADRÃO QUE É O FORMULARIO
}

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
function activateInput(){
  function insertName(newName){
    globalNames.push(newName); 
    //console.log(globalNames);//para ver se está funcionando 
    render();
  }



  function handleTyping(event){
    if(event.key === 'Enter'){
      insertName(event.target.value); //para isolarnuma funcao
      //var typeName = event.target.value
     // globalNames.push(typeName);
    }   
  }
    //console.log(event); //para descobrir como pegar o 'enter'
      //console.log('ENTER');
      //console.log(event.target.value);
      //globalNames.push(event.target.value);
      //globalNames.push(typeName);
      //var typeName = event.target.value//pra ficar legal
   inputName.addEventListener('keyup',handleTyping);//funcao para trabalhar com digitação
   //a função handleTyping so ira executar quando ocorrer o evento keyup
   inputName.focus();
}

function render(){ //objetivo é pegar o elemento da div e inserir as coisa dinamicamente
  var divNames = document.querySelector('#names');
  //divNames.innerHTML = '<ul><li>Nome 1 </li><li>Nome 2</li></ul>' 
  
  //Criar ul (que é o pai dos li´s)
  //Fazer n li´s, conforme o tamanho do vetor de globalnames
  var ul = document.createElement('ul');
  /*var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.textContent = 'Primeiro';
  li2.textContent = 'Segundo';
  ul.appendChild(li1);//ul é tipo de pais de filhos de li
  ul.appendChild(li2);//ul é tipo de pais de filhos de li
*/

  for(var i = 0; i < globalNames.length; i++){ // vai pegar o zero e vai percorrer de zero ao tamanho -1.Pois o indice iniciou no zero. E está testando menor
    // entap se tem 5 elemento. Os indices vao de zero a 4
    var currentName = globalNames[i];// pegar o nome propriamente dito
    
    var li = document.querySelector('li');
    li.textContent = currentName;
    ul.appendChild(li);
  }
  divNames.appendChild(ul); //divNames que será o pai da ul

}
