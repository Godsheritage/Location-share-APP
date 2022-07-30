import express from 'express'
import { httpFetchPlacesByPlaceId } from './places-controllers'

const placesRoutes = express.Router()

placesRoutes.get('/:pid', httpFetchPlacesByPlaceId)
placesRoutes.get('/user/:uid')

export default placesRoutes