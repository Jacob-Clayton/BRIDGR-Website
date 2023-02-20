'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer, fadeIn, footerVariants } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Team" textStyles="text-center" />
      <TitleText title={<>The team behind BRIDGR</>} textStyles="text-center" />
      
      <motion.div 
        className='place-items-center grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-6 sm:mt-12 md:mt-16 mt-8' 
        id='team'
        variants={fadeIn('left', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='mepusica.png' alt="Mepusica" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
              <p class="mb-0 font-bold ">Mepusica</p>
              <p class="mb-0 font-regular ">Co-Founder</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/mepusica"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/company/mepusica"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='jacob.png' alt="Jacob" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p class='mb-0 font-bold '>Jacob</p>
                <p class='mb-0 font-regular '>Co-Founder</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/kolsas_eth"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/in/jebclayton/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='kishor.png' alt="Kishor" className="w-full rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold '>Kishor</p>
                <p className='mb-0 font-regular '>Co-Founder</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/madfornfts"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/in/kishormm/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='joss.png' alt="Joss" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold '>Joss</p>
                <p className='mb-0 font-regular '>Co-Founder</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/jokongNFT"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/company/ape-gang-nft/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='hilal.png' alt="Hilal" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold '>Hilal</p>
                <p className='mb-0 font-regular '>CryptoFemale</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/hilal_baktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/in/hilalbaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='sima.png' alt="Sima" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold'>Sima</p>
                <p className='mb-0 font-regular'>GlobalB</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/simabaktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/in/simabaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='henry.png' alt="Henry" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold '>Henry</p>
                <p className='mb-0 font-regular'>Ethlas</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/henry_ethlas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/company/in/henry-foo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div>
    
        <div className="relative sm:max-w-max max-w-[150px]">
            <img src='rikong.png' alt="Rikong" className="w-full bold rounded-bl-[35px] rounded-br-[35px]"/>
            <div class="absolute overflow-hidden w-full bottom-0 left-0 py-1 px-4 bg-black bg-opacity-40 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-bl-[35px] rounded-br-[35px]">
                <p className='mb-0 font-bold'>Rikong</p>
                <p className='mb-0 font-regular'>Ape Gang</p>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col justify-end py-2 px-3 mr-3 mb-0">
              <a href="https://twitter.com/rikongnft"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white"></img></a>
              <a href="https://www.linkedin.com/company/ape-gang-nft/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] object-contain cursor-pointer text-white text-white xl:mt-2 mt-1"></img></a>
            </div>
        </div> 
    </motion.div>
    <motion.div 
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className='relative'
    >
      <div className="mt-20 ml-[10%] ">
        <div className='flex flex-row justify-between items-center '>
            <div className="p-1">
                <img src='apegang.png' alt="Ape Gang" className="w-[60%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
            <div className="p-1">
                <img src='ethlas.svg' alt="Ethlas" className="w-[100%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
            <div className="p-1">
                <img src='madfornft.png' alt="Mad for NFTs" className="w-[50%] ml-[26%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
            <div className="p-1">
                <img src='cryptofemale.png' alt="Crypto Female" className="w-[70%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
            <div className="p-1">
                <img src='globalb.png' alt="GlobalB" className="w-[60%] ml-[10%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
            <div className="p-1">
                <img src='cfj.png' alt="Crowd Fund Junction" className="w-[55%] hidden md:block" style={{opacity:'0.85'}}/>
            </div>
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

export default Insights;
