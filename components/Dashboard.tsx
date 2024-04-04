"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import Loader from "@/components/Loader";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const loadData = async () => {
      // Simulate loading data with a timeout
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after data is "loaded"
      }, 2600); // Adjust timeout as needed
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <div className='h-full flex flex-col gap-4 justify-between'>
      <div className='flex gap-4 h-full flex-wrap md:flex-nowrap'>
        <div className='panel ml-auto mr-auto h-full w-full p-4 flex gap-8 items-center'>
          <div className='flex flex-col gap-2'>
            <Image src="/degen.png" alt="logo" width={200} height={60} className='h-50' />
            <span className='italic'>Degentlemen reveal on 4/11.</span>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-3xl tracking-tighter uppercase font-bold italic'>Win a Degentlemen</h1><p className='text-lg'>Degentlemen #6840</p>
            <Link className='text-lg w-full mt-4' href="https://opensea.io/assets/base/0x93d9212fb2111b4619c48393a4cc2c9e1983edb3/6840"><Button className='hover:blue-600'>View on opensea</Button></Link>
          </div>
        </div>
        <div className='panel ml-auto mr-auto h-full w-full p-4'>
        <div className='mb-4'>
            <h2 className='text-2xl font-bold italic tracking-tighter'>Objective:</h2>
            <p>Unleash your creativity and make your mark with Based Management. Whether you're an artist, builder, or innovator, your unique vision is what we're seeking.</p>
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold italic tracking-tighter'>How to Enter:</h2>
            <ol className='list-decimal pl-4 space-y-2'>
              <li>Upload your Base-related idea to Uplink on Monday, April 8, 2024.</li>
              <li>Engage & Win: Rally the community to mint your idea. The project with the most mints by Monday, April 15, 2024, secures victory.</li>
            </ol>
          </div>
          <div>
            <p className='mb-4'><strong>Prize:</strong> The winning vision earns the coveted Degentlemen #6840 NFT and sets the direction for future projects by Based Interns, showcasing what's truly valuable to our ecosystem.</p>
            <p className='mb-4'><strong>Why Participate?</strong> This isn't just a contest—it's your chance to shape the future, earn recognition, steer our Intern program towards innovation, and win an exclusive NFT!</p>
            <p>Let’s build the future of Base together. Be bold, be innovative, be Based.</p>
          </div>
        </div>
      </div>

      <div className='flex gap-4 flex-wrap'>
      <div className='panel flex flex-1 h-[260px] md:h-full w-full flex-col gap-4'>
          <Image src="/uplink-logo.svg" alt="uplink" width={25} height={25}  />
          <h3 className='text-md md:text-lg tracking-tighter bold uppercase'>1. Must be uploaded to Uplink</h3>
          <Button variant="secondary"><Link href="https://uplink.wtf/basedmanagement/mintboard">Visit Uplink </Link></Button>       
        </div>
        <div className='panel flex flex-1 h-[260px] md:h-48 w-full  flex-col gap-4 justify-center'>
          <h3 className='text-md md:text-lg tracking-tighter bold uppercase'>2. To participate upload your submission on Monday, 8, 2024.</h3>     
        </div>
        <div className='panel flex flex-1 h-[260px] md:h-48 w-full  flex-col gap-4 justify-center'>
          <h3 className='text-md md:text-lg tracking-tighter bold uppercase'>3. The brief has to be Based related.</h3>     
        </div>
        <div className='panel flex flex-1 h-[260px] md:h-48  w-full  flex-col gap-4 justify-center'>
          <h3 className='text-md md:text-lg tracking-tighter bold uppercase'>4. Monday, 15, 2024 winner will be decided. The idea with the most mints wins.</h3>     
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
