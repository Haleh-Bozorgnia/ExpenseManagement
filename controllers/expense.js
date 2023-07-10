const express = require('express')
const Expense = require ('../models/expense.js')
const router = express.Router()

router.use((req, res, next) => {
  // req.session
  //check to see if the user is logged in via the req.session.loggedIn property. This property was defined in the controller.user.js file
  //if the user is loggedIn we are going to use the next() which means allow the user to access the routes defined below
  if (req.session.loggedIn) {
    next();
  } else {
    //else the user is NOT loggedIn, therefore just have the user redirected to the login page.
    res.redirect("/user/login");
  }
});
//Controllers
//===========================================================================
//Index Router
router.get ('/', async (req,res) =>{
    const allExpenses = await Expense.find({ username: req.session.username });
    res.render("expenses/index.ejs", 
    {expenses: allExpenses,
      user: req.session.username,}
      );
})
//New Router

router.get('/new', (req, res) =>{
    res.render ('expenses/new.ejs')
})

//Delte Router
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Expense.findByIdAndDelete(id);
  res.redirect("/expense");
});



//Update Router
router.put('/:id',async(req,res)=>{
    const id = req.params.id
    await Expense.findByIdAndUpdate(id,req.body)
    res.redirect('/expense')
})

//Create Router
router.post('/', async (req, res)=>{
    req.body.username = req.session.username; 

    await Expense.create(req.body)
    res.redirect('/expense')
})
//Edit Router
router.get('/:id/edit', async(req,res)=>{
    const id = req.params.id
    const expense = await Expense.findById(id)
    res.render('expenses/edit.ejs',{expense})
})
//Show Router
router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const expense = await Expense.findById(id)
    res.render('expenses/show.ejs',{expense})

})

module.exports = router

