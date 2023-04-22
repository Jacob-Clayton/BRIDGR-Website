'use client';

import { MemberForm, Navbar, TitleText } from "../../components";
import styles from "../../styles";
import Link from "next/link";
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})


export default function member() {
    return (
		<>
			<Navbar />
			<div className={`${styles.paddings} relative bg-primary-lightBlue min-h-screen`}>
				<div className={`${styles.innerWidth} flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20`}>
					<TitleText title={(<><span className={`${urbanist.variable} font-urbanist text-off-white font-extrabold`}>BRIDGR </span>Membership</>)} textStyles="text-center" />
					<p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">
						Register your interest in becoming a member and we'll get back to you for a chat.
					</p>
					<MemberForm/>
					<button className='mx-auto mt-10 border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-6 items-center flex flex-row rounded-lg duration-500'>
						<Link className= "font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-400 cursor-pointer " href="/#Pricing">
							Go Back
						</Link>
						{/* <object className='ml-1 w-[30px] h-[30px]' type="image/svg+xml" data="/bridgrlogoanimatedslow.svg">
							<img src="/bridgrlogoanimatedslow.svg" alt='bridgr logo animated'/>
						</object> */}
					</button>
				</div>
			</div>
		</>
	);
};