'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';

const Team = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Team">
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto mt-0 flex flex-col`}
      >
        <TitleText title={<>The Team</>} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.innerWidth} md:mt-10 mt-5 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white`}
        >
          Experienced Web3 professionals with capabilities spanning entrepreneurship, 
          fundraising, full stack development, web design, game design, metaverse engineering, crypto law, 
          university blockchain lecturing, NFT art creation, blockchain development, marketing, community management and project management.
        </motion.p>
        
        <motion.div 
          className=' place-items-center grid grid-cols-2 md:grid-cols-4 sm:gap-10 lg:gap-16 xl:gap-20 gap-5 md:gap-y-10 gap-y-5 sm:mt-12 md:mt-16 mt-8' 
          id='team'
          variants={fadeIn('left', 'tween', 0.2, 1)}
        >
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/mepusica.png' 
                alt="Mepusica" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                <p class="mb-0 font-regular ">Mepusica</p>
                <p class="mb-0 font-light ">Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/mepusica"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/mepusica"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/jacob.png' 
                alt="Jacob" 
                className="bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p class='mb-0 font-regular '>Jacob</p>
                  <p class='mb-0 font-light '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/kolsas_eth"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/jebclayton/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/kishor.png' 
                alt="Kishor" 
                className=" rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular '>Kishor</p>
                  <p className='mb-0 font-light '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/madforcryptos_"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/kishormm/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/joss.png' 
                alt="Joss" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl  rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular '>Joss</p>
                  <p className='mb-0 font-light '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/jokongNFT"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/ape-gang-nft/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/hilal.png' 
                alt="Hilal" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular '>Hilal</p>
                  <p className='mb-0 font-light '>CryptoFemale</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/hilal_baktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/hilalbaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/sima.png' 
                alt="Sima" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular'>Sima</p>
                  <p className='mb-0 font-light'>GlobalB</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/simabaktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/simabaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/henry.png' 
                alt="Henry" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular '>Henry</p>
                  <p className='mb-0 font-light'>Ethlas</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/henry_ethlas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/in/henry-foo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/jayefoo.png' 
                alt="jaye"
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[15px] sm:rounded-tl-[15px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-primary-black bg-opacity-70 text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-regular'>Jaye</p>
                  <p className='mb-0 font-light'>The Parlour</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/jayefunk"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/jayefoo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] object-contain cursor-pointer text-white mt-1"></img></a>
              </div>
          </div> 
      </motion.div>
        
        {/* <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default Team;
