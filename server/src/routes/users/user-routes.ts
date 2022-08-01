import express from 'express'
import { httpGetUsers } from './users-controllers'

const userRoutes = express.Router()

userRoutes.get('/', httpGetUsers)
userRoutes.post('/login', httpGetUsers)
userRoutes.post('/signup', httpGetUsers)

export default userRoutes