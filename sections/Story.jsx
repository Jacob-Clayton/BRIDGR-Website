'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Poppins } from '@next/font/google';
import Image from 'next/image';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
    display: 'swap',
})

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`relative z-10`} id="Story">
            <motion.div 
                className={`${styles.innerWidth} mx-auto md:mt-10 mt-5`}
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
            <TitleText title={<>Our Story</>} textStyles="text-center" />


            {/* <section className="text-secondary-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 items-start">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                        <img alt="testimonial" className="w-80 mb-8 object-cover object-center rounded-md inline-block border-gray-200 bg-gray-100" src="/mark_talk.jpg"/>
                        <p className={`${styles.descriptionText} ${poppins.variable} font-poppins leading-relaxed`}>
                            "We've witnessed good people losing time and resources to shady players. 
                            That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                            working together to provide a more authentic and cooperative Web3 platform."
                        </p>
                        <span className="inline-block h-[2px] w-10 rounded bg-white bg-opacity-30 mt-6 mb-4"></span>
                        <h2 className="text-off-white font-medium title-font tracking-wider text-sm">MARK</h2>
                        <p className="">CEO & Co-founder</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                        <img alt="testimonial" className="w-80 mb-8 object-cover object-center rounded-md inline-block border-gray-200 bg-gray-100" src="/kishor-talk.jpeg"/>
                        <p className={`${styles.descriptionText} ${poppins.variable} font-poppins leading-relaxed`}>
                            “Community is everything in Web3, it's also a huge struggle for companies joining. BRIDGR helps solve this by 
                            providing immediate access to a worldwide Web3 community ontop of a full suite of technical services.”
                        </p>
                        <span className="inline-block h-[2px] w-10 rounded bg-white bg-opacity-30 mt-6 mb-4"></span>
                        <h2 className="text-off-white font-medium title-font tracking-wider text-sm">KISHOR</h2>
                        <p className="">Co-founder</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                        <img alt="testimonial" className="w-80 mb-8 object-cover object-center rounded-md inline-block border-gray-200 bg-gray-100" src="/jacob_talk.jpg"/>
                        <p className={`${styles.descriptionText} ${poppins.variable} font-poppins leading-relaxed`}>
                            "Working as a collective like BRIDGR fosters a culture of transparency and shared decision-making.
                            It empowers everyone to work as one in shaping the direction of the company and the companies 
                            we help build."
                        </p>
                        <span className="inline-block h-[2px] w-10 rounded bg-white bg-opacity-30 mt-6 mb-4"></span>
                        <h2 className="text-off-white font-medium title-font tracking-wider text-sm">JACOB CLAYTON</h2>
                        <p className="">CTO & Co-founder</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}

                <div className={`mx-auto md:mt-10 mt-5`}>
                    <motion.div
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className={`flex `}
                    >
                            <motion.p
                                variants={fadeIn('up', 'tween', 0.2, 1)}
                                className={`${poppins.variable} ${styles.descriptionText} font-poppins mx-auto w-3/4 text-center`}
                            >
                                Our founders love Web3 and the potential of decentralized online systems. 
                                Unfortunately, we've witnessed good people losing time, energy, and resources to shady players. 
                                That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                                working together to provide a more authentic and cooperative Web3 platform.
                            </motion.p>
                    </motion.div>
                </div>
                {/* <div className='wave-blue2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2B79AD" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                </div> */}
                    
            </motion.div>
        </section>
    );
};

export default Story;
