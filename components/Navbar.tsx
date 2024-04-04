import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='panelHeader ml-auto mr-auto flex w-full justify-between items-center'>
      <Image src="/logo.png" alt="logo" width={200} height={50} />
      <p>Competition</p>
    </header>
  )
}

export default Navbar
