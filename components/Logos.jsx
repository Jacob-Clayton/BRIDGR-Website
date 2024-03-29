'use client';

import { motion } from 'framer-motion';
import { TypingText, Tooltip } from '../components';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';
import { memberLogos } from '../constants';

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
            <TypingText title="Members" textStyles="text-left sm:px-3 px-2" />
            <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-6 gap-6 sm:gap-y-6 gap-y-3'>
                {memberLogos.map((member) => {
                    return (
                        <Link className="p-1 col-span-1" href={member.link}>
                            <Tooltip message={member.message}>
                                <Image 
                                    src={member.imgUrl} 
                                    alt={member.altText}
                                    className={member.maxWidth}
                                    style={{opacity:'0.95'}}
                                    quality={100}
                                    width={800}
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
