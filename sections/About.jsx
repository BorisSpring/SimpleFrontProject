'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0 flex' />

    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Metaverse' textStyles='text-center' />
      <motion.p
        variants={{
          hidden: { opacity: 0, x: 0, y: 100 },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: 'tween',
              duration: 1,
              ease: 'easeOut',
              delay: 0.2,
            },
          },
        }}
        initial='hidden'
        whileInView='show'
        className='max-w-[1095px] text-[32px] text-[#C7C7C7] text-center'
      >
        <span className='sm:text-[32px] text-[20px] mt-[8px]  text-white font-semibold'>
          Metaverse
        </span>{' '}
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the
        <span className='font-semibold text-white'>
          {' '}
          madness of the metaverse
        </span>{' '}
        of today, using only VR devices you can easily explore the metaverse
        world you want, turn your dreams into reality. Let's explore the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={{
          hidden: { opacity: 0, y: 100, x: 0 },
          show: {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 0.5,
            duration: 1,
            transition: {
              type: 'tween',
              duration: 1,
              delay: 0.3,
              ease: 'easeOut',
            },
          },
        }}
        src='/arrow-down.svg'
        alt='arrow to scroll for next section'
        className='h-[28px] w-[18px] text-white object-contain  mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
