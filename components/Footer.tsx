import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-4 flex justify-between'>
      <p>created by: <Link href="https://warpcast.com/getoffdeez" className='hover:text-slate-300'>getoffdeez.eth</Link></p>
      <p className='italic text-sm text-slate-300'>To learn more visit <Link href="https://warpcast.com/~/channel/degentlemen">the Degentlemen channel in Warpcast.</Link></p>
    </footer>
  )
}

export default Footer
