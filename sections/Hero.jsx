'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

const staggerChildren = 0.1; // Define staggerChildren here
const delayChildren = 0.2;

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.25,
                delay: 1,
              },
            },
          }}
          className={`${styles.heroHeading}`}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 1.35,
                duration: 1.25,
                // ease: 'easeOut',
              },
            },
          }}
          className='flex items-center'
        >
          <h1 className={`${styles.heroHeading}`}>MA</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>NESS</h1>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: {
            x: '100%',
            opacity: 0,
            y: 0,
          },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: 'tween',
              delay: 0.2,
              duration: 0.4,
              // ease: 'easeOut',
            },
          },
        }}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
        <img
          src='/cover.png'
          alt='cover'
          className='w-full  sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-[10] relative '
        />
        <a href='#explore'>
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px]  pr-[40px] relative z-[11]'>
            <img
              src='/stamp.png'
              alt='Stamp'
              className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
