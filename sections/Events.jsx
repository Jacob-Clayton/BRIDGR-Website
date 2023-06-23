'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const Events = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Events">
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`${styles.innerWidth} mx-auto md:mt-10 mt-5 flex flex-col`}
      >
        <div className='gradient-04 z-0 lg:block hidden' />

        <TitleText title={(<>Web3 Events</>)} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.05, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}
        >
          Recieve worldwide exposure at our Web3 events. 
          Your company will be given a professional speech, promotional graphics on screens around the event, plus video and images for your own use.
          Follow us on <a href='http://twitter.com/brizgrxyz' className='text-white font-semibold hover-underline-animation'> Twitter </a> and <a href='https://medium.com/@bridgrxyz' className='text-white font-semibold hover-underline-animation'>Medium</a> to stay up to date.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mx-auto sm:flex hidden lg:mt-12 md:mt-10 mt-5 w-full h-full "
        >
          <Image 
            src="/map-base.png" 
            alt="world map" 
            className="w-full h-full object-cover" 
            quality={100}
            width={1170}
            height={546}
          />
          <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20' aria-label="Bridgr's web3 social event platform details">
              <div className='absolute hover:bg-opacity-100 2xl:top-[140px] 2xl:right-[75px] xl:top-[130px] xl:right-[58px] lg:top-[100px] lg:right-[10px] md:top-[128px] md:right-[0px] sm:top-[110px] sm:right-[0px] top-[-5px] right-0 bg-cetecean-blue bg-opacity-80 border-[1px] border-gray-500 border-opacity-30 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[200px] md:w-[185px] sm:w-[160px] w-[150px] rounded md:p-4 sm:p-3 p-2'>
                <p className={`${styles.subheaderText}`}>
                  Asia
                </p>
                <p className={`${styles.descriptionText}`}>
                  Singapore, India, Seoul, Bali and Hanoi.
                </p>
              </div>
          </a>

          <a href='https://twitter.com/Bridgrxyz/status/1644964278833905667?s=20' aria-label="Bridgr's web3 social event platform details">
              <div className='absolute hover:bg-opacity-100 2xl:top-[130px] 2xl:right-[40%] xl:top-[120px] xl:right-[38%] lg:top-[90px] lg:right-[32%] md:top-[0px] md:right-[30%] sm:top-[1px] sm:right-[30%] top-[90px] right-[26%] bg-cetecean-blue bg-opacity-80 border-[1px] border-gray-500 border-opacity-30 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[260px] md:w-[250px] sm:w-[210px] w-[195px] rounded md:p-4 sm:p-3 p-2'>
                <p className={`${styles.subheaderText}`}>
                  Europe
                </p>
                <p className={`${styles.descriptionText}`}>
                  Paris, London, Berlin, Istanbul, Stockholm, Lisbon and Manchester.
                </p>
              </div>
          </a>

          <a href='https://twitter.com/Bridgrxyz/status/1650437870321291269?s=20' aria-label="Details on bridgr's web3 social event during NFT NYC">
              <div className='absolute hover:bg-opacity-100 2xl:top-[150px] 2xl:right-[980px] xl:top-[140px] xl:right-[900px] lg:top-[120px] lg:right-[650px] md:top-[140px] md:right-[530px] sm:top-[80px] sm:right-[380px] top-[-5px] left-0 bg-cetecean-blue bg-opacity-80 border-[1px] border-gray-500 border-opacity-30 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[170px] md:w-[150px] sm:w-[130px] w-[120px] rounded md:p-4 sm:p-3 p-2'>
                <p className={`${styles.subheaderText}`}>
                  America
                </p>
                <p className={`${styles.descriptionText}`}>
                  New York City & Miami.
                </p>
              </div>
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Events;
