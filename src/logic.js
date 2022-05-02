export let logicModule =
(function()
{

    let element = 
    {
    }

    function todoFactory(title, duedate, priority, description)
    {
        return {
            title,
            duedate,
            priority,
            checklist, 
            description
        }
    }

    function categoryFactory(categories, projects)
    {
        let category = {
            categories: [],
            projects: [],
            canAddTo
        }
    }

    function projectFactory()
    {
        return {
            todos: [],
        }
    }


    return {

    }
})()