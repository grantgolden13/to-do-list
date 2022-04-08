const projects = [];
const Project = function Project(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
}

export { projects, Project };