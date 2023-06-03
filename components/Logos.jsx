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
            className='relative mb-6'
        > 
        
            <TypingText title="Partners" textStyles="text-left sm:px-3 px-2" />
            <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
                {partnerLogos.map((partner) => {
                    return (
                        <Link className="p-1 col-span-1" href={partner.link}>
                            <Tooltip message={partner.message}>
                                <Image 
                                    src={partner.imgUrl} 
                                    alt={partner.altText}
                                    className={partner.maxWidth} 
                                    style={{opacity:'0.95'}}
                                    quality={100}
                                    width={938}
                                    height={400}
                                />
                            </Tooltip>
                        </Link>
                    )
                })}
            </div>

            <TypingText title="Friends" textStyles="text-left sm:px-3 px-2 mt-10" />
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

    </motion.div>
    );
};
    
export default Logos;
