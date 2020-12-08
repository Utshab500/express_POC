const Connection = require('./Connection');

async function run() {
    let con = new Connection();
    let client = await con.getClient();
    let collection = await client.db("security").collection("movie");
    let item = await collection.findOne();
    console.log(item);
    con.closeConnection();
}
run();

class DAO {
    insert(object);
    update(object);
    delete(object);
}