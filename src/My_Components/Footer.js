import React from 'react'

const Footer = () => {

  let footerStle = {

    position:"relative",
    // marginTop:"",
    padding:"20px",
    top:"10vh"
  }
  return (
    <footer className='bg-dark text-white' style={footerStle}>
      <p className='text-center'>copyright &copy; Aniket</p>
    </footer>
  )
}

export default Footer
