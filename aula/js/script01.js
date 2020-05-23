window.addEventListener('load', start);

var globalNames = [ 
  'Um', 
  'Dois',
  'Três',
  'Quatro'
];
var inputName = null;

function start(){
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
}

function preventFormSubmit(){ 
  function handleFormSubmit(event){ 
    event.preventDefault();
}

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
function activateInput(){
  function insertName(newName){
    globalNames.push(newName);  
  }



  function handleTyping(event){
    if(event.key === 'Enter'){
      insertName(event.target.value);
    }   
  }

  inputName.addEventListener('keyup',handleTyping);
   inputName.focus();
}

function render(){
  var divNames = document.querySelector('#names');
  var ul = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.textContent = 'Primeiro';
  li2.textContent = 'Segundo';
  ul.appendChild(li1);
  ul.appendChild(li2);
}
