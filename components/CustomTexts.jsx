'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';
import localFont from '@next/font/local';

const britanica = localFont({ 
	src: '../public/fonts/Britanica-BlackSemiExpanded.ttf',
  weight: '900',
	variable: '--font-britanica',
	display: 'swap',
});

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-secondary-white ${textStyles}`}
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
    className={`${britanica.variable} font-britanica xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl text-off-white ${textStyles}`}
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
