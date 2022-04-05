import promptModalEvent from './events';

const createButton = function() {
    const newProjectButton = document.createElement('button');
    newProjectButton.textContent = "+ New Project";
    newProjectButton.classList.add('new-project-button');
    newProjectButton.addEventListener('click', () => {
        promptModalEvent();
    });
    return newProjectButton; 
};

const createHeader = function() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.textContent = "Golden Notes";

    header.appendChild(h1);
    header.appendChild(createButton());

    return header;
}

const loadHeader = function() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
}

export default loadHeader;