import React from 'react'
import Input from '../../components/Input'
import './newPlace.css'
const NewPlace = () => {
  return (
    <form action="" className="place-form">
      <Input type='text' label = 'Title' element='input'/>
    </form>
  )
}

export default NewPlace