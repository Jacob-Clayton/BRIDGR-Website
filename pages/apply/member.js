'use client';

import { MemberForm, Navbar, TitleText } from "../../components";
import styles from "../../styles";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


export default function member() {
    return (
		<>
		<Navbar />
			<div className={`${styles.paddings} relative h-screen bg-primary-lightBlue`}>
				<div className={`${styles.innerWidth} mx-auto`}>
					<TitleText title={(<><span className={`${urbanist.variable} font-urbanist text-off-white font-extrabold`}> BRIDGR </span>  Membership</>)} textStyles="mt-20 text-center" />
					<p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">Register your interest in becoming a member and we'll get back to you to discuss!</p>
					<MemberForm/>
					<button className='mx-auto mt-20 border-[2px] border-white border-opacity-20 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-2 px-6 items-center flex flex-row rounded-2xl duration-500'>
						<Link className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer " href="/">
						Go Home</Link><Image src="/arrow.svg" className="sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] ml-3" width={20} height={20} alt="email"/>
					</button>
				</div>
			</div>
		</>
	);
};