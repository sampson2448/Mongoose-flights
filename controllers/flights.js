import { Flight } from '../models/flight.js'


function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Airline",
  })
}

function create(req, res) {
  console.log("req body and update ",req.body)
  // console.log("req req and update ",req)
  console.log("req params and update ",req.params)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req,res){
  Flight.find({})
  .then(flights=>{
      res.render('flights/index', {
        flights:flights,
        title:'All Flights'
      })
    })
  .catch(err => {
        console.log(err)
        res.redirect('/')
  })
}



function show(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', { 
      flight: flight,
      title: 'Flight Detail', 
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function edit(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    console.log("flight on edit page",flight)
    res.render("flights/edit", {
      flight:flight, 
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


function update(req, res) {
  console.log("req body and update ",req.body)
  // console.log("req req and update ",req)
  console.log("req params and update ",req.params)
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.flightId, req.body)
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}


export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update
}
