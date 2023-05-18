import { Nav, Footer, TitleText, Articles } from "../../components";
import styles from "../../styles";
import { useMediaQuery } from 'react-responsive';

export default function Learn() {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="relative">
            <Nav />
            <div className={`${styles.paddings} bg-cetecean-blue overflow-hidden`}>
                <div className={`${styles.interWidth} mx-auto md:mt-20 sm:mt-10 mt-5`}>
                    <TitleText title={(<>Learn</>)} textStyles="text-center" />
                    <p className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}>
                        Learn with us. Check out our articles from Bridgr's partners.
                    </p>
                    <Articles/>
                </div>
            </div>
            <div className="bg-primary-black overflow-hidden">
                <Footer />
            </div>
        </section>
    );
};