'use client';

import { ContactForm, TitleText, TypingText } from '../components';
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings} relative z-10`} id="Contact">
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex justify-center mb-10`}
            >
                <TitleText title={<>Contact us</>} />
            </motion.div>
            <ContactForm/>
        </section>
    );
};

export default Contact;