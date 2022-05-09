const content = document.getElementById('content');
const projects = [];

const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.todos = [];
}

const createDeleteAlert = function(elem) {
    const alertModal = document.createElement('div');
    alertModal.classList.add('delete-modal');

    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');

    const alerth1 = document.createElement('h1');
    alerth1.textContent = "CAUTION";

    const alertp = document.createElement('p');
    alertp.textContent = "Are you sure you want to delete this project? This action cannot be undone.";

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');

    const cancelButton = document.createElement('button');
    cancelButton.id = "cancelDelete";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.style.display = "none";
    });

    const deleteButton = document.createElement('button');
    deleteButton.id = "deleteProject";
    deleteButton.textContent = "Delete Project";
    deleteButton.addEventListener('click', (e) => {
        const index = projects.indexOf(elem);
        projects.splice(index, 1);
        elem.remove();
        e.target.parentElement.parentElement.parentElement.style.display = "none";
    });

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(deleteButton);

    alertContainer.appendChild(alerth1);
    alertContainer.appendChild(alertp);
    alertContainer.appendChild(buttonContainer);

    alertModal.appendChild(alertContainer);
    
    content.appendChild(alertModal);
}

const createProjectButtons = function() {
    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.classList.add('project-btn-container');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', (e) => {
        const projectToDelete = e.target.parentElement.parentElement;
        createDeleteAlert(projectToDelete);
    });

    const todoButton = document.createElement('button');
    todoButton.classList.add('add-todo-btn');
    todoButton.value = "Add Todo";
    todoButton.textContent = "New To Do";
    todoButton.addEventListener('click', () => {

    });

    buttonContainerDiv.appendChild(deleteBtn);
    buttonContainerDiv.appendChild(todoButton);

    return buttonContainerDiv;
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
            newProjectElem.classList.add('gold');
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
        newProjectElem.appendChild(createProjectButtons());

    
        newProjectElem.addEventListener('click', () => {
            
            // open an editor (form) in the middle of the screen like google keep
            // use textareas? for the temporary title and details/notes section
            // use date picker input for the date
            // allow for adding To Dos ???
        })

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