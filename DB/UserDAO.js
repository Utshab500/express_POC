const Connection = require('./Connection');
const User = require('../models/User');

/**
 * This class handles DB operation related to Users
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class UserDAO {

    /**
     * Accepts an object of type User model and inserts into DB
     * @param {User} userDocument 
     * @returns {boolean}
     */
    async get(userDocument = new User()) {
        let con = new Connection();
        return con.getClient().then(resp => {
            if(resp.status) {
                let userCollection = resp.client.db(con.DB_NAME).collection("users");

                // userDocument is {} when all records to be fetched
                const result = userCollection.find(userDocument);
                if ((result.count()) === 0) {
                    console.log("No documents found!");
                }
                let items = [];
                return result.forEach(item => items.push(item)).then(res => {
                    con.closeConnection();
                    return {status: true, result: items};
                });
            }
            else {
                con.closeConnection();
                return false;
            }
        }).catch(error => {
            console.log(error);
            con.closeConnection();
            return false;
        });
    }

    /**
     * Accepts an object of type User model and inserts into DB
     * @param {User} userDocument 
     * @returns {boolean}
     */
    insert(userDocument = new User()) {
        let con = new Connection();
        return con.getClient().then(resp => {
            if(resp.status) {
                let userCollection = resp.client.db(con.DB_NAME).collection("users");
                const result = userCollection.insertOne(userDocument);
                console.dir(result.insertedCount);
                con.closeConnection();
                return true;
            }
            else {
                con.closeConnection();
                return false;
            }
        }).catch(error => {
            con.closeConnection();
            return false;
        });
    }

    /**
     * Accepts an object of type User model and inserts into DB
     * @param {User} userDocument 
     * @returns {boolean}
     */
    update(userDocument = new User()) {
        let con = new Connection();
        return con.getClient().then(resp => {
            if(resp.status) {
                let userCollection = resp.client.db(con.DB_NAME).collection("users");
                // create a filter for a movie to update
                const filter = { _id: userDocument.getId() };
                // this option instructs the method to create a document if no documents match the filter
                const options = { upsert: true };

                // create a document that sets the any changed value of the User
                const updateDoc = {
                    $set: userDocument
                };

                const result = userCollection.updateOne(filter, updateDoc, options);
                console.log(
                    `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
                );
                con.closeConnection();
                return true;
            }
            else {
                con.closeConnection();
                return false;
            }
        }).catch(error => {
            con.closeConnection();
            return false;
        });
    }

    /**
     * Accepts an object of type User model and inserts into DB
     * @param {string} id 
     * @returns {boolean}
     */
    delete(id) {
        let con = new Connection();
        return con.getClient().then(resp => {
            if(resp.status) {
                let userCollection = resp.client.db(con.DB_NAME).collection("users");
                // Query for a movie that has a title of type string
                const query = { _id: { $eq: id } };
                return userCollection.deleteOne(query).then(resp => {
                    con.closeConnection();
                    if (resp.deletedCount === 1) {
                        console.dir("Successfully deleted one document.");
                        return true;
                    } else {
                        console.log("No documents matched the query. Deleted 0 documents.");
                        return false;
                    }
                });
            }
            else {
                con.closeConnection();
                return false;
            }
        }).catch(error => {
            con.closeConnection();
            return false;
        });
    }
}

module.exports = UserDAO;