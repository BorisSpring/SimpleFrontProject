'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section>
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      }}
      initial='hidden'
      whileInView='show'
      className={`${styles.innerWidth} mx-auto  ${styles.paddings} relative z-[10] flex gap-8 flex-col lg:flex-row`}
    >
      <motion.div
        variants={{
          hidden: { x: '-100%', rotate: 120 },
          show: {
            x: 0,
            rotate: 0,
            transition: { type: 'spring', duration: 1.8, delay: 0.5 },
          },
        }}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src='/get-started.png'
          alt='Get started planet '
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200, y: 0 },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'tween', duration: 1, delay: 0.2 },
          },
        }}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| How Metaverus Works' />
        <TitleText
          title='Get started with just a few clicks'
          textStyles='text-white lg:text-[64px] font-semibold lg:leading-[70px] md:text-[48px]
           text-[28px] sm:leading-[-20px] mb-[12px] md:mb-[20px] lg:mb-[32px]'
        />
        <div className='space-y-3'>
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} feature={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
