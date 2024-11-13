import Section1 from '@/components/contact/Section1'
import Footer from '@/components/footer/Footer'
import Navbar2 from '@/components/navbar/Navbar2'
import React, { useRef } from 'react'

const index = () => {
    const navRef = useRef(null)
  return (
    <div className='w-full relative'>
        <Navbar2/>
        <Section1/>
        <Footer/>
    </div>
  )
}

export default index