'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { CarouselElement, TitleText } from '../components';
import { useMediaQuery } from 'react-responsive';

const Team = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Team">
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`${styles.innerWidth} mx-auto md:mt-10 mt-5`}
      >
        <TitleText title={<>Our Team</>} textStyles="text-center" />
        <div className="mx-auto text-secondary-white">
          <motion.p
            variants={fadeIn('up', 'tween', 0.05, 1)}
            initial={isLgScreen ? 'hidden' : 'visible'}
            whileInView="show"
            viewport={{ once: false, amount: 0.01 }}
            className={`${styles.descriptionText} md:mt-10 mt-5 lg:w-3/4 w-full mx-auto text-center`}
          >
            We are experienced Web3 professionals with capabilities spanning entrepreneurship, events management, 
            fundraising, web development, marketing and community building.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 'tween', 0.05, 1)}
            initial={isLgScreen ? 'hidden' : 'visible'}
            whileInView="show"
            viewport={{ once: false, amount: 0.01 }}
            className={` flex flex-wrap justify-center -m-2 md:mt-10 mt-5`}
          >

            <div className="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-500 border-opacity-30 border p-4 rounded">
                <Image alt="team" width={150} height={150} className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/mark.png"/>
                <div className="flex-grow">
                  <p className={`${styles.descriptionText}`}>Mark </p>
                  <p className="text-secondary-white">Co-founder</p>
                </div>
                <div className="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2 gap-3">
                  <a href="https://twitter.com/mepusica"><img src="/twitter.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/mepusica"><img src="/linkedin.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div className="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-500 border-opacity-30 border p-4 rounded">
                <Image alt="team" width={150} height={150} className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/kishor.png"/>
                <div className="flex-grow">
                  <p className={`${styles.descriptionText}`}>Kishor</p>
                  <p className="text-secondary-white">Co-founder</p>
                </div>
                <div className="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2 gap-3">
                  <a href="https://twitter.com/madforcryptos_"><img src="/twitter.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/kishormm/"><img src="/linkedin.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div className="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-500 border-opacity-30 border p-4 rounded">
                <Image alt="team" width={150} height={150} className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/jacob.png"/>
                <div className="flex-grow">
                  <p className={`${styles.descriptionText}`}>Jacob</p>
                  <p className="text-secondary-white">Co-founder</p>
                </div>
                <div className="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2 gap-3">
                  <a href="https://twitter.com/kolsas_eth"><img src="/twitter.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/jebclayton/"><img src="/linkedin.svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        <CarouselElement />
      </motion.div>
    </section>
  );
};

export default Team;
