const projects = [];

const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
}

const createDefaultProject = function() {
    const defaultProjectObj = new Project("default project", "high", "2022-04-20");
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
    
        newProjectElem.appendChild(projectName);
        newProjectElem.appendChild(projectDueDate);
    
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