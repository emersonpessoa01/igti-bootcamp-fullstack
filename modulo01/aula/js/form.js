function submitForm() {
  event.preventDefault();
  //Neste evento só adiciona
  let idAtual = getId();
  let name = document.getElementById('txtName');
  let operation = name.className;
  if (operation === 'insert') {
    if (name.value === '') {
      alert('Digite um nome');
      return false;
    } else {
      addName(name.value, idAtual);
      name.value = '';
      name.focus();
    }
  } else if (operation === 'change') {
    name.classList.remove('change');
    name.classList.add('insert');
    document.getElementById(name.alt).innerHTML = name.value;
    name.setAttribute('alt', '');
    name.value = '';
    name.focus();
  }
}
function addName(name, idAtual){
let linha = document.createElement('li');
let lista = document.getElementById('listaNomes');
let linkExcluir = document.createElement('a');
let linkAlterar = document.createElement('a');
let spanName = document.createElement('span');
let spanLink = document.createElement('span');

function submitForm(){
event.preventDefault();
//Neste evento só adiciona
let idAtual = getId();
let name = document.getElementById('txtName');
let operation = name.className;
if(operation === 'insert'){
if(name.value === '') {
alert('Digite um nome');
return false;
} else{
addName(name.value, idAtual);
name.value = '';
name.focus();
}
}
else if (operation === 'change'){
name.classList.remove('change');
name.classList.add('insert');
document.getElementById(name.alt).innerHTML = name.value;
name.setAttribute('alt', '');
name.value = '';
name.focus();
}
}

function addName(name, idAtual){
let linha = document.createElement('li');
let lista = document.getElementById('listaNomes');
let linkExcluir = document.createElement('a');
let linkAlterar = document.createElement('a');
let spanName = document.createElement('span');
let spanLink = document.createElement('span');
linkExcluir.setAttribute('href', '#');
linkExcluir.setAttribute('onclick', 'event.preventDefault();
removeName(this.parentElement.parentElement);');
linkExcluir.appendChild(document.createTextNode(' Excluir '));
linkAlterar.setAttribute('onclick', 'event.preventDefault(); changeName(' + idAtual + ');');
linkAlterar.appendChild(document.createTextNode(' Alterar '));
linkAlterar.setAttribute('href', '#');
spanName.setAttribute('id', idAtual);
spanName.appendChild(document.createTextNode(name));
linha.appendChild(spanName);
spanLink.appendChild(linkExcluir);
spanLink.appendChild(linkAlterar)
linha.appendChild(spanLink);
lista.appendChild(linha);
}
function removeName(nome){
nome.remove();
}
function changeName(idAtual){
let name = document.getElementById(idAtual).innerHTML;
let txtName = document.getElementById('txtName');
txtName.value = name;
txtName.classList.add('change');
txtName.classList.remove('insert');
txtName.setAttribute('alt', idAtual);
txtName.focus();
}
function getId(){
return new Date().getTime();
}