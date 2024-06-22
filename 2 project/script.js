'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }
    
        const liElement = document.createElement('li');
        liElement.title = 'click to execute'
    
        const deleteButton = document.createElement('button');
        const trash = document.createElement('img');
        trash.src = 'trash.svg';
        deleteButton.append(trash);
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(liElement);
        });
    
        const textElement = document.createElement('p');
        textElement.classList.add('text')
        textElement.textContent = taskText;
        liElement.appendChild(textElement);

        liElement.appendChild(deleteButton);
        liElement.addEventListener('click', function() {
            liElement.classList.toggle('completed');
        });
    
        taskList.appendChild(liElement);
        taskInput.value = '';
        taskInput.focus();
    }
});
