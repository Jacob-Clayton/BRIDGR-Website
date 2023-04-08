import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
    display: 'swap',
})

const CarouselElement = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
    <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`${styles.innerWidth} mx-auto`}
    >
        <Carousel 
            showThumbs={false}
            selectedItem={1}
            infiniteLoop={true}
        >

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#ffffff] border-opacity-[30%] text-left relative"
            >
                <div>
                    <p className="font-normal sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                        Mark
                    </p>
                    <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                        Founder of BRIDGR
                    </p>
                </div>

                <p className={`${styles.descriptionText} ${poppins.variable} font-poppins mt-[24px]`}>
                    "Our shared worldwide community offers immense strength in fostering a sense of belonging, collaboration, 
                    and collective action towards a common goal. Our global community leverages their collective strength to 
                    increase visibility for all partners, members and friends."
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
            <Image
                src="/mark_talk.jpg"
                alt="mark talking"
                className="w-full lg:block hidden lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                width={900}
                height={700}
            />
            </motion.div>
        </motion.div>

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#ffffff] border-opacity-[30%] text-left relative"
            >
                <div>
                    <p className="font-normal sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                        Kishor
                    </p>
                    <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                        Founder of BRIDGR
                    </p>
                </div>

                <p className={`${styles.descriptionText} ${poppins.variable} font-poppins mt-[24px]`}>
                    “Community is everything in Web3, it's also a huge struggle for companies joining. BRIDGR helps solve this by 
                    providing immediate access to a worldwide Web3 community ontop of a full suite of technical services.”
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
                <Image
                    src="/kishor-talk.jpeg"
                    alt="kishor talking"
                    className="w-full lg:block hidden lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                    width={910}
                    height={710}
                    quality={95}
                />
                {/* <motion.div
                    variants={zoomIn(0.4, 1)}
                    className="lg:block hidden absolute -left-[10%] top-[3%]"
                >
                <a href='https://t.me/bridgr'>
                    <img
                        src="/stamp2.png"
                        alt="stamp"
                        className="w-[155px] h-[155px] object-contain"
                    />
                </a>
                </motion.div> */}
            </motion.div>
        </motion.div>

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#ffffff] border-opacity-[30%] text-left relative"
            >
                <div>
                    <h4 className="font-normal sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                        Jacob
                    </h4>
                    <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                        Founder of BRIDGR
                    </p>
                </div>

            <p className={`${styles.descriptionText} ${poppins.variable} font-poppins mt-[24px]`}>
                "Working as a collective like BRIDGR fosters a culture of transparency and shared decision-making.
                It empowers everyone to work as one in shaping the direction of the company and the companies 
                we help build."
            </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
                <Image
                    src="/jacob_talk.jpg"
                    alt="Jacob Talking"
                    className="w-full lg:block hidden lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                    width={910}
                    height={710}
                    quality={95}
                />
            </motion.div>
        </motion.div>

        </Carousel>
    </motion.div>
    );
};

export default CarouselElement;
