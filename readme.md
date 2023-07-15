# Expenses Management 
**By:** Haleh Bozorgnia

---
### Description

This app enables users to save details of their expenses.
Users can signup and login with username and passsword.
The user will be able to enter, edit and delete receipt information.
The information fields that the App stores include the following:
- Receipt title
- Category
- Date
- Price
- Image

By clicking on a category,the User can see all the records that have the same category on one page.

---
### Links
- [LINK TO GITHUB](https://github.com/Haleh-Bozorgnia/project2)
- [LINK TO DEPLOYED WEBSITE](https://expensesmanagement.onrender.com)

- [LINK TO TRELLO](https://trello.com/invite/b/60G0vBB5/ATTIa762dac619c14e022b48cdb85d8e7eeaFABF3319/project-2)

---
###Technologies  
HTML, CSS, JS, Node,EJS, Express, Mongo

---

###UI Mockup

#### Desktop View
![Desktop View](https://i.imgur.com/GfzcdIF.png)
### Mobile View
![Mobile View](https://i.imgur.com/uGHEJ4i.png)

---
###Backend Endpoints

|Name | ENDPOINT | METHOD | PURPOSE       |
|-----| -------- | ------ | ------------- |
|INDEX| /expense     | GET    | list all expenses |
|NEW|/expense/new|	GET	|display a form to add a new expense|
|DELETE|/expense/:id	|DELETE	|delete an expense |
|UPDATE|/expense/:id	|pUT	|Update an expense's information 
|CREATE|/expense	|POST	|add the expense to the database |
|EDIT|/expense/:id/edit	|GET	|to edit an existing expense | 
|SEARCH| /expense/category/:category | GET    | show all expences with the same category|
|SHOW| /expense/:id | GET    | show the specific expense  |


----------	--------	---------
| ENDPOINT | METHOD | PURPOSE       |
| -------- | ------ | ------------- |
|/	|GET	|Display app name and buttons for Sign-Up and Login
|/signup	|GET	|Display a form to new user to sign up 
|/signup	|POST	|Add the new user info to the database 
|/login	|GET	|Display a form that users can use to log into the app
|/login	|POST	|Check the username and password to match data,then redirect to /expense
|/logout	|GET	|Logout page 

### ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/5ZLX41Z.png)
