const logicModule = (function ()
{
    let idset = -1;

    class Element
    {
        constructor(title)
        {
            this.title = title;
            this.id = ++idset;
        }
    }

    class Todo extends Element
    {
        constructor(title, duedate, priority, checklist, description, route, done = false)
        {
            super(title);
            this.duedate = duedate;
            this.priority = priority;
            this.checkboxes = checklist;
            this.description = description;
            this.route = route;
            this.done = done;
        }
    }

    class Project extends Element
    {
        constructor(title, contents = [], canContent = ['todo'])
        {
            super(title);
            this.contents = contents;
            this.canContent = canContent;
        }
    }

    class Category extends Element
    {
        constructor(title, contents = [], canContent = ['project', 'category'])
        {
            super(title);
            this.contents = contents;
            this.canContent = canContent;
        }
    }

    const root = new Category('Your directory');

    function findByID(idRoute)
    {
        if (idRoute.length === 0)
        {
            return root;
        }
        let id = idRoute[1];
        let parent = root;
        for (let i = 1; i < idRoute.length;)
        {
            parent.contents.forEach((child) =>
            {
                if (child.id === id)
                {
                    parent = child;
                    id = idRoute[++i];
                }
            });
        }
        return parent;
    }

    function createElement(child, idRoute)
    {
        const parent = findByID(idRoute);
        parent.contents.push(child);
    }

    function createCategory(title, idRoute)
    {
        const category = new Category(title);
        createElement(category, idRoute);
        return category;
    }

    function createProject(title, idRoute)
    {
        const project = new Project(title);
        createElement(project, idRoute);
        return project;
    }

    function createTodo(title, idRoute, duedate, priority, checklist, description, done = false)
    {
        const todo = new Todo(title, duedate, priority, checklist, description, idRoute, done);
        createElement(todo, idRoute);
        todos.push(todo);
        return todo;
    }

    function removeElement(parent, child)
    {
        const index = parent.contents.indexOf(child);
        parent.contents = parent.contents.slice(0, index).concat(
            parent.contents.slice(index + 1, parent.contents.length),
        );
    }

    let todos = [];

    function todosCheckRemoved(id)
    {
        const todo = todos.find((element) => element.id === id);
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
    }

    createCategory('Home', []);
    createProject('Cleaning', [0, 1]);
    createTodo('Do the vacuuming', [0, 1, 2], '2022-05-18', 'high', ['bedroom', 'kitchen', 'bathroom', 'living room'], 'I need to vacuum the whole house');
    createTodo('Do the ironing', [0, 1, 2], '2022-05-13', 'normal', ['pink dress shirt', 'red dress shirt'], 'I need to iron my dress shirts');
    createProject('Homework', [0, 1]);
    createTodo('Write an essay', [0, 1, 2, 5], '2022-09-13', 'high', [], 'Essay about coding');
    createTodo('Do the math exercises', [0, 1, 2, 5], '2022-05-13', 'low', ['1.2/45', '1.3/45'], 'They are quite hard');

    return {
        createTodo,
        createCategory,
        createProject,
        findByID,
        root,
        removeElement,
        todos,
        todosCheckRemoved,
    };
}());

export default logicModule;
