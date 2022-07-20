import React from 'react'
import { DUMMY_PLACES } from '../../users/pages/UserPlaces'
import { useParams } from 'react-router-dom'

const UpdatePlace = () => {
    const placeId = useParams().placeId
    const identifiedPlace = DUMMY_PLACES.find((places) => places.id === placeId)

    if

  return (
    <div>UpdatePlace</div>
  )
}

export default UpdatePlace