const content = document.getElementById('content');
const projects = [];

const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
}

const createDeleteAlert = function(elem) {
    const alertModal = document.createElement('div');
    alertModal.classList.add('alert-modal');

    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');

    const alerth1 = document.createElement('h1');
    alerth1.textContent = "Caution";

    const alertp = document.createElement('p');
    alertp.textContent = "Are you sure you want to delete this project? This action cannot be undone.";

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', (e) => {
        e.target.parentElement.style.display = "none";
    });

    const deleteButton = document.createElement('button');
    deleteButton.id = "deleteProject";
    deleteButton.textContent = "Delete Project";
    deleteButton.addEventListener('click', (e) => {
        const index = projects.indexOf(elem);
        projects.splice(index, 1);
        elem.remove();
        e.target.parentElement.style.display = "none";
    })

    alertContainer.appendChild(alerth1);
    alertContainer.appendChild(alertp);
    alertContainer.appendChild(cancelButton);
    alertContainer.appendChild(deleteButton);
    
    content.appendChild(alertContainer);
}

const createDeleteBtn = function() {
    const deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.classList.add('delete-btn-container');
    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.value = "Delete Project";
    deleteBtn.textContent = "Delete Project";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        const projectToDelete = e.target.parentElement.parentElement;
        createDeleteAlert(projectToDelete);
    });
    deleteBtnDiv.appendChild(deleteBtn);
    return deleteBtnDiv;
}

const createDefaultProject = function() {
    const defaultProjectObj = new Project("my first project", "high", "2023-04-20");
    projects.push(defaultProjectObj);
}

const renderProjectsToDOM = function() {
    const projectGrid = document.querySelector('.project-grid');

    // clear projects so they're not duplciated
    const projectsInDOM = [...projectGrid.children];
    projectsInDOM.forEach(project => {
        project.remove();
    });

    projects.forEach(project => {
        const newProjectElem = document.createElement('div');
        newProjectElem.classList.add('projects');

        const projectHeader = document.createElement('header');
        projectHeader.classList.add('project-header');

        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        const projectPriority = project.priority;
        if (projectPriority == "high") {
            newProjectElem.classList.add('green');
        } else if (projectPriority == "higher") {
            newProjectElem.classList.add('yellow');
        } else if (projectPriority == "highest") {
            newProjectElem.classList.add('red');
        }

        const projectDueDate = document.createElement('h3');
        projectDueDate.textContent = project.dueDate;

        const projectTodosContainer = document.createElement('div');
        projectTodosContainer.classList.add('todos-container');
    
        projectHeader.appendChild(projectName);
        projectHeader.appendChild(projectDueDate);

        newProjectElem.appendChild(projectHeader);
        newProjectElem.appendChild(createDeleteBtn());
    
        projectGrid.appendChild(newProjectElem);    
    });
}

const loadProjects = function() {

    const projectGrid = document.createElement('div');
    projectGrid.classList.add('project-grid');

    content.appendChild(projectGrid);

    createDefaultProject();
    renderProjectsToDOM();
}

export { projects, Project, loadProjects, renderProjectsToDOM };