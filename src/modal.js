const createModal = function() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const newProjectForm = document.createElement('form');
    newProjectForm.classList.add('form');
    newProjectForm.name = "new-project-form";
    
    const formTitle = document.createElement('div');
    formTitle.textContent = "New Project";
    
    const nameInputLabel = document.createElement('label');
    nameInputLabel.for = "name-input";
    
    const nameInput = document.createElement('input');
    nameInput.id = "name-input";
    nameInput.classList.add('input');
    nameInput.placeholder = "Project Name";

    const prioritySelectorLabel = document.createElement('label');
    prioritySelectorLabel.for = "priority-input";
    
    const prioritySelector = document.createElement('select');
    prioritySelector.id = "priority-input";
    prioritySelector.classList.add('input');
    
    const prioritySelectorPlaceholder = document.createElement('option');
    prioritySelectorPlaceholder.value = "";
    prioritySelectorPlaceholder.textContent = "Priority Level";
    
    const priorityOptionHighest = document.createElement('option');
    priorityOptionHighest.value = "highest";
    priorityOptionHighest.textContent = "CRUCIAL";
    
    const priorityOptionHigher = document.createElement('option');
    priorityOptionHigher.value = "higher";
    priorityOptionHigher.textContent = "Important";
    
    const priorityOptionHigh = document.createElement('option');
    priorityOptionHigh.value = "high";
    priorityOptionHigh.textContent = "Ehh";
    
    prioritySelector.appendChild(prioritySelectorPlaceholder);
    prioritySelector.appendChild(prioritySelectorPlaceholder);
    prioritySelector.appendChild(priorityOptionHigh);
    prioritySelector.appendChild(priorityOptionHigher);
    prioritySelector.appendChild(priorityOptionHighest);
    prioritySelector.appendChild(prioritySelectorPlaceholder);

    newProjectForm.appendChild(formTitle);
    newProjectForm.appendChild(nameInputLabel);
    newProjectForm.appendChild(nameInput);
    newProjectForm.appendChild(prioritySelectorLabel);
    newProjectForm.appendChild(prioritySelector);

    modal.appendChild(newProjectForm);
    modal.style.display = "block";

    return modal;
}

const addEvent = function() {
    window.addEventListener('click', (e) => {
        const modal = document.getElementsByClassName('modal');
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
}

const loadModal = function() {
    const content = document.getElementById('content');
    content.appendChild(createModal());
    content.appendChild(addEvent());
}

export default loadModal;