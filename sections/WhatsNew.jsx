'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const WhatsNew = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial={isMdScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Unique " />
          <TitleText title={<>What's Special About BRIDGR?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={`flex-1 ${styles.flexCenter}`}
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
