import express from 'express'
import { httpGetUsers, httpLoginUsers, httpSignupUsers } from './users-controllers'

const userRoutes = express.Router()

userRoutes.get('/', httpGetUsers)
userRoutes.post('/login', httpLoginUsers)
userRoutes.post('/signup', httpSignupUsers)

export default userRoutes