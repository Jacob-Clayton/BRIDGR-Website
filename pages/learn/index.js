import { Nav, Footer, TitleText, Articles } from "../../components";
import styles from "../../styles";
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

export default function Learn() {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="relative">
            <Nav />
            <motion.div 
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.01 }}
                className={`${styles.paddings} bg-cetecean-blue overflow-hidden`}
            >
                <div className={`${styles.innerWidth} mx-auto md:mt-20 sm:mt-10 mt-5 mb-6`}>
                    <TitleText title={(<>Learn</>)} textStyles="text-center" />
                    <motion.p 
                        variants={fadeIn('up', 'tween', 0.05, 1)}
                        initial={isLgScreen ? 'hidden' : 'visible'}
                        whileInView="show"
                        className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}
                    >
                        Learn with us. Check out our articles from Bridgr's partners.
                    </motion.p>
                    <Articles/>
                </div>
            </motion.div>
            <div className="bg-primary-black overflow-hidden">
                <Footer />
            </div>
        </section>
    );
};