/**
 * This class gives User model
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class User {

    constructor () {
        /**
         * Declearing protected members
         */
        this._id = "us_" + Math.floor(Math.random() * new Date().getTime());
        this.name = null;
        this.designation = null;
    }

    // Getters 
    getId() { return this._id }
    getName() { return this.name }
    getDesignation(){ return this.designation } 

    //Setters
    setId(id) { this._id = id }
    setName(name) { this.name = name }
    setDesignation(designation) { this.designation = designation }

    /**
     * This function encapsulates user data to User Model. It updates the value of the
     * received reference. Hence no need of return statement
     * 
     * @param {JSON} user 
     * @param {User} UserObject 
     */
    setUser(user, UserObject) {
        if(Object.keys(user).includes('_id')) {
            UserObject.setId(user._id);
        }
        else {
            UserObject.setId(UserObject.getId());
        }
        
        UserObject.setName(user.name);
        UserObject.setDesignation(user.designation);
    }
}

module.exports = User;