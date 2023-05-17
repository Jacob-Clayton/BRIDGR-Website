'use client';

import { Button, FriendForm, Nav, TitleText } from "../../components";
import styles from "../../styles";
import Link from "next/link";

export default function member() {
    return (
		<>
		<Nav />
			<div className={`${styles.paddings} relative bg-cetecean-blue min-h-screen`}>
				<div className={`${styles.interWidth} flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20`}>
					<TitleText title={(<>Bridgr Friend</>)} textStyles="text-center" />
					<p className={`${styles.descriptionText} mx-auto mt-10 lg:w-2/3 w-full text-center`}>
						Register your interest in becoming a friend and we'll get back to you to discuss!
					</p>
					<FriendForm/>
					<Button>
						<Link href="/#Pricing">
							Back
						</Link>
					</Button>
				</div>
			</div>
		</>
	);
};