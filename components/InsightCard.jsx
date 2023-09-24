'use client';

import { motion } from 'framer-motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    className='flex items-center gap-[32px] mb-[20px] flex-col sm:flex-row'
    variants={{
      hidden: { opacity: 0, y: 0, x: index % 2 === 0 ? 200 : -200 },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: 'tween',
          delay: index * 0.5,
          duration: 1,
          ease: 'easeOut',
        },
      },
    }}
  >
    <img
      src={imgUrl}
      className='xs:w-full sm:w-[270px] sm:h-[250px]   object-cover rounded-[32px] '
    />
    <div className='flex flex-col  max-w-[646px] gap-5  '>
      <h4 className='text-white text-bold  text-[30px] leading-[40px]  md:text-[42px] md:leading-[52px] '>
        {title}
      </h4>
      <p className='text-[#FFFFFF] opacity-[0.4] text-[20px] '>{subtitle}</p>
    </div>
    <div className='w-[100px] h-[100px] realtive  items-center justify-center rotate-[-29deg] hidden xl:flex rounded-full border-[2px]'>
      <img
        src='arrow.svg'
        alt='w-[27.10px] h-[33px] left-[8px] top-[37px] absolute rotate-[-90deg] origin[0,0] '
      />
    </div>
  </motion.div>
);

export default InsightCard;
