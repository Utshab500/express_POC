/**
 * This class gives Task model
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class Task {

    constructor () {
        /**
         * Declearing protected members
         */
        this._id = "tk_" + Math.floor(Math.random() * new Date().getTime());
        this.title = null;
        this.description = null;
        this.status = "pending";
        this.assingedTo = null; // User ID will be stored
    }

    // Getters 
    getId() { return this._id }
    getTitle() { return this.title }
    getDescription(){ return this.description } 
    getStatus(){ return this.status }
    getAssignedTo(){ return this.assingedTo } 

    //Setters
    setId(id) { this._id = id }
    setTitle(title) { this.title = title }
    setDescription(description) { this.description = description }
    setStatus(status) { this.status = status }
    setAssignedTo(assingedTo) { this.assingedTo = assingedTo }

    /**
     * This function encapsulates user data to Task Model. It updates the value of the
     * received reference. Hence no need of return statement
     * 
     * @param {JSON} task 
     * @param {User} TaskObject 
     */
    setTask(task, TaskObject) {

        if(Object.keys(task).includes('_id')) {
            TaskObject.setId(task._id);
        }
        else {
            TaskObject.setId(TaskObject.getId());
        }
        
        TaskObject.setTitle(task.title);
        TaskObject.setDescription(task.description);
        TaskObject.setStatus(task.status);
        TaskObject.setAssignedTo(task.assingedTo);
    }
}

module.exports = Task;