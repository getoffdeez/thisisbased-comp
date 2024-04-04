import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-4 flex'>
      <p>created by: <Link href="https://warpcast.com/getoffdeez" className='hover:text-slate-300'>getoffdeez.eth</Link></p>
    </footer>
  )
}

export default Footer
