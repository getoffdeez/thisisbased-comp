import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='panelHeader ml-auto mr-auto flex w-full justify-between items-center gap-2'>
      <Image src="/logo.png" alt="logo" width={200} height={50} />
      <p className='italic text-xs md:sm text-slate-300'>Must hold a Based Intern NFT to participate.</p>
    </header>
  )
}

export default Navbar
