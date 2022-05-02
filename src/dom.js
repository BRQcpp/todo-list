export let domModule = 
(function()
{

    let mainContentDOM = (function()
    {
        function checkValidityTextEmpty(textInput)
        {
            if(textInput.validity.valueMissing)
            {
                textInput.setCustomValidity('Must consist at least one character');
                textInput.reportValidity();
                return false;
            }
            else 
                return true;
        }

        let editIcons = Array.from(document.querySelectorAll('.text-edit-button'));
        editIcons.forEach(editIcon => 
        {
            editIcon.addEventListener('click', () => 
            {
                editIconAddEventListeners(editIcon);
            });
        });
        function editIconAddEventListeners(editIcon)
        {
            if(!(editIcon.closest('.todo').classList.contains('done')))
            {
                let parent = editIcon.parentElement;
                let input = parent.querySelector('input');
                let contentDiv = parent.querySelector('#text-content');
                let img = editIcon.querySelector('img');
                if(editIcon.getAttribute('id') == 'read-mode')
                {
                    img.setAttribute('src', 'graphics/save-icon.png');
                    img.setAttribute('alt', 'save indicator icon');
                    editIcon.setAttribute('id', 'edit-mode');
                    contentDiv.style.setProperty('display', 'none');
                    input.style.removeProperty('display');
                    input.value = contentDiv.textContent;
                }
                else if(editIcon.getAttribute('id') == 'edit-mode')
                {
                    if(checkValidityTextEmpty(input) || input.getAttribute('validate-empty') == 'false')
                    {
                        contentDiv.textContent = input.value;
                        img.setAttribute('src', 'graphics/edit-icon.png');
                        img.setAttribute('alt', 'edit indicator icon');
                        editIcon.setAttribute('id', 'read-mode');
                        contentDiv.style.removeProperty('display');
                        input.style.setProperty('display', 'none');
                    }
                }
            }
        }

        let checkButtons = Array.from(document.querySelectorAll('.check-done-button')).filter( (cb) => {return cb.getAttribute('id') != 'mainCB'});
        checkButtons.forEach(checkButton => 
        {
            checkButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkButton);
            });
        });
        function checkButtonAddEventListeners(checkButton)
        {
            if(!(checkButton.closest('.todo').classList.contains('done')))
            {
                if(!(checkButton.classList.contains('checked')))
                {
                    checkButton.classList.add('checked');
                }
                else if(checkButton.classList.contains('checked'))
                {
                    checkButton.classList.remove('checked');
                }
            }
        }

        let mainCheckButtons = Array.from(document.querySelectorAll('#mainCB'));
        mainCheckButtons.forEach(checkButton => 
        {
            checkButton.addEventListener('click', () =>
            {
                mainCBAddEventListeners(checkButton);
            });
        });
        function mainCBAddEventListeners(checkButton)
        {
            let todo = checkButton.closest('div.todo');
            let dateInput = todo.querySelector('.ddate-input');
            if(checkButton.classList.contains('checked'))
            {
                checkButton.classList.remove('checked');
                todo.classList.remove('done');
                dateInput.removeAttribute('readonly');
            }
            else if(!(checkButton.classList.contains('checked')))
            {
                checkButton.classList.add('checked');
                let icon = todo.querySelector('.text-edit-button');
                if(icon.getAttribute('id') == 'edit-mode')
                    editIconAddEventListeners(icon);
                dateInput.setAttribute('readonly', '');
                todo.classList.add('done');
            }
        }

        let prioritySpinners = Array.from(document.querySelectorAll('.change-priority'));
        prioritySpinners.forEach(prioritySpinner => 
        {
            prioritySpinner.addEventListener('click', () =>
            {
                prioritySpinnersAddEventListeners(prioritySpinner);
            });
        });
        function prioritySpinnersAddEventListeners(prioritySpinner)
        {
            if(!(prioritySpinner.closest('.todo').classList.contains('done')))
            {
                let id = prioritySpinner.getAttribute('id');
                let priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-value');
                let value = priorityContent.textContent;

                if(id == 'subs')
                {
                    switch(value)
                    {
                        case 'low' : value = 'high'; break;
                        case 'normal' : value = 'low'; break;
                        case 'high' : value = 'normal'; break;
                    }
                }

                else if(id == 'add')
                {
                    switch(value)
                    {
                        case 'low' : value = 'normal'; break;
                        case 'normal' : value = 'high'; break;
                        case 'high' : value = 'low'; break;
                    }
                }
                priorityContent.textContent = value;
            }
        }

        let toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
        toggleButtons.forEach( (toggleButton) => 
        {
            toggleButton.addEventListener('click', () => {projectTogglesAddEventListeners(toggleButton)});
        });
        function projectTogglesAddEventListeners(toggleButton)
        {
            let elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable') .querySelectorAll(':scope > *');
            if(!(toggleButton.classList.contains('rotated')))
            {
                toggleButton.classList.add('rotated')
                elementsToToggle.forEach( (elementToToggle) =>
                {
                    elementToToggle.style.setProperty('display', 'none');
                });
            }
            else if(toggleButton.classList.contains('rotated'))
            {
                toggleButton.classList.remove('rotated')
                elementsToToggle.forEach( (elementToToggle) =>
                {
                    elementToToggle.style.removeProperty('display');
                });
            }
        }

        let addCheckboxButtons = Array.from(document.querySelectorAll('.add-checkbox'));
        addCheckboxButtons.forEach( addCheckboxButton =>
        {
            addCheckboxButton.addEventListener('click', () =>
            {
                addCheckboxButtonAction(addCheckboxButton);
            }); 
        });
        function addCheckboxButtonAction(addCheckboxButton) 
        {
            let checklist = addCheckboxButton.closest('.checklist');
            let titleInput = checklist.querySelector('.checkbox-title-input');

            if(checkValidityTextEmpty(titleInput))
            {
                let checkboxContainer = document.createElement('div');
                checkboxContainer.classList.add('checkbox-container');

                    let checkboxButton = document.createElement('div');
                    checkboxButton.classList.add('check-done-button');
                    checkButtons.push(checkboxButton);
                    checkboxButton.addEventListener('click', () => {checkButtonAddEventListeners(checkboxButton)});

                    let checkboxLabel = document.createElement('div');
                    checkboxLabel.classList.add('checkbox-label');

                    checkboxContainer.appendChild(checkboxButton);
                    checkboxContainer.appendChild(checkboxLabel);
                    checkboxLabel.textContent = titleInput.value;
                    titleInput.value = '';
    
                    checklist.insertBefore(checkboxContainer, checklist.querySelector('.create-checkbox'));
            }
        }

        let createButton = document.querySelector('.create-button');
        createButton.addEventListener('click', () =>
        {
            createButtonAction(createButton, document.querySelector('.project'))
        });
        function createButtonAction(createButton, parent)
        {
            let todo = createButton.closest('.set-todo').querySelector('.todo');
            let textInputs = todo.querySelectorAll('input[data-validate-empty="true"]');
            let isValid = true;
            for(let textInput of textInputs)
            {
                if(checkValidityTextEmpty(textInput) == false)
                {
                    isValid = false;
                    break;
                }
            }
            if(isValid)
            {
                parent.appendChild(createTodo(getTodoValues(todo)));
            }
        }
        function createTodo(todoValues)
        {
            let todo = document.createElement('div');
            todo.classList.add('todo');
            
                let todoMain = document.createElement('div');
                todoMain.classList.add('todo-main');

                    let todoTitle = document.createElement('div');
                    todoTitle.classList.add('todo-title');

                        let todoTitleContent = document.createElement('div');
                        todoTitleContent.classList.add('todo-title-content');
                        todoTitleContent.setAttribute('id', 'text-content');
                        todoTitleContent.textContent = todoValues.title;

                        let todoTitleInput = document.createElement('input');
                        todoTitleInput.classList.add('title-input');
                        todoTitleInput.setAttribute('type', 'text');
                        todoTitleInput.setAttribute('maxlength', '20');
                        todoTitleInput.setAttribute('style', 'display: none');
                        todoTitleInput.setAttribute('required', '');   

                        let titleEditButton = document.createElement('button');
                        titleEditButton.classList.add('text-edit-button');
                        titleEditButton.setAttribute('id', 'read-mode');
                        
                            let titleEditIcon = document.createElement('img');
                            titleEditIcon.classList.add('edit-icon');
                            titleEditIcon.setAttribute('src', '../dist/graphics/edit-icon.png');
                            titleEditIcon.setAttribute('alt', 'edit indicator icon');

                        editIcons.push(titleEditButton);
                        titleEditButton.addEventListener('click', () => editIconAddEventListeners(titleEditButton));

                        titleEditButton.appendChild(titleEditIcon);
                        todoTitle.appendChild(todoTitleContent);
                        todoTitle.appendChild(todoTitleInput);
                        todoTitle.appendChild(titleEditButton);


                    let todoDuedate = document.createElement('div');
                    todoDuedate.classList.add('todo-duedate');

                        let todoDuedateLabel = document.createElement('label');
                        todoDuedateLabel.classList.add('todo-label');
                        todoDuedateLabel.setAttribute('for', 'dueDate')
                        todoDuedateLabel.textContent = 'Due date';

                        let todoDuedateInput = document.createElement('input');
                        todoDuedateInput.classList.add('ddate-input');
                        todoDuedateInput.setAttribute('type', 'date')
                        todoDuedateInput.setAttribute('id', 'due-date')
                        todoDuedateInput.setAttribute('value', todoValues.dueDate);

                        todoDuedate.appendChild(todoDuedateLabel);
                        todoDuedate.appendChild(todoDuedateInput);
                    
                        
                    let todoPriorityContainer = document.createElement('div');
                    todoPriorityContainer.classList.add('todo-priority-container');

                        let changePrioritySubs = document.createElement('div');
                        changePrioritySubs.classList.add('change-priority', 'round-button')
                        changePrioritySubs.setAttribute('id', 'subs');
                        prioritySpinners.push(changePrioritySubs);
                        changePrioritySubs.addEventListener('click', () => prioritySpinnersAddEventListeners(changePrioritySubs));

                        let todoPriority = document.createElement('div');
                        todoPriority.classList.add('todo-priority')

                            let todoPriorityLabel = document.createElement('div');
                            todoPriorityLabel.classList.add('todo-label');
                            todoPriorityLabel.textContent = 'Priority';

                            let todoPriorityValue = document.createElement('div');
                            todoPriorityValue.classList.add('priority-value');
                            todoPriorityValue.textContent = todoValues.priority;
                        
                        let changePriorityAdd = document.createElement('div');
                        changePriorityAdd.classList.add('change-priority', 'round-button')
                        changePriorityAdd.setAttribute('id', 'add');
                        prioritySpinners.push(changePriorityAdd);
                        changePriorityAdd.addEventListener('click', () => prioritySpinnersAddEventListeners(changePriorityAdd));

                        todoPriority.appendChild(todoPriorityLabel);
                        todoPriority.appendChild(todoPriorityValue);
                        todoPriorityContainer.appendChild(changePrioritySubs);
                        todoPriorityContainer.appendChild(todoPriority);
                        todoPriorityContainer.appendChild(changePriorityAdd);
                    
                    let checkDone = document.createElement('div');
                    checkDone.classList.add('check-done');

                        let checkDoneButtonContainer = document.createElement('div');
                        checkDoneButtonContainer.classList.add('check-done-button-container');

                            let checkDoneButton = document.createElement('div');
                            checkDoneButton.classList.add('check-done-button');
                            checkDoneButton.setAttribute('id', 'mainCB')
                            mainCheckButtons.push(checkDoneButton);
                            checkDoneButton.addEventListener('click', () => { mainCBAddEventListeners(checkDoneButton)});
                        
                        checkDoneButtonContainer.appendChild(checkDoneButton);
                        checkDone.appendChild(checkDoneButtonContainer);
                    
                    todoMain.appendChild(todoTitle);
                    todoMain.appendChild(todoDuedate);
                    todoMain.appendChild(todoPriorityContainer);
                    todoMain.appendChild(checkDone);
                    

                let todoCheckList = document.createElement('div');
                todoCheckList.classList.add('todo-checklist');
                todoCheckList.setAttribute('id', 'toggle-container');

                    let checklistHeader = document.createElement('div');
                    checklistHeader.classList.add('checklist-header');

                        let checklistToggle = document.createElement('div');
                        checklistToggle.classList.add('toggle');

                            let checklistToggleImg = document.createElement('img');
                            checklistToggleImg.classList.add('toggle-img');
                            checklistToggleImg.setAttribute('src', '../dist/graphics/toggle.png');
                            checklistToggleImg.setAttribute('alt', 'icon of a toggle');
                        toggleButtons.push(checklistToggleImg);
                        checklistToggleImg.addEventListener('click', () => {projectTogglesAddEventListeners(checklistToggleImg)});

                        let checklistHeading = document.createElement('div');
                        checklistHeading.classList.add('checklist-heading');
                        checklistHeading.textContent = 'Checklist';

                    let checklist = document.createElement('div');
                    checklist.classList.add('checklist');
                    checklist.setAttribute('id', 'togglable');

                        for(let checkboxValue of todoValues.checkboxes)
                        {
                            let checkboxContainer = document.createElement('div');
                            checkboxContainer.classList.add('checkbox-container')

                                let checkboxDoneButton = document.createElement('div');
                                checkboxDoneButton.classList.add('check-done-button');
                                checkButtons.push(checkboxDoneButton);
                                checkboxDoneButton.addEventListener('click', () => { checkButtonAddEventListeners(checkboxDoneButton)});

                                let checkboxLabel = document.createElement('div');
                                checkboxLabel.classList.add('checkbox-label');
                                checkboxLabel.textContent = checkboxValue;

                                checkboxContainer.appendChild(checkboxDoneButton);
                                checkboxContainer.appendChild(checkboxLabel);
                                checklist.appendChild(checkboxContainer);
                        }

                    checklistToggle.appendChild(checklistToggleImg);
                    checklistHeader.appendChild(checklistToggle);
                    checklistHeader.appendChild(checklistHeading);
                    todoCheckList.appendChild(checklistHeader);
                    todoCheckList.appendChild(checklist);


                let todoDescriptionContainer = document.createElement('div');
                todoDescriptionContainer.classList.add('todo-description-container');

                    let todoDescription = document.createElement('div');
                    todoDescription.classList.add('todo-description');
                    todoDescription.setAttribute('id', 'text-content');
                    todoDescription.textContent = todoValues.description;

                    let descriptionInput = document.createElement('input');
                    descriptionInput.classList.add('description-input', 'todo-description');
                    descriptionInput.setAttribute('type', 'text');
                    descriptionInput.setAttribute('maxlength', '200');
                    descriptionInput.setAttribute('style', 'display: none');
                    descriptionInput.setAttribute('required', '');            
                    descriptionInput.setAttribute('validate-empty', 'false');            

                    let descriptionEditButton = document.createElement('button');
                    descriptionEditButton.classList.add('text-edit-button');
                    descriptionEditButton.setAttribute('id', 'read-mode');

                        let descriptionEditIcon = document.createElement('img');
                        descriptionEditIcon.classList.add('edit-icon');
                        descriptionEditIcon.setAttribute('src', '../dist/graphics/edit-icon.png');
                        descriptionEditIcon.setAttribute('alt', 'edit indicator icon');

                    editIcons.push(descriptionEditButton);
                    descriptionEditButton.addEventListener('click', () => { editIconAddEventListeners(descriptionEditButton)});


                    descriptionEditButton.appendChild(descriptionEditIcon);
                    todoDescriptionContainer.appendChild(todoDescription);    
                    todoDescriptionContainer.appendChild(descriptionInput);    
                    todoDescriptionContainer.appendChild(descriptionEditButton);    


                todo.appendChild(todoMain);
                todo.appendChild(todoCheckList);
                todo.appendChild(todoDescriptionContainer);
            
            return todo;
        }
        function getTodoValues(todo)
        {
            let title = todo.querySelector('.title-input').value;
            let dueDate = todo.querySelector('.ddate-input').value;
            let priority = todo.querySelector('.priority-value').textContent;

            let checkboxesElements = todo.querySelectorAll('.checkbox-label');
            let checkboxes = [];
            for(let checkbox of checkboxesElements)
            {
                checkboxes.push(checkbox.textContent);
            }

            let description = todo.querySelector('.description-input').value;

            return {
                title,
                dueDate,
                priority,
                checkboxes,
                description
            }
        }

        let closeSDButton = document.querySelector('#close-second-display');
        closeSDButton.addEventListener('click', () =>
        {
            closeSDButtonActions(closeSDButton) 
        });
        function closeSDButtonActions(closeSDButton) 
        {
            document.querySelector('.second-display').style.setProperty('display', 'none');
        }

       /* let addToElements = document.querySelectorAll('[data-adto="true"]');
        addToElements.forEach( (addToElement) => 
        {
            AddToFunction(addToElement);
        });


        let addFunctionButton = document.querySelector('.add-function');
        addFunctionButton.addEventListener('click', () => 
        {
            addToElements.forEach( (addToElement) =>
            {
                addToElement.addEventListener('click', () =>
                {
                    addToFunction();
                }, { once: true });
            });

        });
        function addToFunction(addToElement)
        {
            
        }

        let removeFunctionButton = document.querySelector('.remove-function'); */



        return {

        }

    })();

    return {
        
    }
}
)();