'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const WhatsNew = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className=" flex-2 justify-center flex-col"
        >
          <TitleText title={<>What's special about us?</>} />
          <div className="mt-10 flex flex-wrap justify-between sm:gap-16 gap-8">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={`flex-1 sm:max-w-[500px] max-w-[300px] mx-auto ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="get-started"
            className="object-contain"
            quality={90}
            width={1333}
            height={833}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
