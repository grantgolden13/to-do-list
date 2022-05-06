import { createNewProject } from './events'

const createPrioritySelector = function() {
    const prioritySelectorLabel = document.createElement('label');
    prioritySelectorLabel.setAttribute('for', 'priority-input');
    
    const prioritySelector = document.createElement('select');
    prioritySelector.id = "priority-input";
    prioritySelector.classList.add('input', 'form-child');
    
    const prioritySelectorPlaceholder = document.createElement('option');
    prioritySelectorPlaceholder.textContent = "Priority Level";
    
    const priorityOptionHighest = document.createElement('option');
    priorityOptionHighest.value = "highest";
    priorityOptionHighest.textContent = "Highest";
    
    const priorityOptionHigher = document.createElement('option');
    priorityOptionHigher.value = "higher";
    priorityOptionHigher.textContent = "Higher";
    
    const priorityOptionHigh = document.createElement('option');
    priorityOptionHigh.value = "high";
    priorityOptionHigh.textContent = "High";

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
    dueDate.id = "due-date-input";
    dueDate.type = "date";

    // turn this into its own function or module

    var today = new Date();

    // format the date so HTML tag will properly read
    
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (date < 10) {
        date = '0' + date;
    }
    if (month < 10) {
        month = '0' + month; 
    }

    const todayFormatted = year + '-' + month + '-' + date;
    dueDate.setAttribute('min',`${todayFormatted}`)
    dueDate.setAttribute('max', '2023-12-24');

    dateContainerDiv.appendChild(dueDateLabel);
    dateContainerDiv.appendChild(dueDate);

    return dateContainerDiv;
}

const clearForm = function() {
    const inputs = document.querySelectorAll('input', 'select');

    // remove the Clear button from this nodelist so we don't clear its text
    const inputsArray = Array.from(inputs);
    inputsArray.pop();

    inputsArray.forEach(input => {
        input.value = "";
    });
    document.querySelector('.modal').style.display = "none";
}

const createSubmitBtn = function() {
    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Create";
    submitBtn.classList.add('submit-btn', 'form-child');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createNewProject();
        clearForm();
    });
    return submitBtn;
}

const createForm = function() {
    const newProjectForm = document.createElement('form');
    newProjectForm.classList.add('form');
    newProjectForm.name = "new-project-form";
    newProjectForm.action = "#";
    newProjectForm.method = "POST";
    newProjectForm.id = "new-project-form"
    
    const formTitle = document.createElement('div');
    formTitle.textContent = "New Project";
    formTitle.classList.add('form-child');
    
    const nameInputLabel = document.createElement('label');
    nameInputLabel.setAttribute('for', 'name-input');
    
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name-input";
    nameInput.classList.add('input', 'form-child');
    nameInput.placeholder = "New Project Name";
    nameInput.required = "required";

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