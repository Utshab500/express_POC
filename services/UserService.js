const User = require('../models/User');
const UserDAO = require('../DB/UserDAO');

/**
 * This class handles operation related to Users
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class UserService {

    // Get User
    getUser(usr) {
        let userDao = new UserDAO();
        let user = null;
        if(Object.keys(usr).length !== 0) {
            let obj = new User();
            obj.setUser(usr, obj);
            user = {...obj};
        }
        else {
           user = {...usr}; 
        }
        return userDao.get(user).then(resp => {
            console.log(resp);
            return resp;
        }).catch(error => false);
    }

    // Add User
    addUser(usr) {
        let user = new User();
        user.setUser(usr, user);
        let userDao = new UserDAO();
        return userDao.insert(user).then(resp => resp).catch(error => false);
    }

    //Update User
    updateUser(usr) {
        let user = new User();
        user.setUser(usr, user);
        let userDao = new UserDAO();
        return userDao.update(user).then(resp => resp).catch(error => false);
    }

    //Delete User
    deleteUser(id) {
        // Call DB delete
        let userDao = new UserDAO();
        return userDao.delete(id).then(resp => resp).catch(error => false);
    }
}

module.exports = UserService;