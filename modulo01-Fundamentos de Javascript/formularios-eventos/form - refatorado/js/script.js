let nameInput, form, span;

window.addEventListener("load", () => {
  console.log("Página totalmente carregada");

  nameInput = document.querySelector("#nameInput");
  form = document.querySelector("form");
  span = document.querySelector("#nameLength");

  countName();
  preventSubmit();
});

const countName = () => {
  nameInput.addEventListener("keyup", () => {
    let count = event.target.value;
    span.innerHTML = `${count} tem ${count.length} letras`;
  });
  nameInput.focus();
};

const preventSubmit = () => {
  form.addEventListener("submit", () => {
    event.preventDefault();
    alert(`${nameInput.value} cadastrado com sucesso!`);
  });
  inputName.focus();
};
