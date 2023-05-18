'use client';

import { Nav } from "../../components";
import styles from "../../styles";

export default function hackersLearn() {
    return (
        <>
        <Nav />
		<section className={`${styles.paddings} bg-cetecean-blue min-h-screen overflow-hidden`}>
            <div className={`${styles.articleWidth} mx-auto w-full`}>
                <article className={`${styles.descriptionText} mt-20 text-white space-y-16 dark:bg-gray-800 dark:text-gray-50`}>
                    <div className="w-full mx-auto space-y-4">
                        <p className="text-sm text-violet">Education</p>
                        <h1 className={`${styles.headerText}`}>3 Ways Hackers Attack Enterprises and Learn Private Keys</h1>
                    </div>
                    <div className="mt-10">
                        <p className={`${styles.subheaderText} mt-6`}>1. Theft of Private Keys</p>
                        With the private key, the attacker can transfer all tokens and native currency associated with the address, withdraw staked tokens from third-party systems, and send them to their own address.
                        <p className={`${styles.subheaderText} mt-6`}>2. Obtaining users’ authorization</p>
                        The attacker manipulates the user through social engineering and Web3 wallet confusion to sign a transaction transferring tokens to the attacker’s address, granting unlimited allowance, or manipulating transaction fees.
                        <p className={`${styles.subheaderText} mt-6`}>3. Compromise of 3rd Party Smart Contracts</p>
                        The attacker takes advantage of vulnerabilities in smart contracts and transfers user assets that are temporarily owned by the contract address.
                    </div>
                </article>
            </div>
		</section>
        </>
	);
};