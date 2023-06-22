'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, PricingTable } from '../components';

const Pricing = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings} md:mt-10 mt-5`} id="Pricing">
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TitleText title={<>Pricing</>}textStyles="text-center" />
                <PricingTable/>                
            </motion.div>
        </section>
    );
};

export default Pricing;
