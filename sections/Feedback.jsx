'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

const Feedback = () => (
  <motion.section
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    }}
    className={`${styles.paddings} mx-auto ${styles.innerWidth} relative`}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
  >
    <motion.div
      className='flex flex-col lg:flex-row gap-[32px] mx-auto'
      variants={{
        hidden: {
          opacity: 0,
          y: 200,
          x: 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,

          transition: {
            delay: 0.5,
            duration: 0.75,
            type: 'tween',
            ease: 'easeOut',
          },
        },
      }}
    >
      <div className='feedback-gradient ' />
      <div className='lg:w-[370px]  border-2 border-[#6A6A6A] lg:h-100% flex flex-col justify-end rounded-[34px] p-5 mx-auto w-full'>
        <h1 className='text-[#FFFFFF] text-[32px] font-bold leading-[30px] sm:leading-[40px]'>
          Samantha
        </h1>
        <h2 className='text-[18px] text-[#FFFFFF] mb-[24px]'>
          Founder Metaverus
        </h2>
        <p className='sm:text-[24px] text-[#FFFFFF]  text-[20px]'>
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </div>
      <div className='lg:h-[610px] lg:w-[768px] m-auto relative'>
        <img
          src='planet-09.png'
          alt='Metaverse Rocket'
          className='object-cover h-full rounded-[34px] '
        />
        <a href='#joinMetaverse' className='cursor-pointer'>
          <img
            src='/stamp.png'
            className='w-[155px] h-[155px] top-[10%] left-[-10%] absolute'
          />
        </a>
      </div>
    </motion.div>
  </motion.section>
);

export default Feedback;
