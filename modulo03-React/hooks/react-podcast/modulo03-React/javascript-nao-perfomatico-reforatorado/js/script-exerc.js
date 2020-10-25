let clickArray = [];

window.addEventListener('load', () => {
    document.querySelector('#clickButton').addEventListener('click', () => {
        // const now = new Date();
        // clickArray.push(now.toISOString());
        clickArray.push(getNewTimestamp());

        //console.log(clickArray);
        render();
    });
});

const render = () => {
    const ul = document.querySelector('#data');
    ul.innerHTML = ''

    let lis = '';

    clickArray.map((item) => {
        lis += `<li>${item}</li>`
    });

    ul.innerHTML = lis;

    document.title = clickArray.length;
}
