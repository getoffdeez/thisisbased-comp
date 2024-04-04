import Image from "next/image";

const Loader = () => (
<div className='fixed inset-0 z-50 flex items-center justify-center bg-[#125EFF]'>
  <div className="flex flex-col items-center justify-center">
      <Image
      src='/logo.png'
      alt='loader'
      width={200}
      height={200}
      className='object-contain'
      />
      <p className='text-sm font-bold text-primary-purple'>Loading...</p>
  </div>
</div>

);

export default Loader;