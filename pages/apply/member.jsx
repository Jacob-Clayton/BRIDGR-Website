'use client';

import { MemberForm, Navbar, TitleText } from "../../components";
import styles from "../../styles";
import Link from "next/link";

export default function member() {
    return (
		<>
			<Navbar />
			<div className={`${styles.paddings} relative bg-cetecean-blue min-h-screen`}>
				<div className={`${styles.innerWidth} flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20`}>
					<TitleText title={(<>Bridgr Membership</>)} textStyles="text-center" />
					<p className={`${styles.descriptionText} mt-10 text-center`} >
						Register your interest in becoming a member and we'll get back to you for a chat.
					</p>
					<MemberForm/>
					<button className='mx-auto mt-10 bg-off-white text-primary-black py-1 px-6 items-center flex flex-row rounded'>
						<Link className= "font-regular xl:text-xl lg:text-lg md:text-md text-sm cursor-pointer " href="/#Pricing">
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