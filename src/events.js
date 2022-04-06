const promptModal = function() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";

    window.addEventListener('dblclick', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
};

const createNewProject = function() {
    const projectName = document.getElementById('name-input').value;
    const projectPriority = document.getElementById('priority-input').value;
    const projectDueDate = document.getElementById('due-date-input').value;
    console.log(projectName, projectPriority, projectDueDate);
}

export { promptModal, createNewProject };