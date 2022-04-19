import loadHeader from './header';
import loadModal from './modal';
import { loadProjects } from './projects';

const loadSite = function() {
    loadHeader();
    loadModal();
    loadProjects();
};

export default loadSite;