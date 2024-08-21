import React from 'react'
import AboutUsNavbar from './AboutUsNavbar'
import AboutUsOurMission from './AboutUsOurMission'
import AboutUsOurTeamAndBlog from './AboutUsOurTeamAndBlog'
import AboutUsListOf from './AboutUsListOf'
import JoinUs from '../JoinUs'

const AboutUs = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <AboutUsNavbar />
      <AboutUsOurMission />
      <AboutUsOurTeamAndBlog />
      <AboutUsListOf />
      <JoinUs />
    </div>
  )
}

export default AboutUs
