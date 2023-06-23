import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';

const CarouselElement = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
    <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        className={`mx-auto sm:mt-10 mt-5`}
    >
        <Carousel 
            showThumbs={false}
            selectedItem={1}
            infiniteLoop={true}
            className=""
        >

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] xl:max-w-[370px] lg:max-w-[320px] flex justify-end flex-col sm:p-8 p-4 rounded border-[1px] border-gray-500 border-opacity-30 text-left relative"
            >
                <div>
                    <p className={`${styles.headerText}`}>
                        Mark
                    </p>
                    <p className={`${styles.descriptionText}`}>
                        Co-founder
                    </p>
                </div>

                <p className={`${styles.descriptionText} sm:mt-4 mt-2`}>
                    "We've witnessed good people losing time and resources to shady players. 
                    That's why we created BRIDGR, a network of trustworthy Web3 companies 
                    working together to provide a more authentic and cooperative Web3 platform."
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
            <Image
                src="/mark_talk.jpg"
                alt="mark talking"
                className="w-full lg:block hidden xl:h-[480px] lg:h-[440px] md:h-[400px] sm:h-[400px] h-[320px] min-h-[210px] object-cover rounded"
                width={900}
                height={700}
            />
            </motion.div>
        </motion.div>

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 rounded border-[1px] border-gray-500 border-opacity-30 text-left relative"
            >
                <div>
                    <p className={`${styles.headerText}`}>
                        Kishor
                    </p>
                    <p className={`${styles.descriptionText}`}>
                        Co-founder
                    </p>
                </div>

                <p className={`${styles.descriptionText} sm:mt-4 mt-2`}>
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
                    className="w-full lg:block hidden xl:h-[480px] lg:h-[440px] md:h-[400px] sm:h-[400px] h-[320px] min-h-[210px] object-cover rounded"
                    width={910}
                    height={710}
                    quality={90}
                />
            </motion.div>
        </motion.div>

        <motion.div className="mx-auto flex lg:flex-row flex-col gap-6">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 rounded border-[1px] border-gray-500 border-opacity-30 text-left relative"
            >
                <div>
                    <h4 className={`${styles.headerText}`}>
                        Jacob
                    </h4>
                    <p className={`${styles.descriptionText}`}>
                        Co-founder
                    </p>
                </div>

            <p className={`${styles.descriptionText} sm:mt-4 mt-2`}>
                "Working in a collective where all companies collaborate as one creates a synergy that 
                boosts productivity and cultivates a culture of growth and support, directly benefitting the companies we choose to support."
            </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
                <Image
                    src="/jacob_talk.jpg"
                    alt="Jacob Talking"
                    className="w-full lg:block hidden xl:h-[480px] lg:h-[440px] md:h-[400px] sm:h-[400px] h-[320px] min-h-[210px] object-cover rounded"
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
