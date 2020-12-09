const express = require('express')
const app = express()
const port = 3000

const UserService = require('./services/UserService')
const TaskService = require('./services/TaskService')

// Parse JSON bodies for this app. 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * User Routes
 */

app.get('/get_user', (req, res) => {
    let userService= new UserService();
    let filter = {}
    if(Object.keys(req.query).length !== 0) {
        filter = JSON.parse(Buffer.from(req.query.user, 'base64').toString());
    }
    userService.getUser(filter).then(resp => res.json(resp));
})

app.post('/add_user', (req, res) => {

    let userService= new UserService();
    userService.addUser(req.body).then(resp => res.json({status: resp}));

})

app.put('/update_user', (req, res) => {

    let userService= new UserService();
    userService.updateUser(req.body).then(resp => res.json({status: resp}));

})

app.delete('/delete_user', (req, res) => {

    let userService= new UserService();
    userService.deleteUser(req.query.id).then(resp => res.json({status: resp}));

})

/**
 * Task Routes
 */
app.get('/get_task', (req, res) => {
    let taskService= new TaskService();
    let filter = {}
    if(Object.keys(req.query).length !== 0) {
        filter = JSON.parse(Buffer.from(req.query.task, 'base64').toString());
    }
    taskService.getTask(filter).then(resp => res.json(resp));
})

app.post('/create_task', (req, res) => {

    let taskService = new TaskService();
    taskService.createTask(req.body).then(resp => res.json({status: resp}));

})

app.put('/update_task', (req, res) => {

    let taskService= new TaskService();
    taskService.updateTask(req.body).then(resp => res.json({status: resp}));

})

app.delete('/delete_task', (req, res) => {

    let taskService = new TaskService();
    taskService.deleteTask(req.query.id).then(resp => res.json({status: resp}));

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})