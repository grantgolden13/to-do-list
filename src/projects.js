const projects = [];

const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
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
        const index = projects.indexOf(projectToDelete);
        projects.splice(index, 1);
        projectToDelete.remove();
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
    const content = document.getElementById('content');

    const projectGrid = document.createElement('div');
    projectGrid.classList.add('project-grid');

    content.appendChild(projectGrid);

    createDefaultProject();
    renderProjectsToDOM();
}

export { projects, Project, loadProjects, renderProjectsToDOM };