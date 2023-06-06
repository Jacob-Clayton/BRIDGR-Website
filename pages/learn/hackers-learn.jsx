'use client';

import { Button, Footer, Navbar } from "../../components";
import styles from "../../styles";
import Link from "next/link";

export default function hackersLearn() {
    return (
        <>
        <Navbar top={'top-0 bg-cetecean-blue'} />
		<section className={`${styles.yPaddings} bg-cetecean-blue min-h-screen overflow-hidden`}>
            <div className={`${styles.articleWidth} mx-auto w-full mt-20 p-8 py-12 bg-off-white rounded-lg`}>
                <article className={`${styles.descriptionText} text-primary-black`}>
                    <div className="w-full mx-auto">
                        <img className="max-h-[100px] rounded" src='/fraud_news.jpg' alt="article logo"/>
                        <p className="text-sm text-violet mt-3 mb-1">Education</p>
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
                    <div className="flex flex-col justify-end place-content-end mt-10 bg-lavender rounded px-4 py-2">
                        <span className="flex flex-row justify-between items-center">
                            <p className="text-sm text-off-white">18th May 2023</p>
                            <div className="flex flex-row gap-4 items-center">
                                <p className="text-sm text-off-white">By</p>
                                <Link href={'https://ethlas.com/'}>
                                    <img className="xl:max-w-[100px] max-w-[70px] xl:max-h-[45px] sm:max-h-[40px] max-h-[38px]" src='/ethlas_white.png' alt="article logo"/>
                                </Link>
                            </div>
                        </span>
                    </div>
                </article>
            </div>
            <div className="mt-10">
                <Link href={'/learn'}>
                    <Button>Back</Button>
                </Link>
            </div>
		</section>
        <Footer/>
        </>
	);
};