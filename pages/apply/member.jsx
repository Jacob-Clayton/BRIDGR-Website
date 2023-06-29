'use client';

import { MemberForm, Nav, TitleText, Button } from "../../components";
import styles from "../../styles";
import Link from "next/link";
import Image from "next/image";

export default function member() {
    return (
		<>
			<Nav />
			<div className={`${styles.paddings} relative bg-cetecean-blue min-h-screen`}>
				<div className={`${styles.interWidth} flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20`}>
					<TitleText title={(<>Bridgr Membership</>)} textStyles="text-center" />
					<p className={`${styles.descriptionText} mx-auto mt-10 lg:w-1/2 w-full text-center`} >
						Register your interest in becoming a member of Bridgr by filling out this form. 
						We'll get back to you and discuss how we can get your company headlining at our Web3 events. 
						<br/>
						Don't want to fill out the form? 
						<span className="inline-flex ml-2 sm:ml-3 mr-2"><Image src='/phone.svg' width={20} height={20} className="w-4 h-4"/></span>
							<Link href='https://calendly.com/bridgrxyz/30min-call' className='inline-flex items-baseline'>
								<span className='hover-underline-animation'>Book a call with us</span>
							</Link>
						<span className="inline-flex ml-2"><Image src='/phone.svg' width={20} height={20} className="w-4 h-4"/></span>
					</p>
					<MemberForm/>
					<Button>
						<Link className= {`${styles.descriptionText}`} href="/">
							Back
						</Link>
					</Button>
				</div>
			</div>
		</>
	);
};