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
            <div className={`${styles.interWidth} mx-auto`}>
				<div className="flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20">
					<TitleText title={(<>Member Home</>)} textStyles="text-center" 
                    />
					<p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">
						The BRIDGR business model canvas to help you build and improve your Web3 company.
					</p>
				</div>
                <div className="mt-10 border-[1px] bg-off-white border-gray-500 border-opacity-30 rounded-2xl text-primary-black">
                    <div className="">
                        <div className="flex flex-row mx-auto">
                            <div className="flex-1 border-[1px] border-gray-500 border-opacity-30 rounded-tl-2xl p-2">
                                <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Key Partners</p>
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className=" border-[1px] border-gray-500 border-opacity-30 p-2">
                                    <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Key Activites</p>
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                                <div className=" border-[1px] border-gray-500 border-opacity-30 p-2">
                                    <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Key Resources</p>
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-gray-500 border-opacity-30 p-2">
                                <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Value Propositions</p>
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="border-[1px] border-gray-500 border-opacity-30 p-2">
                                    <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Customer Relations</p>
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                                <div className="border-[1px] border-gray-500 border-opacity-30 p-2">
                                    <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Channels</p>
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-gray-500 border-opacity-30 rounded-tr-2xl p-2">
                                <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Customer Segments</p>
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                        </div>
                        <div className="flex flex-row mx-auto">
                            <div className="flex-1 border-[1px] border-gray-500 border-opacity-30 rounded-bl-2xl p-2">
                                <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Cost Structure</p>
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                            <div className="flex-1 border-[1px] border-gray-500 border-opacity-30 rounded-br-2xl p-2">
                                <p className={`font-semibold xl:text-xl md:text-lg text-md mb-2`}>Revenue Streams</p>
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </section>
	);
};