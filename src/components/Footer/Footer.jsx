import React from 'react'
import './footer.scss'
import image1 from "../../assets/image1.png"

function Footer() {
  return (
    <footer>
      <div className='footer-top'>

      </div>
      <hr />
      <div className='footer-button'>
        <img src={image1} alt="" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
