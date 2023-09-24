'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';

const Navbar = () => (
  <motion.nav
    variants={{
      hidden: {
        opacity: 0,
        y: -50,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140,
        },
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 80,
          delay: 0.5,
        },
      },
    }}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%]  inset-2 gradient-01' />
    <div className={`${styles.innerWidth} flex justify-between gap-8 mx-auto`}>
      <img
        src='/search.svg'
        alt='Search'
        className='w-[24px] h-[24px] object-contain'
      />

      <h2 className='capitalize font-extrabold  text-white text-[24px] '>
        Metaversus
      </h2>
      <img
        src='/menu.svg'
        alt='Menu icon'
        className='h-[24px] w-[24px] text-white'
      />
    </div>
  </motion.nav>
);

export default Navbar;
