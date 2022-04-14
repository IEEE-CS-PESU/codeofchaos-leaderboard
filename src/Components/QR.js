import React from 'react'
import img from '../media/img/qrcode.png'

export default function QR() {
  return (
    <div id='qr' className='justify-center align-center'><br/>
      <h2>Scan QR Code to transfer CEROs!</h2><br/>
      <div>
        <img src={img} alt="alt" className='h-48 w-48'/>
      </div>
    </div>
  )
}
