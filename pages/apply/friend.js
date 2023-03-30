'use client';

import { FriendForm, Navbar, TitleText } from "../../components";
import styles from "../../styles";
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
			<div className={`${styles.paddings} relative bg-primary-lightBlue min-h-screen`}>
				<div className={`${styles.innerWidth} mx-auto`}>
					<TitleText title={(<><span className={`${urbanist.variable} font-urbanist text-off-white font-extrabold`}>BRIDGR </span>Friend</>)} textStyles="mt-20 text-center" />
					<p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">
						Register your interest in becoming a friend and we'll get back to you to discuss!
					</p>
					<FriendForm/>
					<button className='mx-auto mt-10 border-[2px] border-white border-opacity-20 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-1 pl-6 pr-5 items-center flex flex-row rounded-2xl duration-500'>
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