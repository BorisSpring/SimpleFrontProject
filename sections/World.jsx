'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';

const World = () => (
  <motion.section
    className={`${styles.paddings} ${styles.innerWidth} mx-auto relative z-10 leading`}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    }}
    initial='hidden'
    whileInView='show'
  >
    <TypingText title='| People on the world' textStyles='mx-auto w-fit ' />
    <TitleText
      title=' Track friends around you and invite them to play together in the same world'
      textStyles='text-white text-center  leading-[50px] md:leading-[76px] max-w-[1000px] mx-auto'
    />
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100, x: 0 },
        show: {
          x: 0,
          opacity: 1,
          y: 0,
          transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 1,
            delay: 0.5,
          },
        },
      }}
      className='w-full h-[550px] mt-[32px] md:mt-[64px] lg:mt-[96px] relative '
    >
      <img
        src='/map.png'
        alt='World Map'
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-20 right-20 w-[60px] xs:w-[40px] xs:h-[40px] h-[60px] xs:w-[40px] xs:h-[40px] rounded-full bg-[#5d6680]'>
        <img src='/people-01.png' alt='People' className='w-full h-full' />
      </div>
      <div className='absolute top-10 left-20 w-[60px] xs:w-[40px] xs:h-[40px] h-[60px] xs:w-[40px] xs:h-[40px] rounded-full bg-[#5d6680]'>
        <img src='/people-02.png' alt='People' className='w-full h-full' />
      </div>
      <div className='absolute bottom-[40%] right-[45%] w-[60px] xs:w-[40px] xs:h-[40px] h-[60px] xs:w-[40px] xs:h-[40px] rounded-full bg-[#5d6680]'>
        <img src='/people-03.png' alt='People' className='w-full h-full' />
      </div>
    </motion.div>
  </motion.section>
);

export default World;
