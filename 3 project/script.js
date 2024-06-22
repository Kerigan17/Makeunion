'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
            json.map(user => {
                const liElement = document.createElement('li');
                const linkElement = document.createElement('a');
                linkElement.href = './user/user.html';
                linkElement.addEventListener('click', () => {
                    localStorage.setItem('user', JSON.stringify(user));
                });

                linkElement.textContent = user.name;

                liElement.appendChild(linkElement);
                list.appendChild(liElement);
            })
        })
});