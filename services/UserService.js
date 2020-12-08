const User = require('../models/User');
const UserDAO = require('../DB/UserDAO');

/**
 * This class handles operation related to Users
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class UserService {

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
    }

    //Delete User
    deleteUser(id) {
        // Call DB delete
    }
}

module.exports = UserService;