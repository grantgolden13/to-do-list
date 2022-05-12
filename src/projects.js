const content = document.getElementById('content');
const projects = [];

const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
}

const Todo = function Todo(name, priority, details, dueDate) {
    this.name = name;
    this.priority = priority;
    this.details = details;
    this.dueDate = dueDate;
}

const newTodoModal = function() {

    // probably not in the right place but it's where i found it works

    window.addEventListener('click', (e) => {
        const todoModal = document.querySelector('.todo-modal');
        if (e.target == todoModal) {
            todoModal.remove();
        }
    });

    const todoModal = document.createElement('div');
    todoModal.classList.add('todo-modal');

    const newTodoContainer = document.createElement('div');
    newTodoContainer.classList.add('todo-container');

    const newTodoHeading = document.createElement('h1');
    newTodoHeading.textContent = "New ToDo Item";

    const newTodoForm = document.createElement('form');
    newTodoForm.classList.add('todo-form');
    newTodoForm.id = "new-todo-form";
    newTodoForm.method = "post";
    newTodoForm.action = "#";

    const newTodoNameLabel = document.createElement('label');
    newTodoNameLabel.textContent = "Item:";
    newTodoNameLabel.for = "new-todo-name";

    const newTodoName = document.createElement('input');
    newTodoName.id = "new-todo-name";
    newTodoName.placeholder = "'wash the dishes'";
    newTodoName.required = "required";

    const newTodoDetailsLabel = document.createElement('label');
    newTodoDetailsLabel.textContent = "Details/Notes:"
    newTodoDetailsLabel.for = "new-todo-details";
    
    const newTodoDetails = document.createElement('textarea');
    newTodoDetails.id = "new-todo-details";

    const newTodoDueDateLabel = document.createElement('label');
    newTodoDueDateLabel.textContent = "Due Date:";
    newTodoDueDateLabel.for = "new-todo-date";

    const newTodoDueDate = document.createElement('input');
    newTodoDueDate.type = 'date';
    newTodoDueDate.id = "new-todo-date";
    newTodoDueDate.required = "";

    const todoButtonContainer = document.createElement('div');
    todoButtonContainer.classList.add('todo-btn-container');

    const cancelTodoButton = document.createElement('button');
    cancelTodoButton.classList.add('cancel-todo');
    cancelTodoButton.textContent = "Cancel";
    cancelTodoButton.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    });

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo');
    addTodoButton.textContent = "Save";
    addTodoButton.type = "submit";
    addTodoButton.setAttribute('form', 'new-todo-form');
    addTodoButton.addEventListener('click', (e) => {
        const todosContainer = document.querySelector('.todos-container');
        
        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todo-div');
        
        const newTodoNameValue = document.createElement('div');
        newTodoNameValue.textContent = document.getElementById('new-todo-name').value;

        const newTodoDueDateValue = document.createElement('div');
        newTodoDueDateValue.textContent = document.getElementById('new-todo-date').value;

        newTodoDiv.appendChild(newTodoNameValue);
        newTodoDiv.appendChild(newTodoDueDateValue);

        todosContainer.appendChild(newTodoDiv);

        e.target.parentElement.parentElement.parentElement.remove();
    });

    todoButtonContainer.appendChild(cancelTodoButton);
    todoButtonContainer.appendChild(addTodoButton);

    newTodoForm.appendChild(newTodoNameLabel);
    newTodoForm.appendChild(newTodoName);
    newTodoForm.appendChild(newTodoDetailsLabel);
    newTodoForm.appendChild(newTodoDetails);
    newTodoForm.appendChild(newTodoDueDateLabel);
    newTodoForm.appendChild(newTodoDueDate);

    newTodoContainer.appendChild(newTodoHeading);
    newTodoContainer.appendChild(newTodoForm);
    newTodoContainer.appendChild(todoButtonContainer);

    todoModal.appendChild(newTodoContainer);

    content.appendChild(todoModal);
}

const createDeleteAlert = function(elem) {
    const alertModal = document.createElement('div');
    alertModal.classList.add('delete-modal');

    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');

    const alerth1 = document.createElement('h1');
    alerth1.textContent = "CAUTION";

    const alertp = document.createElement('p');
    alertp.textContent = "Are you sure you want to delete this project? " + 
        "This action cannot be undone.";
    
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
        newTodoModal()
        
        // just need title field and due date
        // then add edit button and trash button
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
        newProjectElem.appendChild(projectTodosContainer);
        newProjectElem.appendChild(createProjectButtons());
    
        newProjectElem.addEventListener('click', () => {
            
            // open an editor (form) in the middle of the screen like google keep
            // use textareas? for the temporary title and details/notes section
            // use date picker input for the date
            // allow for adding To Dos ???
        });

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

export { projects, Project, loadProjects, renderProjectsToDOM, Todo };