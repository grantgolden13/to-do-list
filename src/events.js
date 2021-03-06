import { projects, Project, renderProjectsToDOM, Todo } from './projects';

const promptModal = function() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
};

const createNewProject = function() {
    const projectGrid = document.createElement('div');
    projectGrid.classList.add('project-grid');

    const projectName = document.getElementById('name-input').value;
    const projectPriority = document.getElementById('priority-input').value;
    const projectDueDate = document.getElementById('due-date-input').value;

    const newProject = new Project(projectName, projectPriority, projectDueDate);

    projects.push(newProject);
    renderProjectsToDOM();
}

export { promptModal, createNewProject };