'use client';

import { MemberHome, Navbar, TitleText } from "../../components";
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
            <div className="bg-primary-lightBlue min-h-screen">
                <Navbar />
                <MemberHome />
            </div>
		</>
	);
};