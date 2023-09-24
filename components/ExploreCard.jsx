'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 0, x: -100 },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: 'spring',
          delay: index * 0.4,
          duration: 0.75,
          ease: 'easeOut',
        },
      },
    }}
    onClick={() => handleClick(id)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <h3 className='font-semibold text-white sm:text-[26px] text-[16px] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start  w-full flex-col bg-[rgba(0,0,0,0.5)]'>
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src='/headset.svg'
            alt='Headset'
            className='w-1/2 h-1/2 object-containtext-white'
          />
        </div>
        <p className='text-white text-[16px] z-0 leading-[20px] uppercase mb-2'>
          Enter the metaverse
        </p>
        <h2 className='mt[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
