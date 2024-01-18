import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({}).sort('name')
  .then(meals => {
    res.render('meals/new', {
      meals: meals,
      title: 'Add Meal'

    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })  
}

function create(req, res) {
  Meal.create(req.body)
  .then(meal => { //performer isn't needed, but get in the habit for React!
    res.redirect('/meals/new')
  }).catch(err => {
    console.log(err)
    res.redirect('/performers/new')
  })
}


export {
  newMeal as new,
  create
}