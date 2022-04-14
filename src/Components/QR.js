import React from 'react'
import img from '../media/img/qrcode.png'

export default function QR() {
  return (
    <div id='qr'>
        <img src={img} alt="alt" className='h-48 w-48 place-content-center'/>
    </div>
  )
}
