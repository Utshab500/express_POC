const Task = require('../models/Task');

/**
 * This class handles operation related to Tasks
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class TaskService {

    // Add Task
    createTask(tsk) {
        let task = new Task();
        task.setTask(tsk, task);

    }

    //Update Task
    updateTask(tsk) {
        let task = new Task();
        task.setTask(tsk, task);
    }

    //Delete Task
    deleteTask(id) {
        // Call DB delete
    }

    assignTask(taskId, userId) {
        
    }
}

module.exports = TaskService;