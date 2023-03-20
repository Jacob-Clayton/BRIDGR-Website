'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
  <motion.h2
    variants={textVariant2}
    initial={isLgScreen ? 'hidden' : 'visible'}
    whileInView="show"
    className={`mt-[8px] font-light md:text-[50px] sm:text-[45px] text-[35px] text-off-white ${textStyles}`}
  >
    {title}
  </motion.h2>
  );
};


export const DescriptionText = ({ description, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[16px] leading-[20.16px] text-off-white" ${textStyles}`}
  >
    {description}
  </motion.h2>
);
