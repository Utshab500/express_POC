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
        this._title = null;
        this._description = null;
        this._status = "pending";
        this._assingedTo = null; // User ID will be stored
    }

    // Getters 
    getId() { return this._id }
    getTitle() { return this._title }
    getDescription(){ return this._description } 
    getStatus(){ return this._status }
    getAssignedTo(){ return this._assingedTo } 

    //Setters
    setId(id) { this._id = id }
    setTitle(title) { this._title = title }
    setDescription(description) { this._description = description }
    setStatus(status) { this._status = status }
    setAssignedTo(assingedTo) { this._assingedTo = assingedTo }

    /**
     * This function encapsulates user data to Task Model. It updates the value of the
     * received reference. Hence no need of return statement
     * 
     * @param {JSON} task 
     * @param {User} TaskObject 
     */
    setUser(task, TaskObject) {
        TaskObject.setId(TaskObject.getId());
        TaskObject.setTitle(task.title);
        TaskObject.setDescription(task.description);
        TaskObject.setStatus(task.status);
        TaskObject.setAssignedTo(task.assingedTo);
    }
}

module.exports = Task;