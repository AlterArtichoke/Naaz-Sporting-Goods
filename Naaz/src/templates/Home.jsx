import React from 'react'
import { Heroo, Latest, Bestseller, OurPolicy, Newsletter } from '../components'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Heroo />
      <Latest />
      <Bestseller />
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
