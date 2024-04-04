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
        <div className='panel ml-auto mr-auto h-full w-full p-4 flex gap-8'>
          <div className='flex flex-col gap-4'>
            <Image src="/degen.png" alt="logo" width={200} height={60} className='h-50' />
            <span>Degentlemen reveal on 4/11.</span>
          </div>
          <div>
            <h1>Competition</h1><p>Degentlemen #6840</p>
            <Link href="https://opensea.io/assets/base/0x93d9212fb2111b4619c48393a4cc2c9e1983edb3/6840">Item to view</Link>
          </div>
        </div>
        <div className='panel ml-auto mr-auto h-full w-full p-4'>
        <div className='mb-4'>
            <h2 className='text-2xl bolder tracking-tighter'>Objective:</h2>
            <p>Unleash your creativity to enhance the Base ecosystem. Whether you're an artist, builder, or innovator, we want your vision!</p>
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl bolder tracking-tighter'>How to Enter:</h2>
            <ol className='list-decimal pl-4 space-y-2'>
              <li>Upload your Base-related idea to Uplink by April 8, 2024.</li>
              <li>Engage: The community votes with their mints. Most mints by April 15, 2024, wins.</li>
            </ol>
          </div>
          <div>
            <p className='mb-4'>Prize: The top vision wins a Degentlemen #6840 NFT and becomes a featured project within our community, setting the direction for Based Management's future endeavors.</p>
            <p className='mb-4'>Why Participate? It’s your chance to contribute to the Base protocol's growth, gain community recognition, and win an exclusive NFT!</p>
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
