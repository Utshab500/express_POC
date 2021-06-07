# Express JS POC

This I my first ever hands-on in **NodeJS** using **Express** framework.

## Architecture
This application exposes API endpoints and JSON data are exchanded with HTTP requests. At the backend tried to follow the design patterns which actually increases the readability of the code and farther development. Two data model has been used through out the application they are as follows

 1. User
 2. Task

It is expected the same model should be used at the Front-end thus there will a integrity and consistancy.

## Workflow
![Workflow](https://github.com/Utshab500/express_POC/blob/master/workflow.png "Workflow")

## Pre-requisits

 1. NodeJS
 2. MongoDB

## Steps to run the service

 1. Clone the repository
 2. Get inside the cloned directory
 3. Install node dependencies 
	`npm install`
 4. Have Mongo service up and running and it should be available in **System Path**
 5. Run the back-end application using following command
	`node app.js`

# API Endpoints

## Add User
> http://localhost:3000/add_user

**Type:** POST
**Request BODY:** `
{
	"name": "chandan",
	"designation": "cleark"
}`

## Update User
> http://localhost:3000/update_user

**Type:** PUT
**Request BODY:** `
{ "_id" : "us_1205863455194", "name" : "sirso", "designation" : "officer" }`

## Delete User
> http://localhost:3000/delete_user?id={value}

**Type:** DELETE
**Query Params:** `id`

## Get User
> http://localhost:3000/get_user

> http://localhost:3000/get_user?user={value}

**Type:** GET
**Query Params:** `user`
**Description:** This endpoint has two nature
1. Get all --> which is self explanetory
 2. Get specific --> This accepts **user** as the query parameters. It should be a **Base64 encoded** JSON which will get converter to **User** model.  Example: `{"name" : "anupam", "designation" : "cleark"}`

## Create Task

> http://localhost:3000/create_task

**Type:** POST
**Request BODY:** `
{
    "title" : "task5",
    "description" : "des5"
}`

## Update Task

> http://localhost:3000/update_task

**Type:** PUT
**Request BODY:** `{ "_id" : "tk_724455225441", "title" : "task1", "description" : "more des1", "status" : "pending", "assingedTo" : "us_1171577053210" }`

## Delete Task
> http://localhost:3000/delete_task?id={value}

**Type:** DELETE
**Query Params:** `id`

## Get Task
> http://localhost:3000/get_task
> http://localhost:3000/get_task?task={value}

**Type:** GET
**Query Params:** `task`
**Description:** This endpoint has two nature
1. Get all --> which is self explanetory
 2. Get specific --> This accepts **task** as the query parameters. It should be a **Base64 encoded** JSON object which will get converter to **Task** model.  Example: `{ "_id" : "tk_562795220939", "title" : "task3" }`

