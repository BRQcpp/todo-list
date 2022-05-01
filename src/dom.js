export let domModule = 
(function()
{

    let mainContentDOM = (function()
    {
        let editIcons = Array.from(document.querySelectorAll('.title-edit-icon'));
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
                let contentDiv = parent.querySelector('div.todo-title-content');
                let img = editIcon.querySelector('img');
                if(editIcon.getAttribute('id') == 'read-mode')
                {
                    img.setAttribute('src', 'graphics/save-icon.png');
                    img.setAttribute('alt', 'save indicator icon');
                    editIcon.setAttribute('id', 'edit-mode');
                    contentDiv.style.setProperty('display', 'none');
                    input.style.removeProperty('display');
                }
                else if(editIcon.getAttribute('id') == 'edit-mode')
                {
                    if(input.validity.valueMissing)
                    {
                        input.setCustomValidity('Must consist at least one character');
                        input.reportValidity();
                    }
                    else
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
                let icon = todo.querySelector('.title-edit-icon');
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
                let priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-input');
                let value = priorityContent.value;

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
                priorityContent.value = value;
            }
        }

        let toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
        toggleButtons.forEach( (toggleButton) => 
        {
            projectTogglesAddEventListeners(toggleButton);
        });
        function projectTogglesAddEventListeners(toggleButton)
        {
            let elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable') .querySelectorAll(':scope > *');
            toggleButton.addEventListener('click', () =>
            {
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
            });
        }

        let addToElements = document.querySelectorAll('[data-adto="true"]');
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

        let removeFunctionButton = document.querySelector('.remove-function');



        return {

        }

    })();

    return {
        
    }
}
)();