import promptModalEvent from './events';

const createButton = function() {
    const btn = document.createElement('button');
    btn.textContent = "+ New Project";
    btn.addEventListener('click', () => {
        promptModalEvent();
    });
    return btn; 
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