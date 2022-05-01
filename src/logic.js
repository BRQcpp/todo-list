export let logicModule =
(function()
{

    function elementFactory(canAddTo)
    {
        return {
            canAddTo
        }
    }

    function todoFactory(title, duedate, priority, description)
    {
        return {
            title,
            duedate,
            priority,
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