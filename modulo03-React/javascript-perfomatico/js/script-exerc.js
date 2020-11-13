let clickArray = [];
button = null;

window.addEventListener("load", () => {
  button = document.querySelector("#clickButton");
  button.addEventListener("click", () => {
    // const now = new Date();
    // clickArray.push(now.toISOString());
    const item = getNewTimestamp();
    clickArray.push(item);

    // console.log(clickArray);
    render(item);
  });
});

const render = (item) => {
  const ul = document.querySelector("#data");
  const li = document.createElement("li");
  li.innerHTML = item;
  ul.appendChild(li);

  // ul.innerHTML = '';
  // let lis = '';

  // clickArray.map((item) => {
  //     lis += `<li>${item}</li>`
  // });

  // ul.innerHTML = lis;
  // document.title = clickArray.length;
};
