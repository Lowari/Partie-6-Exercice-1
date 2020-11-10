const ul = document.createElement('ul');

ul.setAttribute('class', 'text-center container list-group mt-5');
document.body.appendChild(ul);

for (i = 2020; i <= 2030; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    li.setAttribute('class', 'list-group-item text-center');
    if (i % 4 === 0 && i % 100 != 0 || i % 400 === 0) {
        li.classList.add('text-danger');
    }
    ul.appendChild(li);
};