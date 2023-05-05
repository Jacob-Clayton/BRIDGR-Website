'use client';

import { Nav, Footer } from "../components";
import Contact from "../sections/Contact";
import styles from "../styles";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
		<section className={`${styles.paddings} bg-cetecean-blue`}>
            <div className={` mx-auto h-full overflow-hidden`}>
                <Nav />
                <div className={``}>
                    <Contact />
                    <p className={`${styles.descriptionText} mx-auto lg:w-3/4 w-full text-center`}>
                        Would you like the Bridgr collective to help you?
                        <br/>Register your interest below, we'd love to hear from you.
                    </p>
                    <button className="bg-violet border border-violet text-off-white py-2 px-6 mx-auto mt-5 items-center flex flex-row rounded">
                        <Link className={`${styles.descriptionText}`} href="/apply/member">
                            Register Interest</Link>
                    </button>

                    <button className='mx-auto border mt-10 border-violet py-2 px-6 items-center flex rounded'>
						<Link className= {`${styles.descriptionText}`} href="/">
							Back
						</Link>
					</button>
                </div>
            </div>
		</section>
        <Footer />

        </>
	);
};