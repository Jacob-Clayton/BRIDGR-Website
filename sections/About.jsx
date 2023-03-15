'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, Tooltip } from '../components';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, footerVariants } from '../utils/motion';


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
        <TitleText title={<>About Us</>} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-10 font-light 2xl:text-[27px] xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[15px] text-center text-secondary-white"
        >
          Looking to accelerate your growth in the world of Web3,
          or make the jump from Web2?
          <br/>Look no further than BRIDGR. We are a
          <span className="font-[500] text-white"> collective </span> 
          of Web3 companies offering a unique 
          <span className="font-[500] text-white"> collaborative </span> platform to accelerate your Web3 growth. 
          By partnering with us you'll gain access to our partner's combined services, communities and network.
          <br/> Let BRIDGR be the bridge to your Web3 success story.
        </motion.p>
        
        <motion.div 
          variants={footerVariants}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className='relative'
        >
        <div className="mt-20">
        <TypingText title="| Partners" textStyles="text-left" />
        {/* <p className="flex-1 font-thin xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] text-secondary-white leading-[32.4px]">
          Companies sharing their services and community under the BRIDGR umbrella.
        </p> */}
          <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            <a className="p-1 col-span-1" href='https://apegang.art/'>
              <Tooltip message={"Ape Gang"}>
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
              <Tooltip message={"Ethlas"}>
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
              <Tooltip message={"Mad for NFTs"}>
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
              <Tooltip message={"CryptoFemale"}>
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
              <Tooltip message={"Global B company & Global B Law"}>
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
            <Tooltip message={"The Parlour Singapore"}>
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
              <Tooltip message={"Bighaus"}>
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
              <Tooltip message={"Bored Island Group"}>
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
              <Tooltip message={"Crowd Fund Junction"}>
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

      <div className="mt-10">
        <TypingText title="| Friends" textStyles="text-left" />
          <div className='mt-5 place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            
            <a className="p-1 col-span-1" href='https://www.edns.domains/'>
              <Tooltip message={"Based in Hong Kong, EDNS is a decentralized name service built on Polygon. It provides a Decentralized Domain Naming Service for Web3.0 demands, including NFT, Cryptocurrency Wallet, Web hosting, DeFi ID, and GameFi ID. EDNS will expand to support more blockchains, ultimately becoming a multichain platform."}>
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

            {/* <Tooltip message={"✨ Coming soon!"}>
              <button>Subscribe</button>
            </Tooltip> */}


            {/* <a className="p-1 col-span-1" href='https://twitter.com/youplaceapp'>
              <Image 
                src='/youplacewhite.png' 
                alt="You Place" 
                className="max-w-[70%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={850}
              />
            </a> */}

          </div>
        </div>


        </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
