'use client';

import { MemberForm, Nav, TitleText } from "../../components";
import styles from "../../styles";
import Link from "next/link";

export default function member() {
    return (
		<>
			<Nav />
			<div className={`${styles.paddings} relative bg-cetecean-blue min-h-screen`}>
				<div className={`${styles.innerWidth} flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20`}>
					<TitleText title={(<>Bridgr Membership</>)} textStyles="text-center" />
					<p className={`${styles.descriptionText} mx-auto mt-10 lg:w-3/4 w-full text-center`} >
						Register your interest in becoming a member of Bridgr to gain access to our collective's combined services
						and we'll get back to you to discuss how we can best be deployed to help your Web3 business succeed.
					</p>
					<MemberForm/>
					<button className='mx-auto mt-10 border border-violet py-2 px-6 items-center flex rounded'>
						<Link className= {`${styles.descriptionText}`} href="/">
							Back
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};