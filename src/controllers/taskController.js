
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readTasksFromFile = () => {
    const tasksData = fs.readFileSync('dev-data/todos.json', 'utf-8');
    return JSON.parse(tasksData);
};

const writeTasksToFile = (tasks) => {
    fs.writeFileSync('dev-data/todos.json', JSON.stringify(tasks));
};


exports.getTask = (req, res) => {
    const tasks = readTasksFromFile();
    res.status(200).json(tasks);
};


exports.addTask = (req, res) => {
    
    const data  = req.body.data;
   
    const newTask = {
        id: uuidv4(),
        taskName: data,
    };
    const tasks = readTasksFromFile();
    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json({
        status: 'success',
        data: {
            newTask,
        },
    });
};

exports.deleteTask = (req, res) => {
    
   
    const  id  = req.body.id;
   
    const tasks = readTasksFromFile();
    const updatedTasks = tasks.filter(task => task.id !== id);
    
    writeTasksToFile(updatedTasks);
    res.status(200).json({
        status: 'success',
        message: 'Task deleted successfully',
       data:updatedTasks
    });
};
