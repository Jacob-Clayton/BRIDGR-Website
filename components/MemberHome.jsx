'use client';

import { DescriptionText, TitleText } from "../components";
import styles from "../styles";
import Link from "next/link";
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})


export default function MemberHome() {
    return (
		<section className={`${styles.paddings}`}>
            <div className={`${styles.innerWidth} mx-auto`}>
				<div className="flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20">
					<TitleText title={(<>Member Home</>)} textStyles="text-center" 
                    />
					<p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">
						Thank you for showing an interest in becoming a member, here is our business model canvas to help you build and improve your Web3 company.
					</p>
				</div>
                <div className="mt-10 border-[1px] border-white border-opacity-30 rounded-2xl text-off-white">
                    <div className="">
                        <div className="flex flex-row mx-auto">
                            <div className="flex-1 border-[1px] border-white border-opacity-30 rounded-tl-2xl p-2">
                                <div className="flex relative mb-2">
                                    <p className={`font-medium xl:text-xl md:text-lg text-md`}>Key Partners</p>
                                    <img src="/worldwide.svg" alt='visibility' className='sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] absolute right-0'/>
                                </div>
                                <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className=" border-[1px] border-white border-opacity-30 p-2">
                                    <p className={`font-medium xl:text-xl md:text-lg text-md`}>Key Activites</p>
                                    <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                                <div className=" border-[1px] border-white border-opacity-30 p-2">
                                    <p className={`font-medium xl:text-xl md:text-lg text-md`}>Key Resources</p>
                                    <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-white border-opacity-30 p-2">
                                <p className={`font-medium xl:text-xl md:text-lg text-md`}>Value Propositions</p>
                                <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="border-[1px] border-white border-opacity-30 p-2">
                                    <p className={`font-medium xl:text-xl md:text-lg text-md`}>Customer Relations</p>
                                    <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                                <div className="border-[1px] border-white border-opacity-30 p-2">
                                    <p className={`font-medium xl:text-xl md:text-lg text-md`}>Channels</p>
                                    <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-white border-opacity-30 rounded-tr-2xl p-2">
                                <p className={`font-medium xl:text-xl md:text-lg text-md`}>Customer Segments</p>
                                <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                        </div>
                        <div className="flex flex-row mx-auto">
                            <div className="flex-1 border-[1px] border-white border-opacity-30 rounded-bl-2xl p-2">
                                <p className={`font-medium xl:text-xl md:text-lg text-md`}>Cost Structure</p>
                                <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex-1 border-[1px] border-white border-opacity-30 rounded-br-2xl p-2">
                                <p className={`font-medium xl:text-xl md:text-lg text-md`}>Revenue Streams</p>
                                <p className="text-secondary-white">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </section>
	);
};