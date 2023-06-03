'use client';

import { motion } from 'framer-motion';
import { TypingText, Tooltip } from '../components';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';
import { friendLogos, partnerLogos } from '../constants';

const Logos = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <motion.div 
            variants={fadeIn('up', 'tween', 0.05, 1)}
            initial={isLgScreen ? 'hidden' : 'visible'}
            whileInView="show"
            viewport={{ once: false, amount: 0.01 }}
            className='relative'
        >
        <div className="mb-6">
        <TypingText title="Partners" textStyles="text-left sm:px-3 px-2" />
            <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
                
                <Link className="p-1 col-span-1" href='https://apegang.art/'>
                <Tooltip message={"The 10th most sold NFT project, founded in May 2021. They have a team of Web devs, blockchain devs, NFT artists and community builders."}>
                <Image 
                    src='/apegang.png' 
                    alt="Ape Gang" 
                    className="sm:max-w-[90%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={938}
                    height={249}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href='https://ethlas.com/'>
                <Tooltip message={"Team of 30+ Web3 infrastructure engineers based in Singapore with over 2 million users on their gaming metaverse."}>
                <Image 
                    src='/ethlas_white.png' 
                    alt="Ethlas" 
                    className="sm:max-w-[90%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1531}
                    height={681}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href='https://madfornfts.com/'>
                <Tooltip message={"NFT launch partner for brands, celebrities, fashion, art and influencers. They help to create, launch and market NFTs."}>
                <Image 
                    src='/madfornft.png' 
                    alt="Mad for NFTs" 
                    className="sm:max-w-[85%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1092}
                    height={586}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href='https://www.cryptofemale.org/'>
                <Tooltip message={"Global women's crypto community empowering women to get into the Web3 industry."}>
                <Image 
                    src='/cryptofemale.png' 
                    alt="Crypto Female" 
                    className="sm:max-w-[80%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1000}
                    height={596}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href='https://globalb.com.tr/'>
                <Tooltip message={"GlobalB Company provides training, consultancy and organisational development for emerging technology sectors like blockchain & cryptocurrency."}>
                <Image 
                    src='/globalb.png' 
                    alt="GlobalB" 
                    className="sm:max-w-[85%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={832}
                    height={372}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href="https://twitter.com/theparloursg">
                <Tooltip message={"Global chain of NFT bar & lounges. Starting out as Singapore’s 1st NFT bar & lounge. They are now opening their second location in Seoul, South Korea."}>
                <Image 
                    src='/parlourQR.png' 
                    alt="The Parlour Global" 
                    className="sm:max-w-[65%] max-w-[80%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={600}
                    height={500}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href="">
                <Tooltip message={"NFT art gallery in Singapore providing a platform and revenue stream for NFT artists and collectors."}>
                <Image 
                    src='/bighaus.png' 
                    alt="Bighaus" 
                    className="sm:max-w-[70%] max-w-[80%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1000}
                    height={700}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href="https://boredisland.group/">
                <Tooltip message={"Advisory service to monetize NFT intellectual property. They provide solutions in analysis, valuation, legal compliance, and marketing strategy."}>
                <Image 
                    src='/boredislandgroup.png' 
                    alt="Bored Island Group" 
                    className="sm:max-w-[90%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1000}
                    height={600}
                />
                </Tooltip>
                </Link>

                <Link className="p-1 col-span-1" href="https://www.crowdfundjunction.com/">
                <Tooltip message={"Venture Capital DAO. They help crypto start-ups through funding, advisory and marketing and provide entry into highly vetted crypto token offerings."}>
                <Image 
                    src='/cfj.png' 
                    alt="Crowd Fund Junction" 
                    className="max-w-[100%]" 
                    style={{opacity:'0.95'}}
                    quality={100}
                    width={1240}
                    height={399}
                />
                </Tooltip>
                </Link>
            </div>

            <div className="mt-10">
                <TypingText title="Friends" textStyles="text-left sm:px-3 px-2" />
                <div className='place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
                    
                    {friendLogos.map((friend) => {
                        return (
                        <Link className="p-1 col-span-1" href={friend.link}>
                            <Tooltip message={friend.message}>
                                <Image 
                                src={friend.imgUrl} 
                                alt={friend.altText} 
                                className={friend.maxWidth}
                                style={{opacity:'0.95'}}
                                quality={100}
                                width={600}
                                height={400}
                                />
                            </Tooltip>
                        </Link>
                        )
                    })}

                </div>
            </div>
        </div>
    </motion.div>
    );
};
    
export default Logos;
