export let domModule = 
(function()
{
    let editIcons = Array.from(document.querySelectorAll('.title-edit-icon'));
    editIcons.forEach(editIcon => 
    {
        editIconAddEventListeners(editIcon);
    });

    function editIconAddEventListeners(editIcon)
    {
        editIcon.addEventListener('click', () => 
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

        });
    }

    return {
        
    }
}
)();