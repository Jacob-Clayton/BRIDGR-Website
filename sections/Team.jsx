'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';

const Team = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Team">
      <motion.div
        variants={staggerContainer}
        initial={isMdScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Team" textStyles="text-center" />
        <TitleText title={<>The People Behind BRIDGR</>} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.innerWidth} mt-8 font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white`}
        >
          Experienced Web3 professionals with capabilities spanning entrepreneurship, fundraising, full stack development, game design, metaverse engineering, crypto lawyers, blockchain university lecturers, NFT artists, solidity developers, marketing, community and project management.
        </motion.p>
        
        <motion.div 
          className=' place-items-center grid grid-cols-2 md:grid-cols-4 sm:gap-18 gap-6 sm:mt-12 md:mt-16 mt-8' 
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p class="mb-0 font-bold ">Mepusica</p>
                <p class="mb-0 font-regular ">Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/mepusica"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/mepusica"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p class='mb-0 font-bold '>Jacob</p>
                  <p class='mb-0 font-regular '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/kolsas_eth"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/jebclayton/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold '>Kishor</p>
                  <p className='mb-0 font-regular '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/madfornfts"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/kishormm/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold '>Joss</p>
                  <p className='mb-0 font-regular '>Co-Founder</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/jokongNFT"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/ape-gang-nft/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold '>Hilal</p>
                  <p className='mb-0 font-regular '>CryptoFemale</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/hilal_baktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/hilalbaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold'>Sima</p>
                  <p className='mb-0 font-regular'>GlobalB</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/simabaktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/in/simabaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold '>Henry</p>
                  <p className='mb-0 font-regular'>Ethlas</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/henry_ethlas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/in/henry-foo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
              </div>
          </div>
      
          <div className="relative sm:max-w-max max-w-[150px]">
              <Image 
                src='/rikong.png' 
                alt="Rikong" 
                className=" bold rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                quality={100}
                width={270}
                height={250}
              />
              <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.85rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                  <p className='mb-0 font-bold'>Rikong</p>
                  <p className='mb-0 font-regular'>Ape Gang</p>
              </div>
              <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
                <a href="https://twitter.com/rikongnft"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
                <a href="https://www.linkedin.com/company/ape-gang-nft/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
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