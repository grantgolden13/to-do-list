const createPrioritySelector = function() {
    const prioritySelectorLabel = document.createElement('label');
    prioritySelectorLabel.setAttribute('for', 'priority-input');
    
    const prioritySelector = document.createElement('select');
    prioritySelector.id = "priority-input";
    prioritySelector.classList.add('input', 'form-child');
    
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

    prioritySelector.appendChild(prioritySelectorLabel)
    prioritySelector.appendChild(prioritySelectorPlaceholder);
    prioritySelector.appendChild(priorityOptionHigh);
    prioritySelector.appendChild(priorityOptionHigher);
    prioritySelector.appendChild(priorityOptionHighest);

    return prioritySelector;
}

const createDueDateField = function() {
    const dateContainerDiv = document.createElement('div');
    dateContainerDiv.classList.add('form-child', 'date-container-div');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = "Due Date:";
    dueDateLabel.setAttribute('for', 'due-date-selector');

    const dueDate = document.createElement('input');
    dueDate.id = "due-date-selector";
    dueDate.type = "date";

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm; 
    }
    const todayFormatted = yyyy + '-' + mm + '-' + dd;
    dueDate.setAttribute('min',`${todayFormatted}`)
    dueDate.setAttribute('max', '2023-12-24');

    dateContainerDiv.appendChild(dueDateLabel);
    dateContainerDiv.appendChild(dueDate);

    return dateContainerDiv;
}

const createSubmitBtn = function() {
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Create";
    submitBtn.classList.add('submit-btn', 'form-child');
    submitBtn.addEventListener('click', () => {
        // should just be a function call. write the function wherever 
        // the constructor/factory is OR in events.js
        alert('submitted');
    });
    return submitBtn;
}

const createForm = function() {
    const newProjectForm = document.createElement('form');
    newProjectForm.classList.add('form');
    newProjectForm.name = "new-project-form";
    
    const formTitle = document.createElement('div');
    formTitle.textContent = "New Project";
    formTitle.classList.add('form-child');
    
    const nameInputLabel = document.createElement('label');
    nameInputLabel.setAttribute('for', 'name-input');
    
    const nameInput = document.createElement('input');
    nameInput.id = "name-input";
    nameInput.classList.add('input', 'form-child');
    nameInput.placeholder = "New Project Name";

    newProjectForm.appendChild(formTitle);
    newProjectForm.appendChild(nameInputLabel);
    newProjectForm.appendChild(nameInput);
    newProjectForm.appendChild(createPrioritySelector());
    newProjectForm.appendChild(createDueDateField());
    newProjectForm.appendChild(createSubmitBtn());

    return newProjectForm;
}

const createModal = function() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.appendChild(createForm());

    return modal;
}

const loadModal = function() {
    const content = document.getElementById('content');
    content.appendChild(createModal());
}

export default loadModal;