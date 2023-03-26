'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, PricingTable } from '../components';

const Pricing = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings}`} id="Pricing">
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto mt-0 flex flex-col`}
            >
            <TitleText title={<>Pricing</>}textStyles="text-center" />
                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial={isLgScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                    className="md:mt-10 mt-5 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white"
                >
                    Become a Friend to increase your visibility at our global 'WEB3 SOCIAL' events. <br/>
                    Become a Member to gain full access to all our services plus our combined global community. <br/>
                    Don't need the full package? Then we have a consultancy service to build your Web3 product from the ground up.

                </motion.p>
                <PricingTable/>                
            </motion.div>
        </section>
    );
};

export default Pricing;
