import { Nav, Footer, TitleText } from "../../components";
import styles from "../../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

export default function Learn() {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="relative">
            <Nav />
            <div className={`${styles.paddings}  bg-cetecean-blue min-h-screen overflow-hidden`}>
                <div className={`${styles.innerWidth} mx-auto md:mt-20 sm:mt-10 mt-5`}>
                    <TitleText title={(<>Learn</>)} textStyles="text-center" />
                    <motion.p
                        variants={fadeIn('up', 'tween', 0.05, 1)}
                        initial={isLgScreen ? 'hidden' : 'visible'}
                        whileInView="show"
                        className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}
                    >
                        Learn from us. Check out our free Web3 business model!
                    </motion.p>
                    <button className='flex mx-auto mt-10 bg-off-white py-2 px-6 items-center rounded'>
						<Link className= {`${styles.descriptionText} text-primary-black`} href="/learn/businessmodel">
							Business Model
						</Link>
					</button>
                </div>
                
            </div>
            <div className="bg-primary-black overflow-hidden">
                <Footer />
            </div>
        </section>
    );
};