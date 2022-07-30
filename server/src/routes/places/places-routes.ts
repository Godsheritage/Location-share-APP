import express from 'express'
import { httpFetchPlaces } from './places-controllers'

const placesRoutes = express.Router()

placesRoutes.get('/pid', httpFetchPlaces)


export default placesRoutes