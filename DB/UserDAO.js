const Connection = require('./Connection');

class UserDAO {
    insert(userDocument) {
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
}

module.exports = UserDAO;