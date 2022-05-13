import logicModule from './logic';
import saveIcon from './graphics/save-icon.png';
import editIcon2 from './graphics/edit-icon.png';
import toggleImg from './graphics/toggle.png';

const domModule = (function ()
{
    function adjustElementToWindowSize()
    {
        const width = window.innerWidth || document.documentElement.clientWidth
        || document.body.clientWidth;
        const content = document.querySelector('.content');
        if (width < 600)
        {
            content.style.setProperty('margin-left', '25px');
            content.style.setProperty('width', '100%');
        }
        else if (content.style.getPropertyValue('margin-left') !== '325px'
            && document.querySelector('.toggle-menu-icon').style.getPropertyValue('transform') !== 'rotate(-90deg)')
        {
            content.style.setProperty('margin-left', '325px');
        }
    }

    adjustElementToWindowSize();

    window.addEventListener('resize', () =>
    {
        adjustElementToWindowSize();
    }, true);

    const toggleMenu = document.querySelector('.toggle-menu');
    toggleMenu.addEventListener('click', () =>
    {
        const toggleIcon = toggleMenu.querySelector('.toggle-menu-icon');
        if (toggleIcon.style.getPropertyValue('transform') === 'rotate(90deg)')
        {
            toggleIcon.style.setProperty('transform', 'rotate(-90deg)');
            const content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 25px)');
            content.style.setProperty('margin-left', '25px');
            toggleMenu.closest('.side-menu').style.setProperty('transform', 'translateX(-300px)');
        }
        else
        {
            toggleIcon.style.setProperty('transform', 'rotate(90deg)');
            const content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 325px)');
            content.style.setProperty('margin-left', '325px');
            toggleMenu.closest('.side-menu').style.removeProperty('transform');
            adjustElementToWindowSize();
        }
    });

    let addFunctionOn = false;
    let removeFunctionOn = false;

    const periodDateInputs = document.querySelector('.set-period').querySelectorAll('input[type="date"]');
    let today = new Date();
    today = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    periodDateInputs.forEach((input) =>
    {
        input.value = today;
        input.addEventListener('change', () =>
        {
            periodDateInputChangeAction();
        });
    });
    periodDateInputChangeAction();
    function periodDateInputChangeAction()
    {
        const from = periodDateInputs[0].value;
        const to = periodDateInputs[1].value;
        let todosInPeriod = [];
        const elementContent = document.querySelector('.todo-period-list').querySelector('.element-content');
        if (from <= to)
        {
            todosInPeriod = logicModule.todos.filter((todo) => (todo.duedate >= from
                && todo.duedate <= to));
            if (todosInPeriod.length !== 0)
            {
                elementContent.textContent = '';
                todosInPeriod.forEach((todo) =>
                {
                    const newTodo = createProjectElement(-1, todo);
                    newTodo.addEventListener('click', () =>
                    {
                        addToElementAction(document.querySelector(`[data-id="${todo.route[todo.route.length - 1]}"]`));
                    });
                });
            }
        }
        else
        {
            elementContent.textContent = '-';
        }
    }
    function periodCheckRemoved()
    {
        const container = document.querySelector('.todo-period-list').querySelector('.element-content');

        if (container.lastChild)
        {
            const elements = container.querySelectorAll('.project-category-header');
            const directory = document.querySelector('.directory');
            for (let i = 0; i < elements.length; i++)
            {
                const id = +elements[i].getAttribute('data-id');
                if (!(directory.querySelector(`[data-id="${id}"]`)))
                {
                    container.removeChild(elements[i]);
                }
            }

            if (!(container.lastChild))
            {
                container.textContent = '-';
            }
        }
    }

    function checkValidityTextEmpty(textInput)
    {
        if (textInput.validity.valueMissing)
        {
            textInput.setCustomValidity('Must consist at least one character');
            textInput.reportValidity();
            return false;
        }
        return true;
    }

    const editIcons = Array.from(document.querySelectorAll('.text-edit-button'));
    editIcons.forEach((editIcon) =>
    {
        editIcon.addEventListener('click', () =>
        {
            editIconAddEventListeners(editIcon);
        });
    });
    function editIconAddEventListeners(editIcon)
    {
        const parent = editIcon.parentElement;
        const input = parent.querySelector('input');
        const contentDiv = parent.querySelector('#text-content');
        const img = editIcon.querySelector('img');
        if (editIcon.getAttribute('id') === 'read-mode')
        {
            img.setAttribute('src', saveIcon);
            img.setAttribute('alt', 'save indicator icon');
            editIcon.setAttribute('id', 'edit-mode');
            contentDiv.style.setProperty('display', 'none');
            input.style.removeProperty('display');
            input.value = contentDiv.textContent;
        }
        else if (editIcon.getAttribute('id') === 'edit-mode')
        {
            if (checkValidityTextEmpty(input) || input.getAttribute('validate-empty') == 'false')
            {
                contentDiv.textContent = input.value;
                img.setAttribute('src', editIcon2);
                img.setAttribute('alt', 'edit indicator icon');
                editIcon.setAttribute('id', 'read-mode');
                contentDiv.style.removeProperty('display');
                input.style.setProperty('display', 'none');
            }
        }
    }

    const checkButtons = Array.from(document.querySelectorAll('.check-done-button')).filter((cb) => cb.getAttribute('id') != 'mainCB');
    checkButtons.forEach((checkButton) =>
    {
        checkButton.addEventListener('click', () =>
        {
            checkButtonAddEventListeners(checkButton);
        });
    });
    function checkButtonAddEventListeners(checkButton)
    {
        if (!(checkButton.classList.contains('checked')))
        {
            checkButton.classList.add('checked');
        }
        else if (checkButton.classList.contains('checked'))
        {
            checkButton.classList.remove('checked');
        }
    }

    const mainCheckButtons = Array.from(document.querySelectorAll('#mainCB'));
    mainCheckButtons.forEach((checkButton) =>
    {
        checkButton.addEventListener('click', () =>
        {
            mainCBAddEventListeners(checkButton);
        });
    });
    function mainCBAddEventListeners(checkButton)
    {
        const todo = checkButton.closest('div.todo');
        const dateInput = todo.querySelector('.ddate-input');
        if (checkButton.classList.contains('checked'))
        {
            checkButton.classList.remove('checked');
            todo.classList.remove('done');
            dateInput.removeAttribute('readonly');
        }
        else if (!(checkButton.classList.contains('checked')))
        {
            checkButton.classList.add('checked');
            const icons = todo.querySelectorAll('.text-edit-button');
            icons.forEach((icon) =>
            {
                if (icon.getAttribute('id') === 'edit-mode')
                {
                    editIconAddEventListeners(icon);
                }
            });
            dateInput.setAttribute('readonly', '');
            todo.classList.add('done');
        }
    }

    const prioritySpinners = Array.from(document.querySelectorAll('.change-priority'));
    prioritySpinners.forEach((prioritySpinner) =>
    {
        prioritySpinner.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(prioritySpinner);
        });
    });
    function prioritySpinnersAddEventListeners(prioritySpinner)
    {
        const id = prioritySpinner.getAttribute('id');
        const priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-value');
        let value = priorityContent.textContent;

        if (id === 'subs')
        {
            switch (value)
            {
                case 'low': value = 'high'; break;
                case 'normal': value = 'low'; break;
                case 'high': value = 'normal'; break;
            }
        }

        else if (id === 'add')
        {
            switch (value)
            {
                case 'low': value = 'normal'; break;
                case 'normal': value = 'high'; break;
                case 'high': value = 'low'; break;
            }
        }
        priorityContent.textContent = value;
    }

    const toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
    toggleButtons.forEach((toggleButton) =>
    {
        toggleButton.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(toggleButton);
        });
    });
    function projectTogglesAddEventListeners(toggleButton)
    {
        const elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable').querySelectorAll(':scope > *');
        if (!(toggleButton.classList.contains('rotated')))
        {
            toggleButton.classList.add('rotated');
            elementsToToggle.forEach((elementToToggle) =>
            {
                elementToToggle.style.setProperty('display', 'none');
            });
        }
        else if (toggleButton.classList.contains('rotated'))
        {
            toggleButton.classList.remove('rotated');
            elementsToToggle.forEach((elementToToggle) =>
            {
                elementToToggle.style.removeProperty('display');
            });
        }
    }

    const addCheckboxButtons = Array.from(document.querySelectorAll('.add-checkbox'));
    addCheckboxButtons.forEach((addCheckboxButton) =>
    {
        addCheckboxButton.addEventListener('click', () =>
        {
            addCheckboxButtonAction(addCheckboxButton);
        });
    });
    function addCheckboxButtonAction(addCheckboxButton)
    {
        const checklistContainer = addCheckboxButton.closest('.checklist-container');
        const checklist = checklistContainer.querySelector('.checklist');
        const titleInput = checklistContainer.querySelector('.checkbox-title-input');

        if (checkValidityTextEmpty(titleInput))
        {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');

            const checkboxButton = document.createElement('div');
            checkboxButton.classList.add('check-done-button');
            checkButtons.push(checkboxButton);
            checkboxButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkboxButton);
            });

            const checkboxLabel = document.createElement('div');
            checkboxLabel.classList.add('checkbox-label');

            checkboxContainer.appendChild(checkboxButton);
            checkboxContainer.appendChild(checkboxLabel);
            checkboxLabel.textContent = titleInput.value;
            titleInput.value = '';

            checklist.insertBefore(checkboxContainer, checklist.querySelector('.create-checkbox'));
        }
    }

    const closeSDButton = document.querySelector('#close-second-display');
    closeSDButton.addEventListener('click', () =>
    {
        closeSDButtonActions();
    });
    function closeSDButtonActions()
    {
        document.querySelector('.second-display').style.setProperty('display', 'none');
    }

    generateDirectory(logicModule.root); //! !!

    const addToElements = Array.from(document.querySelectorAll('.category')).concat(Array.from(document.querySelectorAll('.project')));
    addToElements.forEach((addToElement) =>
    {
        addToElement.addEventListener('mousedown', (e) =>
        {
            addToElementAction(addToElement);
            e.stopPropagation();
        });
    });
    function addToElementAction(addToElement)
    {
        if (addFunctionOn === false && removeFunctionOn === false)
        {
            const lastDisplayed = document.querySelector('[data-displayed="true"]');
            if (lastDisplayed)
            {
                lastDisplayed.removeAttribute('data-displayed');
            }
            addToElement.setAttribute('data-displayed', 'true');
            generateDirectoryElement(addToElement);
        }
    }
    function generateDirectoryElement(addToElement)
    {
        const mainSection = document.querySelector('.main-section-window');
        const subSection = mainSection.querySelector('.sub-section');
        if (subSection.lastChild)
        {
            removeChildren(subSection);
        }
        addToElement = logicModule.findByID(getElementRoute(addToElement));
        mainSection.querySelector('.main-section-heading').textContent = addToElement.title;
        addToElement.contents.forEach((element) =>
        {
            if (element.constructor.name === 'Project')
            {
                const project = document.createElement('div');
                project.classList.add('project');
                project.setAttribute('id', 'toggle-container');

                const subHeading = document.createElement('div');
                subHeading.classList.add('sub-heading');

                const toggle = document.createElement('div');
                toggle.classList.add('toggle');

                const toggleIcon = document.createElement('img');
                toggleIcon.classList.add('toggle-img');
                toggleIcon.setAttribute('src', toggleImg);
                toggleIcon.setAttribute('alt', 'icon of a toggle');
                toggleButtons.push(toggleImg);
                toggleIcon.addEventListener('click', () =>
                {
                    projectTogglesAddEventListeners(toggleIcon);
                });

                toggle.appendChild(toggleIcon);

                const heading = document.createElement('div');
                heading.classList.add('heading');
                heading.textContent = element.title;

                subHeading.appendChild(toggle);
                subHeading.appendChild(heading);

                const todoList = document.createElement('div');
                todoList.classList.add('todo-list');
                todoList.setAttribute('id', 'togglable');

                element.contents.forEach((todo) =>
                {
                    const newTodo = createTodo(todo);
                    todoList.appendChild(newTodo);
                });

                project.appendChild(subHeading);
                project.appendChild(todoList);

                document.querySelector('.sub-section').appendChild(project);
            }
            else if (element.constructor.name === 'Category')
            {
                const subHeading = document.createElement('div');
                subHeading.classList.add('sub-heading');
                subHeading.addEventListener('click', () =>
                {
                    const { id } = element;
                    generateDirectoryElement(document.querySelector(`[data-id="${id}"`));
                });

                const heading = document.createElement('div');
                heading.classList.add('heading');
                heading.textContent = element.title;

                subHeading.appendChild(heading);
                document.querySelector('.sub-section').appendChild(subHeading);
            }
            else
            {
                const todo = createTodo(element);
                subSection.appendChild(todo);
                todo.querySelector('.ddate-input').value = element.duedate;
            }
        });
    }

    const addFunctionButton = document.querySelector('.add-function');
    addFunctionButton.addEventListener('click', () =>
    {
        addFunction(addToElements);
    });
    function addFunction(addToElements)
    {
        if (addFunctionOn === false)
        {
            if (removeFunctionOn == true)
            {
                turnOffRemoveFunction(removeElements);
            }
            addFunctionOn = true;
            addToElements.forEach((addToElement) =>
            {
                addToElement.querySelector('.project-category-title').classList.add('green-text-element');

                addToElement.addEventListener('click', (e) =>
                {
                    if (addFunctionOn === true)
                    {
                        const route = getElementRoute(addToElement);
                        const parent = logicModule.findByID(route);
                        generateElementMenu(parent, addToElement, route);
                        turnOffAddFunction(addToElements);
                        e.stopPropagation();
                    }
                });
            });
        }
        else
        {
            turnOffAddFunction(addToElements);
        }
    }
    function turnOffAddFunction(addToElements)
    {
        addFunctionOn = false;
        addToElements.forEach((addToElement) =>
        {
            addToElement.querySelector('.project-category-title').classList.remove('green-text-element');
        });
    }
    function setSecondDisplay()
    {
        document.querySelector('.second-display').style.removeProperty('display', 'none');
    }
    function generateElementMenu(parent, container, route)
    {
        setSecondDisplay();
        let option;
        const { canContent } = parent;
        const menu = document.querySelector('.select-element-menu');
        menu.style.removeProperty('display', 'none');
        canContent.forEach((content) =>
        {
            option = document.createElement('button');
            option.classList.add('sem-option');
            option.textContent = content;
            option.addEventListener('click', () =>
            {
                menu.style.setProperty('display', 'none');
                const createButton = document.querySelector('.create-button');
                createButton.style.removeProperty('display');
                if (content === 'category' || content === 'project')
                {
                    const titleInputMenu = document.querySelector('.set-category-project-title');
                    titleInputMenu.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        titleInputMenu.querySelector('.set-c-p-input').value = '';
                        titleInputMenu.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(createButton, parent, content, container, route);
                    }, { once: true });
                }
                else
                {
                    const todo = document.querySelector('.second-display').querySelector('.todo');
                    todo.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        clearAddTodo(todo);
                        todo.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(
                            createButton,
                            parent,
                            content,
                            container,
                            route,
                            getTodoValues(todo),
                        );
                    }, { once: true });
                }
            });
            menu.appendChild(option);
        });
        closeSDButton.addEventListener('click', () =>
        {
            removeChildren(menu);
        }, { once: true });
        return menu;
    }
    function removeChildren(parent)
    {
        const removed = [];
        while (parent.firstChild)
        {
            removed.push(parent.lastChild);
            parent.removeChild(parent.lastChild);
        }
        return removed;
    }
    function generateDirectory(directory)
    {
        const directoryContent = directory.contents;

        directoryContent.forEach((element) =>
        {
            if (element.canContent)
            {
                if (element.canContent
                    [0] == 'project')
                {
                    createCategory(directory, element);
                }
                else if (element.canContent[0] === 'todo')
                {
                    createProject(directory, element);
                }
                generateDirectory(element);
            }
            else
            {
                createProjectElement(directory.id, element);
            }
        });
    }
    function createElementContainer(directory, element)
    {
        const elementContainer = document.createElement('div');
        elementContainer.setAttribute('id', 'toggle-container');
        elementContainer.setAttribute('data-id', element.id);
        elementContainer.setAttribute('data-adto', 'true');

        const header = document.createElement('div');
        header.classList.add('project-category-header');

        const toggle = document.createElement('div');
        toggle.classList.add('toggle');

        const toggleIcon = document.createElement('img');
        toggleIcon.classList.add('toggle-img');
        toggleIcon.setAttribute('src', toggleImg);
        toggleIcon.setAttribute('alt', 'icon of a toggle');
        toggleButtons.push(toggleIcon);
        toggleIcon.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(toggleIcon);
        });

        const icon = document.createElement('div');
        icon.classList.add('category-project-icon');

        const title = document.createElement('div');
        title.classList.add('project-category-title');
        title.textContent = element.title;

        const elementContainerContent = document.createElement('div');
        elementContainerContent.classList.add('element-content');
        elementContainerContent.setAttribute('id', 'togglable');

        toggle.appendChild(toggleIcon);
        header.appendChild(toggle);
        header.appendChild(icon);
        header.appendChild(title);
        elementContainer.appendChild(header);
        elementContainer.appendChild(elementContainerContent);

        const parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.element-content');
        parent.appendChild(elementContainer);

        return elementContainer;
    }
    function createCategory(directory, element)
    {
        const category = createElementContainer(directory, element);
        category.classList.add('category');
        category.querySelector('.category-project-icon').textContent = 'C';
        return category;
    }
    function createProject(directory, element)
    {
        const project = createElementContainer(directory, element);
        project.classList.add('project');
        project.querySelector('.category-project-icon').textContent = 'P';
        return project;
    }
    function createProjectElement(directory, element)
    {
        const projectElementHeader = document.createElement('div');
        projectElementHeader.classList.add('project-category-header');
        projectElementHeader.setAttribute('data-element', 'todo');
        projectElementHeader.setAttribute('data-id', element.id);

        const projectElementIcon = document.createElement('div');
        projectElementIcon.classList.add('category-project-icon');
        projectElementIcon.textContent = 'T';

        const projectElementTitle = document.createElement('div');
        projectElementTitle.classList.add('project-category-title');
        projectElementTitle.textContent = element.title;

        projectElementHeader.appendChild(projectElementIcon);
        projectElementHeader.appendChild(projectElementTitle);

        const parent = document.querySelector(`[data-id="${directory}"]`).querySelector('.element-content');
        parent.appendChild(projectElementHeader);

        return projectElementHeader;
    }
    function clearAddTodo(todo)
    {
        todo.querySelector('.title-input').value = '';
        todo.querySelector('.ddate-input').value = '';
        todo.querySelector('.priority-value').value = 'normal';
        todo.querySelector('.description-input').value = '';
        const checklist = todo.querySelector('.checklist');
        const checkboxes = checklist.querySelectorAll('.checkbox-container');
        checkboxes.forEach((checkbox) =>
        {
            checklist.removeChild(checkbox);
        });
    }
    function createTodo(todoValues)
    {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const todoMain = document.createElement('div');
        todoMain.classList.add('todo-main');

        const todoTitle = document.createElement('div');
        todoTitle.classList.add('todo-title');

        const todoTitleContent = document.createElement('div');
        todoTitleContent.classList.add('todo-title-content');
        todoTitleContent.setAttribute('id', 'text-content');
        todoTitleContent.textContent = todoValues.title;

        const todoTitleInput = document.createElement('input');
        todoTitleInput.classList.add('title-input');
        todoTitleInput.setAttribute('type', 'text');
        todoTitleInput.setAttribute('maxlength', '20');
        todoTitleInput.setAttribute('style', 'display: none');
        todoTitleInput.setAttribute('required', '');
        todoTitleInput.addEventListener('change', () =>
        {
            todoValues.title = todoTitleInput.value;
        });

        const titleEditButton = document.createElement('button');
        titleEditButton.classList.add('text-edit-button');
        titleEditButton.setAttribute('id', 'read-mode');

        const titleEditIcon = document.createElement('img');
        titleEditIcon.classList.add('edit-icon');
        titleEditIcon.setAttribute('src', editIcon2);
        titleEditIcon.setAttribute('alt', 'edit indicator icon');

        editIcons.push(titleEditButton);
        titleEditButton.addEventListener('click', () =>
        {
            editIconAddEventListeners(titleEditButton);
        });

        titleEditButton.appendChild(titleEditIcon);
        todoTitle.appendChild(todoTitleContent);
        todoTitle.appendChild(todoTitleInput);
        todoTitle.appendChild(titleEditButton);

        const todoDuedate = document.createElement('div');
        todoDuedate.classList.add('todo-duedate');

        const todoDuedateLabel = document.createElement('label');
        todoDuedateLabel.classList.add('todo-label');
        todoDuedateLabel.setAttribute('for', 'dueDate');
        todoDuedateLabel.textContent = 'Due date';

        const todoDuedateInput = document.createElement('input');
        todoDuedateInput.classList.add('ddate-input');
        todoDuedateInput.setAttribute('type', 'date');
        todoDuedateInput.setAttribute('id', 'due-date');
        const dateValue = todoValues.duedate;
        todoDuedateInput.value = dateValue;
        todoDuedateInput.addEventListener('change', () =>
        {
            todoValues.duedate = todoDuedateInput.value;
            periodDateInputChangeAction();
        });

        todoDuedate.appendChild(todoDuedateLabel);
        todoDuedate.appendChild(todoDuedateInput);

        const todoPriorityContainer = document.createElement('div');
        todoPriorityContainer.classList.add('todo-priority-container');

        const changePrioritySubs = document.createElement('div');
        changePrioritySubs.classList.add('change-priority', 'round-button');
        changePrioritySubs.setAttribute('id', 'subs');
        prioritySpinners.push(changePrioritySubs);
        changePrioritySubs.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(changePrioritySubs);
            todoValues.priority = changePrioritySubs.closest('.todo-priority-container').querySelector('.priority-value').textContent;
        });

        const todoPriority = document.createElement('div');
        todoPriority.classList.add('todo-priority');

        const todoPriorityLabel = document.createElement('div');
        todoPriorityLabel.classList.add('todo-label');
        todoPriorityLabel.textContent = 'Priority';

        const todoPriorityValue = document.createElement('div');
        todoPriorityValue.classList.add('priority-value');
        todoPriorityValue.textContent = todoValues.priority;

        const changePriorityAdd = document.createElement('div');
        changePriorityAdd.classList.add('change-priority', 'round-button');
        changePriorityAdd.setAttribute('id', 'add');
        prioritySpinners.push(changePriorityAdd);
        changePriorityAdd.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(changePriorityAdd);
            todoValues.priority = changePriorityAdd.closest('.todo-priority-container').querySelector('.priority-value').textContent;
        });

        todoPriority.appendChild(todoPriorityLabel);
        todoPriority.appendChild(todoPriorityValue);
        todoPriorityContainer.appendChild(changePrioritySubs);
        todoPriorityContainer.appendChild(todoPriority);
        todoPriorityContainer.appendChild(changePriorityAdd);

        const checkDone = document.createElement('div');
        checkDone.classList.add('check-done');

        const checkDoneButtonContainer = document.createElement('div');
        checkDoneButtonContainer.classList.add('check-done-button-container');

        const checkDoneButton = document.createElement('div');
        checkDoneButton.classList.add('check-done-button');
        checkDoneButton.setAttribute('id', 'mainCB');
        mainCheckButtons.push(checkDoneButton);
        checkDoneButton.addEventListener('click', () =>
        {
            mainCBAddEventListeners(checkDoneButton);
        });

        checkDoneButtonContainer.appendChild(checkDoneButton);
        checkDone.appendChild(checkDoneButtonContainer);

        todoMain.appendChild(todoTitle);
        todoMain.appendChild(todoDuedate);
        todoMain.appendChild(todoPriorityContainer);
        todoMain.appendChild(checkDone);

        const todoCheckList = document.createElement('div');
        todoCheckList.classList.add('todo-checklist');
        todoCheckList.setAttribute('id', 'toggle-container');

        const checklistHeader = document.createElement('div');
        checklistHeader.classList.add('checklist-header');

        const checklistToggle = document.createElement('div');
        checklistToggle.classList.add('toggle');

        const checklistToggleImg = document.createElement('img');
        checklistToggleImg.classList.add('toggle-img');
        checklistToggleImg.setAttribute('src', toggleImg);
        checklistToggleImg.setAttribute('alt', 'icon of a toggle');
        toggleButtons.push(checklistToggleImg);
        checklistToggleImg.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(checklistToggleImg);
        });

        const checklistHeading = document.createElement('div');
        checklistHeading.classList.add('checklist-heading');
        checklistHeading.textContent = 'Checklist';

        const checklistContainer = document.createElement('div');
        checklistContainer.classList.add('checklist-container');
        checklistContainer.setAttribute('id', 'togglable');

        const checklist = document.createElement('div');
        checklist.classList.add('checklist');

        todoValues.checkboxes.forEach((checkboxValue) =>
        {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');

            const checkboxDoneButton = document.createElement('div');
            checkboxDoneButton.classList.add('check-done-button');
            checkButtons.push(checkboxDoneButton);
            checkboxDoneButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkboxDoneButton);
            });

            const checkboxLabel = document.createElement('div');
            checkboxLabel.classList.add('checkbox-label');
            checkboxLabel.textContent = checkboxValue;

            checkboxContainer.appendChild(checkboxDoneButton);
            checkboxContainer.appendChild(checkboxLabel);
            checklist.appendChild(checkboxContainer);
        });

        const createCheckbox = document.createElement('div');
        createCheckbox.classList.add('create-checkbox');

        const checkboxTitleInput = document.createElement('input');
        checkboxTitleInput.classList.add('checkbox-title-input');
        checkboxTitleInput.setAttribute('type', 'text');
        checkboxTitleInput.setAttribute('minlength', '1');
        checkboxTitleInput.setAttribute('placeholder', 'checkbox title');
        checkboxTitleInput.setAttribute('maxlength', '30');
        checkboxTitleInput.setAttribute('id', 'checklist-create');
        checkboxTitleInput.setAttribute('required', '');

        const addCheckboxButton = document.createElement('button');
        addCheckboxButton.classList.add('add-checkbox', 'round-button');
        addCheckboxButton.setAttribute('id', 'add');
        addCheckboxButtons.push(addCheckboxButton);
        addCheckboxButton.addEventListener('click', () =>
        {
            todoValues.checkboxes.push(addCheckboxButton.closest('.create-checkbox').querySelector('.checkbox-title-input').value);
            addCheckboxButtonAction(addCheckboxButton);
        });

        createCheckbox.appendChild(checkboxTitleInput);
        createCheckbox.appendChild(addCheckboxButton);

        checklistToggle.appendChild(checklistToggleImg);
        checklistHeader.appendChild(checklistToggle);
        checklistHeader.appendChild(checklistHeading);
        todoCheckList.appendChild(checklistHeader);
        checklistContainer.appendChild(checklist);
        checklistContainer.appendChild(createCheckbox);
        todoCheckList.appendChild(checklistContainer);

        const todoDescriptionContainer = document.createElement('div');
        todoDescriptionContainer.classList.add('todo-description-container');

        const todoDescription = document.createElement('div');
        todoDescription.classList.add('todo-description');
        todoDescription.setAttribute('id', 'text-content');
        todoDescription.textContent = todoValues.description;

        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('description-input', 'todo-description');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('maxlength', '200');
        descriptionInput.setAttribute('style', 'display: none');
        descriptionInput.setAttribute('required', '');
        descriptionInput.setAttribute('validate-empty', 'false');
        descriptionInput.addEventListener('change', () =>
        {
            todoValues.description = descriptionInput.value;
        });

        const descriptionEditButton = document.createElement('button');
        descriptionEditButton.classList.add('text-edit-button');
        descriptionEditButton.setAttribute('id', 'read-mode');

        const descriptionEditIcon = document.createElement('img');
        descriptionEditIcon.classList.add('edit-icon');
        descriptionEditIcon.setAttribute('src', editIcon2);
        descriptionEditIcon.setAttribute('alt', 'edit indicator icon');

        editIcons.push(descriptionEditButton);
        descriptionEditButton.addEventListener('click', () =>
        {
            editIconAddEventListeners(descriptionEditButton);
        });

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
        const title = todo.querySelector('.title-input').value;
        const dueDate = todo.querySelector('.ddate-input').value;
        const priority = todo.querySelector('.priority-value').textContent;

        const checkboxesElements = todo.querySelectorAll('.checkbox-label');
        const checkboxes = [];
        checkboxesElements.forEach((checkbox) =>
        {
            checkboxes.push(checkbox.textContent);
        });

        const description = todo.querySelector('.description-input').value;
        let isDone = false;
        if (todo.querySelector('check-done-button') && todo.querySelector('check-done-button').classList.contains('checked'))
        {
            isDone = true;
        }

        return {
            title,
            dueDate,
            priority,
            checkboxes,
            description,
            isDone,
        };
    }
    function getElementRoute(element)
    {
        const route = [];
        let id;
        if (element.getAttribute('data-element') === 'todo')
        {
            id = element.getAttribute('data-id');
        }
        else
        {
            id = element.closest('[data-adto="true"]').getAttribute('data-id');
        }
        route.push(+id);
        while (+id !== 0)
        {
            element = element.parentElement.closest('[data-adto="true"]');
            id = element.getAttribute('data-id');
            route.push(+id);
        }
        return route.reverse();
    }
    function BCgetInputValue(button)
    {
        let inputToValidate;
        if (button.closest('.second-display-menu').querySelector('.todo').style.getPropertyValue('display') != 'none')
        {
            inputToValidate = button.closest('.second-display-menu').querySelector('.todo').querySelector('.title-input');
        }
        else
        {
            inputToValidate = button.closest('.second-display-menu').querySelector('.set-category-project-title').querySelector('.set-c-p-input');
        }
        if (inputToValidate.validity.valueMissing)
        {
            inputToValidate.setCustomValidity('Must consist at least one character');
            inputToValidate.reportValidity();
        }
        return inputToValidate.value;
    }
    function createButtonAction(button, parent, element, container, route, values)
    {
        const inputValue = BCgetInputValue(button);
        let logicElement;
        let newElement;
        if (inputValue !== '')
        {
            if (element === 'category')
            {
                logicElement = logicModule.createCategory(inputValue, route);
                newElement = createCategory(parent, logicElement);
                newElement.addEventListener('click', () =>
                {
                    addToElementAction(newElement);
                });
            }
            else if (element === 'project')
            {
                logicElement = logicModule.createProject(inputValue, route);
                newElement = createProject(parent, logicElement);
                newElement.addEventListener('click', () =>
                {
                    addToElementAction(newElement);
                });
            }
            else
            {
                logicElement = logicModule.createTodo(
                    inputValue,
                    route,
                    values.dueDate,
                    values.priority,
                    values.checkboxes,
                    values.description,
                    values.isDone,
                );
                newElement = createProjectElement(parent.id, logicElement);
                periodDateInputChangeAction();
            }
            addToElements.push(newElement);
            removeElements.push(newElement);
            if (container.getAttribute('data-displayed') === 'true')
            {
                generateDirectoryElement(container);
            }

            closeSDButton.click();
        }
        else
        {
            button.addEventListener('click', () =>
            {
                createButtonAction(button, parent, element, container, route, values);
            }, { once: true });
        }
    }

    const removeFunctionButton = document.querySelector('.remove-function');
    let removeElements = addToElements.slice(1, addToElements.length).concat(Array.from(document.querySelectorAll('[data-element="todo"]')));
    removeFunctionButton.addEventListener('click', () =>
    {
        removeFunction(removeElements);
    });
    function removeFunction(removeElements)
    {
        if (removeFunctionOn === false)
        {
            if (addFunctionOn === true)
            {
                turnOffAddFunction(addToElements);
            }
            removeFunctionOn = true;
            removeElements.forEach((removeElement) =>
            {
                removeElement.querySelector('.project-category-title').classList.add('red-text-element');

                removeElement.addEventListener('click', () =>
                {
                    if (removeFunctionOn === true)
                    {
                        let index = removeElements.indexOf(removeElement);
                        removeElements.splice(index, 1);
                        if (removeElement.getAttribute('data-element') !== 'todo')
                        {
                            index = addToElements.indexOf(removeElement);
                            addToElements.splice(index, 1);
                        }
                        const route = getElementRoute(removeElement);
                        const logicElement = logicModule.findByID(route);
                        const logicParent = logicModule.findByID(route.slice(0, route.length - 1));
                        const parentContainer = removeElement.parentElement;
                        logicModule.removeElement(logicParent, logicElement);
                        turnOffRemoveFunction(removeElements);
                        if (removeElement.parentElement.parentElement.getAttribute('data-displayed') === 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement);
                        }
                        else if (removeElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-displayed') === 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement.parentElement.parentElement);
                        }
                        else if (removeElement.getAttribute('data-displayed') === 'true')
                        {
                            const subSection = document.querySelector('.sub-section');
                            removeChildren(subSection);
                            const placeholder = document.createElement('div');
                            placeholder.classList.add('sub-section-placeholder');
                            placeholder.textContent = 'Click an element from Your directory to view it here';
                            subSection.appendChild(placeholder);

                            document.querySelector('.main-section-heading').textContent = '';
                        }

                        parentContainer.removeChild(removeElement);
                        periodCheckRemoved();
                        removeElement.querySelectorAll('[data-element="todo"]').forEach((todo) =>
                        {
                            logicModule.todosCheckRemoved(+todo.getAttribute('data-id'));
                        });
                    }
                });
            });
        }
        else
        {
            turnOffRemoveFunction(removeElements);
        }
    }
    function turnOffRemoveFunction(removeElements)
    {
        removeFunctionOn = false;
        removeElements.forEach((removeElement) =>
        {
            removeElement.querySelector('.project-category-title').classList.remove('red-text-element');
        });
    }

    return {
    };
}());

export default domModule;
