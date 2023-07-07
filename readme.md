# PROJECT 2

- **Project Name:**
  Expenses Management App
- **Project By:** Haleh Bozorgnia
- [LINK TO GITHUB](https://github.com/Haleh-Bozorgnia/project2)
- [LINK TO DEPLOYED WEBSITE](https://project2-wxqx.onrender.com)
- **List of Technologies used:** HTML, JS, CSS, Node, Express, EJS, Mongo
- [LINK TO TRELLO](https://trello.com/invite/b/60G0vBB5/ATTIa762dac619c14e022b48cdb85d8e7eeaFABF3319/project-2)

## Description

This app enables users to effectively track and manage their expenses, providing them with tools to maintain a clear overview of their spending habits.

## Mock UP of UI

### Desktop View:
![Desktop View](https://i.imgur.com/GfzcdIF.png)
### Mobile View:
![Mobile View](https://i.imgur.com/uGHEJ4i.png)

## List of Backend Endpoints

| ENDPOINT | METHOD | PURPOSE       |
| -------- | ------ | ------------- |
| /expense     | GET    | List all expenses |
| /expense/:id | GET    | Show one expense  |
|/expense/new|	GET	|Display a form to add a new expense
|/expense	|POST	|Add the expense to the database 
|/expense/:id/edit	|GET	|To edit an existing expense  
|/expense/:id	|PUT	|Update an expense's information 
|/expense/:id	|DELETE	|Delete an expense 
----------	--------	---------
| ENDPOINT | METHOD | PURPOSE       |
| -------- | ------ | ------------- |
|/	|GET	|Display app name and buttons for Sign-Up and Login
|/signup	|GET	|Display a form to new user to sign up 
|/signup	|POST	|Add the new user info to the database 
|/login	|GET	|Display a form that users can use to log into the app
|/login	|POST	|Check the username and password to match data,then redirect to /expense
|/logout	|GET	|Logout page 

## ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/JR3rMcV.png)
- [Free ERD Diagram Tool](https://dbdiagram.io/home)
