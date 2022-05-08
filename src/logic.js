export let logicModule =
(function()
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
        constructor(title, duedate, priority, checklist, description, done = false)
        {
            super(title);
            this.duedate = duedate;
            this.priority = priority;
            this.checkboxes = checklist;
            this.description = description;
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
    
    let root = new Category('Your directory');
    
    function findByID(idRoute)
    {
        if(idRoute.length == 0)
            return root;
        let id = idRoute[1];
        let parent = root;
        for(let i = 1; i < idRoute.length;)
        {
            for(let child of parent.contents)
            {
                if(child.id == id)
                {
                    parent = child;
                    id = idRoute[++i]
                }
            }
        }
        return parent;
    }
    
    function createElement(child, idRoute)
    {
        let parent = findByID(idRoute);
        parent.contents.push(child);
    }
    
    function createCategory(title, idRoute)
    {
        let category = new Category(title);
        createElement(category, idRoute);
        return category;
    }
    
    function createProject(title, idRoute)
    {
        let project = new Project(title);
        createElement(project, idRoute);
        return project;
    }
    
    function createTodo(title, idRoute, duedate, priority, checklist, description, done = false)
    {
        let todo = new Todo(title, duedate, priority, checklist, description, done);
        createElement(todo, idRoute);
        return todo;
    }

    function removeElement(parent, child)
    {
        let index = parent.contents.indexOf(child);
        parent.contents = parent.contents.slice(0, index).concat(parent.contents.slice(index+1, parent.contents.length));
    }
    
    let cat1 = createCategory('first category', []);
    let cat2 = createCategory('sec category', [0,1]);
    let cat3 = createCategory('rd category', [0,1]);
    let cat4 = createCategory('finsec category', [0,1, 2]);
    let cat5 = createCategory('rt category', [0,1, 2, 3]);
    let p1 = createProject('Project', [0,1, 2, 3, 5]);
    let t9 = createTodo('Todo', [0,1, 2, 3, 5, 6], '2022-09-08', 'low', ['first1', 'second2'], 'abc');
    let t1 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t2 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t3 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t4 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t5 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');


    return {
        createTodo, createCategory, createProject, findByID, root, removeElement
    }
})()