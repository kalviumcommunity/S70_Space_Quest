import React from 'react'
import ShootingStars from "../components/LandingPageComponents/ShootingStars";
import TwinklingStars from "../components/LandingPageComponents/TwinklingStars";
import Users from '../components/entity/Users'
const UserPage = () => {
  return (
    <div className='landing-page'>
        <TwinklingStars />
        <ShootingStars />
        
      <Users />
    </div>
  )
}

export default UserPage
