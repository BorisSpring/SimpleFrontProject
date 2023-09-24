'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { insights } from '../constants';

const Insights = () => (
  <motion.section
    className={`${styles.innerWidth} ${styles.paddings} mx-auto`}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    }}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
  >
    <TypingText title='| Insigth' textStyles='w-fit mx-auto' />
    <TitleText
      title='Insight about metaverse'
      textStyles='text-center text-white mb-[48px]  leading-[40px] sm:leading-[60px] '
    />
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
    >
      {insights.map((insight, index) => (
        <InsightCard index={index} {...insight} key={index} />
      ))}
    </motion.div>
  </motion.section>
);

export default Insights;
