import loadHeader from './header';

const loadSite = function() {
    const content = document.getElementById('content');
    content.appendChild(loadHeader());
    content.appendChild(loadModal());
};

export default loadSite;