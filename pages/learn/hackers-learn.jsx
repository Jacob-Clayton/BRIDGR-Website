'use client';

import { Nav } from "../../components";
import styles from "../../styles";

export default function hackersLearn() {
    return (
        <>
        <Nav />
		<section className={`${styles.paddings} bg-cetecean-blue min-h-screen overflow-hidden`}>
            <div className={`${styles.articleWidth} mx-auto w-full mt-20 p-8 py-12 bg-off-white rounded-lg`}>
                <article className={`${styles.descriptionText} text-primary-black`}>
                    <div className="w-full mx-auto">
                        <p className="text-sm text-violet">Education</p>
                        <p className={`${styles.headerText} text-primary-black`}>3 Ways Hackers Attack Enterprises and Learn Private Keys</p>
                    </div>
                    <div className="mt-10">
                        <p className={`${styles.subheaderText} text-primary-black mt-6`}>1. Theft of Private Keys</p>
                        With the private key, the attacker can transfer all tokens and native currency associated with the address, withdraw staked tokens from third-party systems, and send them to their own address.
                        <p className={`${styles.subheaderText} text-primary-black mt-6`}>2. Obtaining users’ authorization</p>
                        The attacker manipulates the user through social engineering and Web3 wallet confusion to sign a transaction transferring tokens to the attacker’s address, granting unlimited allowance, or manipulating transaction fees.
                        <p className={`${styles.subheaderText} text-primary-black mt-6`}>3. Compromise of 3rd Party Smart Contracts</p>
                        The attacker takes advantage of vulnerabilities in smart contracts and transfers user assets that are temporarily owned by the contract address.
                    </div>
                </article>
            </div>
		</section>
        </>
	);
};