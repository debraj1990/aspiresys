console.log("-index.js-");



//------------------------------------------
// using DOM API
//------------------------------------------


let box = document.querySelector('.alert');
let greetBtn = document.querySelector('.btn-success');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

greetBtn.addEventListener('click', e => {
    box.innerHTML = "good evening"
});
showBtn.addEventListener('click', e => {
    box.style.display = 'block'
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})



//------------------------------------------
// using XHR/Fetch API
//------------------------------------------

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click', e => {

    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let liTemplate = `
                    <li class="list-group-item">
                        ${todo.id} - ${todo.title} - ${todo.completed}
                    </li>
                `
                arr.push(liTemplate)
            })
            document.getElementById("todo-list").innerHTML = arr.join(" ");
        })


})


//------------------------------------------
// using Timer Api
//------------------------------------------

let myClock = document.getElementById('my-clock');

function tick() {
    let time = new Date().toLocaleTimeString();
    let timeUI = `
        <div>
            <span class="badge badge-danger">${time}</span>
        </div>
    `
    myClock.innerHTML = timeUI;
}

setInterval(tick, 1000)