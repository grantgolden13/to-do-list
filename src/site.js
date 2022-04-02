const content = document.getElementById('content');

const createHeader = function() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const btn = document.createElement('button');
    
    btn.textContent = "+ New Project";
    h1.textContent = "Golden Notes";

    header.appendChild(btn);
    header.prepend(h1);

    return header;
}

const loadSite = function() {
    content.appendChild(createHeader());
}

export default loadSite;