'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, Tooltip } from '../components';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, footerVariants } from '../utils/motion';
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


const About = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="About" >
      <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        {/* <TitleText title={<>About Us</>} textStyles="text-center" /> */}
        <div className='place-self-start mt-20'>
          <TypingText title="| Problem" textStyles="text-left" />
        </div>
        <motion.div 
          className='w-full flex flex-row items-center mt-5 mb-10'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              <span class="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold">$94<span className='ml-1 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md'>b</span></span>
              raised by Web3 companies
            </p>
          </div>

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              and yet
            </p>
          </div>

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              <span class="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold">90<span className='ml-1 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md'>%</span></span>
              of Web3 companies fail
            </p>
          </div>
        </motion.div>

        <div className='place-self-start mt-20'>
          <TypingText title="| Solution" textStyles="text-left" />
        </div>
        <motion.div 
          className="mx-auto flex flex-row w-full mt-5 mb-20"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span class={`${urbanist.variable} font-urbanist mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-extrabold`}>BRIDGR</span>
              Web3 collective
            </p>
          </div>

          <div className='flex-1 px-2'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span class="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold">10</span>
              Web3 companies
            </p>
          </div>

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              <span class="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold">100,000<span className='ml-1 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md align-middle'>+</span></span>
              Combined community
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={footerVariants}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className='relative'
        >
        <div className="mt-20 mb-20">
        <TypingText title="| Partners" textStyles="text-left" />
          <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            <a className="p-1 col-span-1" href='https://apegang.art/'>
              <Tooltip message={"NFT project founded in May 2021 with a team of Web3 developers, solidity developers, NFT artists and web developers."}>
              <Image 
                src='/apegang.png' 
                alt="Ape Gang" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={938}
                height={249}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href='https://ethlas.com/'>
              <Tooltip message={"Team of 30+ Web3 infrastructure engineers based in Singapore with over 2 million users on their gaming metaverse."}>
              <Image 
                src='/ethlas.png' 
                alt="Ethlas" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1531}
                height={681}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href='https://madfornfts.com/'>
              <Tooltip message={"NFT launch partner for brands, celebrities, fashion, art and influencers. They help to create, launch and market NFTs."}>
              <Image 
                src='/madfornft.png' 
                alt="Mad for NFTs" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1092}
                height={586}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href='https://www.cryptofemale.org/'>
              <Tooltip message={"Global women's crypto community empowering women in Web3 and helping them to get into the industry."}>
              <Image 
                src='/cryptofemale.png' 
                alt="Crypto Female" 
                className="max-w-[80%]" 
                style={{opacity:'0.85'}}
                quality={100}
                width={1000}
                height={596}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href='https://globalb.com.tr/'>
              <Tooltip message={"GlobalB Company provides training, consultancy and organisational development for emerging technology sectors like blockchain & cryptocurrency."}>
              <Image 
                src='/globalb.png' 
                alt="GlobalB" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={832}
                height={372}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1 md:block hidden" href="https://twitter.com/theparloursg">
            <Tooltip message={"Global chain of NFT bar & lounges. Starting out as Singapore’s 1st NFT bar & lounge. They are now opening their second location in Seoul, South Korea."}>
            <Image 
              src='/parlourQR.png' 
              alt="The Parlour Global" 
              className="max-w-[70%]" 
              style={{opacity:'0.95'}}
              quality={100}
              width={600}
              height={500}
            />
            </Tooltip>
            </a>
            <a className="p-1 col-span-1" href="">
              <Tooltip message={"NFT art gallery in Singapore providing a platform and revenue stream for NFT artists and collectors."}>
              <Image 
                src='/bighaus.png' 
                alt="Bighaus" 
                className="max-w-[80%] max-h-14" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={700}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href="https://boredisland.group/">
              <Tooltip message={"Advisory service to monetize your NFT intellectual property. They provide solutions in analysis, valuation, legal compliance, and marketing strategy. "}>
              <Image 
                src='/boredislandgroup.png' 
                alt="Bored Island Group" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={600}
              />
              </Tooltip>
            </a>
            <a className="p-1 col-span-1" href="https://www.crowdfundjunction.com/">
              <Tooltip message={"DAO community venture capital. They help crypto start-ups through advisory, funding, and marketing. Their DAO also provides entry into highly vetted crypto token offerings."}>
              <Image 
                src='/cfj.png' 
                alt="Crowd Fund Junction" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1240}
                height={399}
              />
              </Tooltip>
            </a>
          </div>

      {/* <div className="mt-10">
        <TypingText title="| Friends" textStyles="text-left" />
          <div className='mt-5 place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            
            <a className="p-1 col-span-1" href='https://www.edns.domains/'>
              <Tooltip message={"Decentralized name service built on Polygon. EDNS provide domain names for Web3, including NFT, crypto wallets, web hosting, DeFi ID, and GameFi ID and are expanding to support more blockchains."}>
              <Image 
                src='/edns.png' 
                alt="EDNS" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={938}
                height={249}
              />
              </Tooltip>
            </a>

            <a className="p-1 col-span-1" href='https://twitter.com/youplaceapp'>
              <Image 
                src='/youplacewhite.png' 
                alt="You Place" 
                className="max-w-[70%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={850}
              />
            </a>

          </div>
        </div> */}
        </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
