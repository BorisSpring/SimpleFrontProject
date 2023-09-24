'use client';

import styles from '../styles';

const Footer = () => (
  <footer
    className={`sm:px-16 xs:p-8 px-6 ,
 ${styles.innerWidth} mx-auto`}
  >
    <div>
      <div
        className='flex   flex-col sm:flex-row sm:justify-between sm:items-center'
        id='joinMetaverse'
      >
        <h1 className=' text-[28px] sm:text-[40px] lg:text-[64px] text-white font-bold whitespace-nowrap'>
          Enter the Metaverse
        </h1>
        <div className='flex gap-2 items-center capitalize px-8 py-5 rounded-[32px] bg-[#25618B] text-white w-fit ml-auto sm:mt-[20px] '>
          <img src='headset.svg' alt='w-6 h-6 color-white  object-fit' />{' '}
          <p className=' whitespace-nowrap  text-[12px] md:text-[16px]'>
            {' '}
            Enter Metverse
          </p>
        </div>
      </div>
      <div className='border-t  mt-[24px] md:mt-[48px] lg:mt-[64px] border-white flex flex-col gap-3 md:flex-row   items-center justify-between pb-5 md:pb-10 pt-5'>
        <p className='w-fit text-[#FFFFFF]  font-[800] text-[18px] sm:text-[24px]'>
          METAVERUS
        </p>
        <p className='text-[#FFFFFF] opacity-[0.7] text-[14px]'>
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className='flex items-center gap-3 lg:gap-4 text-white'>
          <img src='/instagram.svg' className='w-6 h-6 object-contain' />
          <a
            href='https://www.linkedin.com/in/boris-dimitrijevic-b3a931264/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/linkedin.svg' className='w-6 h-6 object-contain' />
          </a>
          <img src='/twitter.svg' className='w-6 h-6 object-contain' />
          <img src='/facebook.svg' className='w-6 h-6 object-contain' />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
