import express from 'express'
import { httpCreatePlace, httpDeletePlace, httpEditPlace, httpFetchPlacesByPlaceId, httpFetchPlacesByUserID } from './places-controllers'

const placesRoutes = express.Router()

placesRoutes.get('/user/:uid', httpFetchPlacesByUserID)
placesRoutes.get('/:pid', httpFetchPlacesByPlaceId)
placesRoutes.post('/', httpCreatePlace)
placesRoutes.patch("/:pid", httpEditPlace)
placesRoutes.delete("/:pid",httpDeletePlace )

export default placesRoutes