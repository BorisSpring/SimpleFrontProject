'use client';

import { motion } from 'framer-motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.03 },
      },
    }}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'tween',
              ease: 'easeOut',
            },
          },
        }}
        key={index}
      >
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}{' '}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={{
      hidden: { opacity: 0, x: 50, y: 0 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { ease: 'easeOut', type: 'tween' },
      },
    }}
    className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] `}
  >
    {title}
  </motion.h2>
);
