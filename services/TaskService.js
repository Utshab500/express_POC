const Task = require('../models/Task');
const TaskDAO = require('../DB/TaskDAO');

/**
 * This class handles operation related to Tasks
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class TaskService {

    // Get Task
    getTask(tsk) {
        let taskDao = new TaskDAO();
        let task = null;
        if(Object.keys(tsk).length !== 0) {
            let obj = new Task();
            obj.setTask(tsk, obj);
            console.log(obj);
            task = {};
            Object.keys(obj).forEach(item => {
                if( obj[item] !== undefined ) {
                    task[item] = obj[item];
                }
            });
            console.log(task);
        }
        else {
           task = {...tsk}; 
        }
        return taskDao.get(task).then(resp => {
            console.log(resp);
            return resp;
        }).catch(error => false);
    }

    // Add Task
    createTask(tsk) {
        let task = new Task();
        task.setTask(tsk, task);
        let taskDao = new TaskDAO();
        return taskDao.insert(task).then(resp => resp).catch(error => false);

    }

    //Update Task
    updateTask(tsk) {
        let task = new Task();
        task.setTask(tsk, task);
        let taskDao = new TaskDAO();
        return taskDao.update(task).then(resp => resp).catch(error => false);
    }

    //Delete Task
    deleteTask(id) {
        // Call DB delete
        let taskDao = new TaskDAO();
        return taskDao.delete(id).then(resp => resp).catch(error => false);
    }
}

module.exports = TaskService;