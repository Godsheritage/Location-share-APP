import express from 'express'
import { httpCreatePlace, httpFetchPlacesByPlaceId, httpFetchPlacesByUserID } from './places-controllers'

const placesRoutes = express.Router()

placesRoutes.get('/user/:uid', httpFetchPlacesByUserID)
placesRoutes.get('/:pid', httpFetchPlacesByPlaceId)
placesRoutes.post('/', httpCreatePlace)

export default placesRoutes