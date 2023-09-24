'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section>
    <motion.div
      className={`${styles.innerWidth} ${styles.paddings} mx-auto  flex flex-col lg:flex-row items-center`}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      }}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className=' '>
        <TypingText title=' Whats New ' />
        <TitleText
          title="What's new about Metaversus?"
          textStyles='text-white lg:text-[64px] font-semibold lg:leading-[70px] md:text-[48px]
           text-[28px] sm:leading-[-20px] mb-[12px] md:mb-[20px] lg:mb-[32px]'
        />
        <motion.div
          className='mt-[48px] flex flex-col md:flex-row gap-[24px] justify-between'
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                delay: 0.5,
                duration: 0.5,
                ease: 'easeOut',
              },
            },
          }}
        >
          {newFeatures.map((feature, index) => (
            <NewFeatures {...feature} key={index} />
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100, rotate: 120 },
          show: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
              delay: 0.5,
              duration: 1.5,
              ease: 'easeOut',
              type: 'spring',
            },
          },
        }}
        className={`${styles.flexCenter}`}
      >
        <img
          src='/whats-new.png'
          alt='Whats new'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
