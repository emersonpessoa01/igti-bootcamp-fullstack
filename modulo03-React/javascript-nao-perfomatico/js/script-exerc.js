let clickArray = [];

window.addEventListener('load', start);

function start() {
    const button = document.querySelector('#clickButton');
    button.addEventListener('click', handleClickButton);
};


function handleClickButton() {
    const now = new Date();
    clickArray.push(now.toISOString());

    console.log(clickArray);
    render();
}

function render() {
    const ul = document.querySelector('#data');
    ul.innerHTML = ''

    let lis = '';

    clickArray.map((item) => {
        lis += `<li>${item}</li>`
    });

    ul.innerHTML = lis;
}
