import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET /movies/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.get("/:flightId/edit", flightsCtrl.edit)
router.post('/',flightsCtrl.create)
router.post("/:flightId/tickets",flightsCtrl.createTicket)
router.post('/:flightId/meals', flightsCtrl.addToMeal)
router.delete('/:flightId', flightsCtrl.delete)
router.put("/:flightId", flightsCtrl.update)

export {
	router
} 