import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET /movies/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/',flightsCtrl.create)
router.get('/:flightId', flightsCtrl.show)
router.delete('/:flightId', flightsCtrl.delete)
router.get("/:flightId/edit", flightsCtrl.edit)
router.put("/:flightId", flightsCtrl.update)

export {
	router
} 