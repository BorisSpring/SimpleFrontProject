'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';

import { exploreWorlds } from '../constants';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section id='explore'>
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
        className={`${styles.innerWidth} mx-auto ${styles.paddings}  flex flex-col `}
      >
        {' '}
        <TypingText textStyles='font-[14px] text-center' title='| The World' />
        <TitleText
          textStyles=' mt-[24px] md:mt-[32px] text-white text-center'
          title='Choose the world you want   to explore'
        />
        <div className='flex mt-[50px] flex-col md:flex-row min-h-[70vh] gap-5'>
          {exploreWorlds?.map((world, index) => (
            <ExploreCard
              key={world.id}
              index={index}
              {...world}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
