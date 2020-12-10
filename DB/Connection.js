const { MongoClient } = require("mongodb");

/**
 * This class handles MongoDB Connection
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class Connection {

  /**
   * Provisioning for Custome connection on the go and default connection for the Application
   * @param {string} DB_HOST 
   * @param {string} DB_NAME 
   */
  constructor(DB_HOST="mongodb://127.0.0.1:27017/?poolSize=20&w=majority", DB_NAME="mydb") {
    this.DB_HOST = DB_HOST;
    this.DB_NAME = DB_NAME;
    this._client = null;
  }

  /**
   * @returns {JSON} {status: boolean, client: MongoClient}
   */
  getClient() {
      // Create a new MongoClient
      this._client = new MongoClient(this.DB_HOST); 
      // Connect the client to the server
      return this._client.connect().then(resp => {
        // Establish and verify connection
        this._client.db(this.DB_NAME).command({ ping: 1 });
        console.log("Connected successfully to server");
        return {
          status: true,
          client: this._client
        };
      }).catch(error => {
          return {status: false};
      });
  }

  async closeConnection() {
    await this._client.close();
  }

}
module.exports = Connection;