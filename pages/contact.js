'use client';

import { Nav, Footer, Button } from "../components";
import Contact from "../sections/Contact";
import styles from "../styles";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
		<section className={`${styles.paddings} bg-cetecean-blue min-h-screen overflow-hidden`}>
            <Nav />
            <Contact />

            <Button>
                <Link className= {`${styles.descriptionText}`} href="/">
                    Back
                </Link>
            </Button>

		</section>
        </>
	);
};