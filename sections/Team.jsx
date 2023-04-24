'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';
import { useMediaQuery } from 'react-responsive';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
  display: 'swap',
})

const Team = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Team">
      <div className='wave-blue'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#379CE0" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
      </div>
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`${styles.innerWidth} mx-auto 2xl:mt-[80px] md:mt-12 sm:mt-10 mt-4 flex flex-col`}
      >
        <TitleText title={<>Our Team</>} textStyles="text-center" />

        <div class=" mx-auto text-secondary-white">
          <div class="flex flex-col text-center w-full">
            <motion.p
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className={`${poppins.variable} ${styles.descriptionText} font-poppins md:mt-10 mt-5 lg:w-3/4 mx-auto text-center`}
            >
              We are experienced Web3 professionals with capabilities spanning entrepreneurship, 
              fundraising, full stack development, web design, game design, metaverse engineering, crypto law,
              blockchain development, marketing and community building.
            </motion.p>
          </div>
          <div class="flex flex-wrap justify-center -m-2 md:mt-10 mt-5">

            <div class="flex p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full w-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/mark_gray.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Mark </h2>
                  <p class="">CEO & Co-founder</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/mepusica"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/mepusica"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/Kishor.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Kishor</h2>
                  <p class="">Co-founder</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/madforcryptos_"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/kishormm/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/Jacob.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Jacob Clayton</h2>
                  <p class="">CTO & Co-founder</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/kolsas_eth"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/jebclayton/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/Sima.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Sima Baktas</h2>
                  <p class="">Crypto Laywer & Founder of GlobalB</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/simabaktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/simabaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Hilal.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Hilal Baktas</h2>
                  <p class="">Founder of CryptoFemale & GlobalB</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/hilal_baktas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/hilalbaktas/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Henry.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Henry</h2>
                  <p class="">Founder of Ethlas Gaming Metaverse</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/henry_ethlas"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/henry-foo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

            <div class="p-2 xl:w-1/3 lg:w-1/2 w-full">
              <div class="h-full flex items-center border-white border-opacity-20 border p-4 rounded-md">
                <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Jaye.png"/>
                <div class="flex-grow">
                  <h2 class="text-off-white title-font font-medium">Jaye Foo</h2>
                  <p class="">Founder of Bored Island Group, Parlour Global & Bighaus</p>
                </div>
                <div class="flex flex-col flex-shrink-0 ml-2 xl:mr-4 mr-2">
                  <a href="https://twitter.com/jayefunk"><img src="/twitter.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white" alt='twitter'></img></a>
                  <a href="https://www.linkedin.com/in/jayefoo/"><img src="/linkedin.svg" class="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px] object-contain cursor-pointer text-white mt-2" alt='linkedin'></img></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
