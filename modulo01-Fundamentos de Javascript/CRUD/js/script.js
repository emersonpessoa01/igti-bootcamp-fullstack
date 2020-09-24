let globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener('load', () => {
  
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
  render();
});

const preventFormSubmit = () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', () => {
    event.preventDefault();
  });
};

const activateInput = () => {
  const insertName = (newName) => {
    //insere um novo conteudo ao array
    //globalNames.push(newName);
    globalNames = [...globalNames, newName];
  };
  //recebe o indice do newname
  const updateName = (newName) => {
    globalNames[currentIndex] = newName;
  };

  inputName.addEventListener('keyup', () => {
    let hasText = event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
    }
    inputName.focus();
  });
};

const render = () => {
  const createDeleteButton = (index) => {
    let button = document.createElement('button');
    button.classList.add('standardButton');
    button.classList.add('clickable');
    button.innerHTML = '✓';

    button.addEventListener('mouseover', () => {
      button.classList.add('deleteButton');
      button.classList.add('clickable');
      button.innerHTML = 'x';
    });

    button.addEventListener('mouseout', () => {
      button.classList.remove('deleteButton');
      button.innerHTML = '✓'; 
    });

    button.addEventListener('click', () => {
      //globalNames.splice(index, 1);
      //globalNames = globalNames.filter((name, i)=>{
      globalNames = globalNames.filter((_, i)=>{
        // if(i ==! index){
        //   return false;
        // }
        // return true;
        return i !== index //quero o elemento i que seja diferente do index(Palavras do Gomide)
      })
      render();
    });
    return button;
  };

  const createSpan = (name, index) => {
    let span = document.createElement('span');
    span.classList.add('clickable');
    span.innerHTML = name;

    span.addEventListener('click', ()=>{
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    });
    return span;
  };

  let divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  let ul = document.createElement('ul');

  for (let i = 0; i < globalNames.length; i++) {
    let currentName = globalNames[i];

    let li = document.createElement('li');
    let button = createDeleteButton(i);
    let span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
};

const clearInput = () => {
  inputName.value = '';
  inputName.focus();
};
