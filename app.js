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
app.post('/add_user', (req, res) => {

    let userService= new UserService();
    userService.addUser(req.body).then(resp => res.json({status: resp}));
})

app.put('/update_user', (req, res) => {

    let userService= new UserService();
    userService.updateUser(req.body);

    res.json({
        status: true,
        msg: "success",
        body: req.body
    });
})

app.delete('/delete_user', (req, res) => {

    let userService= new UserService();
    userService.deleteUser(req.query.id);

    res.json({
        status: true,
        msg: "success"
    });
})

/**
 * Task Routes
 */
app.post('/create_task', (req, res) => {

    let taskService = new TaskService();
    taskService.createTask(req.body);

    res.json({
        status: true,
        msg: "success"
    });
})

app.put('/update_task', (req, res) => {

    let taskService= new TaskService();
    taskService.updateTask(req.body);

    res.json({
        status: true,
        msg: "success",
        body: req.body
    });
})

app.delete('/delete_task', (req, res) => {

    let taskService= new TaskService();
    taskService.deleteTask(req.query.id);

    res.json({
        status: true,
        msg: "success"
    });
})

app.put('/assign_task', (req, res) => {

    let taskService= new TaskService();
    taskService.assignTask(req.query.id);

    res.json({
        status: true,
        msg: "success"
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})