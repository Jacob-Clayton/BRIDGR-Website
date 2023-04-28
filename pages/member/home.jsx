'use client';

import { MemberHome, Navbar } from "../../components";
import styles from "../../styles";
import Link from "next/link";
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})


export default function home() {
    return (
		<>
            <div className="bg-primary-darkBlue min-h-screen overflow-hidden">
                <Navbar />
                <MemberHome />
            </div>
		</>
	);
};