console.log("-index.js-");



let inp1 = document.getElementById('inp1');

let num = 0;
setInterval(() => {
    num++;
    inp1.value = num;
    inp1.dispatchEvent(new Event('change'))
}, 2000)

function handleChange() {
    document.getElementById('badge').innerHTML = num * num;
}