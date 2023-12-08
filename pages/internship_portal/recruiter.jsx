import React from 'react'
import Footer from '@/components/Footer'
import Nav from '@/components/navbar/NavLayout'
import StartupInternForm from '@/components/forms/startup_internship'
export default function Recruiter() {
  return (
    <div>
      <Nav/>
      <StartupInternForm/>
      <Footer/>
    </div>
  )
}
