window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
var inputName = null; //7a na~tenho certeza que pagina estara carregada
var isEditing = false; // 47a tradição - estou editando
var currentIndex = null; //59a

function start() {
  //1a
  inputName = document.querySelector('#inputName'); //8a - input foi ordenado para primeiro
  preventformSubmit(); //2a - evita que o form seja carregado no inicio
  activateInput(); //10a - ativar o input no inicio
  render(); //21a
}

function preventformSubmit() {
  //3a
  function handleFormSubmit(event) {
    //6a
    event.preventDefault();
  }

  var form = document.querySelector('form'); //4a
  form.addEventListener('submit', handleFormSubmit); //5a
}

function activateInput() {
  //9a - e tornar-lo reativo. fazer com que a gente escute a digitação dele
  function insertName(newName) {
    //14a - e chamr o parametro de nome que quiser
    //13a var typedName = event.target.value
    //13a globalNames.push(typedName)
    //13a para isolar numa função os codigos acima em insertName(event.target.value) como parametro
    globalNames.push(newName); //13a - para adicionar elementos na lista(vetor)
    //como estava lá embaixo. Subiu pra cá
    //para ver se está funcionando console.log(globalNames);
  }

  function updateName(newName) {
    //51a
    globalNames[currentIndex] = newName; //60a
  }

  function handleTyping(event) {
    //11a - estou declarando a função. So pegar quando o caracter for ENTER. Quando um evento dispara uma função. Ele manda algo implicitamente que a gente captura com EVENT
    // testa com o console.log(event); para vef o keyboardEvent
    //pra confirmar dá um console.log(event.target.value);
    var hasText = !!event.target.value && event.target.value.trim() !== ''; // 63a - duas exclamação como algo verdadeiravel em true e falsiavel como false

    if (!hasText) {
      clearInput(); //64a - para limpar o texto
      return;
    }

    if (event.key === 'Enter') {
      //12a
      //console.log('ENTER'); aqui nota que está osneguindo captura o ENTER
      //trim elimina espço em branco desnecessário
      if (isEditing) {
        //53a
        updateName(event.target.value); //54a
      } else {
        insertName(event.target.value); //55a
      }

      render(); //61a JS PURO NAO SABE QUE TEM RENDEREIZAR DE NOVO
      isEditing = false; //48a para desativar a edição depos disso
      clearInput(); //60a vai limpar e focar
    }
  }
  inputName.addEventListener('keyup', handleTyping); //10a - funcão ´ra trabalhar com digitaçaõ. Lembrando que a função so avi executdo quando o keyup acontecer . Quando um evento dispara uma função. Ele manda algo implicitamente que a gente captura com EVENT
  inputName.focus();
}

function render() {
  //14a -
  function createDeleteButton(index) {
    //32a - inves de colocar "i" nomeia como index
    function deleteName() {
      //37a
      //isso se chama de clousure
      globalNames.splice(index, 1); //38a para excluir na posicão apenas 1
      render(); //39a - coloca porque ele nao sabe que mexi no estado
    }

    var button = document.createElement('button'); //26a
    button.classList.add('deleteButton'); //31a
    button.textContent = 'x'; //27a
    button.addEventListener('click', deleteName); //36a
    return button; //34a
  }

  function createSpan(name, index) {
    //57a
    function editItem() {
      //44a
      inputName.value = name; //45a vai passar a ser o name
      inputName.focus(); //46a para deixa o cursor no foco
      isEditing = true;
      currentIndex = index; //58a
    }
    var span = document.createElement('span'); //40a
    span.classList.add('clickable'); //41a - para deixar os botoes clicavel
    span.textContent = name; //42a
    span.addEventListener('click', editItem); //43a

    return span;
  }

  var divNames = document.querySelector('#names'); //15a
  divNames.innerHTML = ''; //22a para limpar a lsita apos digitar alguma coisa

  var ul = document.createElement('ul'); //17a

  for (var i = 0; i < globalNames.length; i++) {
    //18a para pegar o tamamho do vetor.Vai percorrer de 0 ATE o tamanho do vetor. Eu quero de 0 a 3
    var currentName = globalNames[i];

    var li = document.createElement('li'); //19a esse loop vai rodar 4x no caso essa lista
    // e para cada que rodar vai criar botao delete e creaate
    //como tambem vai adicionar o botao no li e span tambem dinamicamente
    var button = createDeleteButton(i); //35a colocou um "i" como indice para dizer qual o botão eu estou colocando. pirmeiro quartou ou infinito
    var span = createSpan(currentName, i); //29a //56a passando o indice

    li.appendChild(button); //28a
    li.appendChild(span); //30a

    ul.appendChild(li); //20a
  }
  divNames.appendChild(ul); // 16a
  clearInput();
}

function clearInput() {
  //23a  - para excluir apos digitar algo no formulario
  inputName.value = ''; //24a
  inputName.focus(); //25a
}
