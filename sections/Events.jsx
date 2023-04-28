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
      {/* <div className='wave-blue'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#170c4d" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
      </div> */}
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`${styles.innerWidth} mx-auto md:mt-20 sm:mt-10 mt-5 flex flex-col`}
      >
        <TitleText title={(<>Web3 Events</>)} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.05, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}
        >
          Recieve worldwide exposure at our 'WEB3 SOCIAL' events. 
          Your company will be given a professional speech, promotional graphics on screens around the event, plus video and images for your own use.
          Follow us on <a href='http://twitter.com/brizgrxyz' className='text-white font-medium'> Twitter </a> and <a href='https://medium.com/@bridgrxyz' className='text-white font-medium'>Medium</a> to stay up to date.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mx-auto lg:mt-12 md:mt-10 mt-5 flex w-full h-full "
        >
          <Image 
            src="/map-base.png" 
            alt="world map" 
            className="w-full h-full object-cover" 
            quality={100}
            width={1170}
            height={546}
          />
          <a href='https://medium.com/@bridgrxyz/web3-social-by-bridgr-a-global-events-platform-for-anyone-interested-in-web3-8f78be3aba14' aria-label="Bridgr's web3 social event platform details">
              <div className='absolute hover:bg-opacity-100 2xl:top-[140px] 2xl:right-[75px] xl:top-[130px] xl:right-[58px] lg:top-[100px] lg:right-[10px] md:top-[110px] md:right-[0px] sm:top-[110px] sm:right-[0px] top-[1px] right-0 bg-cetecean-blue bg-opacity-70 border-[1px] border-white border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[200px] md:w-[160px] sm:w-[150px] w-[130px] rounded md:p-4 sm:p-3 p-2'>
                <p className='text-off-white font-bold lg:text-xl md:text-lg md:text-md text-sm'>
                  In Asia:<br/>
                  <span className='font-normal lg:text-lg md:text-md sm:text-sm text-xs'>
                    Singapore, Seoul, Bali and Hanoi.
                  </span>
                </p>
              </div>
          </a>

          <a href='https://medium.com/@bridgrxyz/web3-social-by-bridgr-a-global-events-platform-for-anyone-interested-in-web3-8f78be3aba14' aria-label="Bridgr's web3 social event platform details">
              <div className='absolute hover:bg-opacity-100 2xl:top-[130px] 2xl:right-[40%] xl:top-[120px] xl:right-[38%] lg:top-[90px] lg:right-[32%] md:top-[0px] md:right-[30%] sm:top-[15px] sm:right-[30%] top-[85px] right-[26%] bg-cetecean-blue bg-opacity-70 border-[1px] border-white border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[300px] md:w-[290px] sm:w-[200px] w-[170px] rounded md:p-4 sm:p-3 p-2'>
                <p className='text-off-white font-bold lg:text-xl md:text-lg md:text-md text-sm'>
                  In Europe:<br/>
                  <span className='font-normal lg:text-lg md:text-md sm:text-sm text-xs'>
                    Paris, London, Berlin, Istanbul, Stockholm, Lisbon and Manchester.
                  </span>
                </p>
              </div>
          </a>

          <a href='https://medium.com/@bridgrxyz/web3-social-by-bridgr-comes-new-york-city-on-april-12th-during-nft-nyc-b10cc8f063f7' aria-label="Details on bridgr's web3 social event during NFT NYC">
              <div className='absolute hover:bg-opacity-100 2xl:top-[150px] 2xl:right-[980px] xl:top-[140px] xl:right-[900px] lg:top-[120px] lg:right-[650px] md:top-[120px] md:right-[530px] sm:top-[80px] sm:right-[380px] top-[1px] left-0 bg-cetecean-blue bg-opacity-70 border-[1px] border-white border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-[101%] duration-200 lg:w-[170px] md:w-[150px] sm:w-[130px] w-[110px] rounded md:p-4 sm:p-3 p-2'>
                <p className='text-off-white font-bold lg:text-xl md:text-lg md:text-md text-sm'>
                  In America:<br/>
                  <span className='font-normal lg:text-lg md:text-md sm:text-sm text-xs'>
                    New York City & Miami.
                  </span>
                </p>
              </div>
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Events;
