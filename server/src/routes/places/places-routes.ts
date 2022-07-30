import express from 'express'
import { httpFetchPlacesByPlaceId, httpFetchPlacesByUserID } from './places-controllers'

const placesRoutes = express.Router()

placesRoutes.get('/user/:uid', httpFetchPlacesByUserID)
placesRoutes.get('/:pid', httpFetchPlacesByPlaceId)

export default placesRoutes