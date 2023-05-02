'use client';

import { TitleText, Logos } from "../components";
import styles from "../styles";
import Link from "next/link";

export default function MemberHome() {
    return (
		<section className={`${styles.paddings}`}>
            <div className={`${styles.interWidth} mx-auto`}>
				<div className="flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20">
					<TitleText title={(<>Member Home</>)} textStyles="text-center" 
                    />
                    <p className={`sm:mt-8 mt-5 ${styles.descriptionText} text-center`}>
                        The BRIDGR business model canvas to help you build and improve your Web3 company.
                    </p>
				</div>
                <div className="sm:mt-10 mt-5 bg-off-white bg-opacity-[95%] shadow-lg rounded-md text-gray-700">
                    <div className="">
                        <div className="flex lg:flex-row flex-col mx-auto">
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-tl-md px-4 py-3">
                                <p className={`font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Partners</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="">How BRIDGR can help:</p>
                                <ul className="list-disc list-inside px-1">
                                    <li className="">Ethlas</li>
                                    <li className="">Ape Gang</li>
                                    <li className="">Mad for NFTs</li>
                                    <li className="">Crowd Fund Junction</li>
                                    <li className="">Crypto Female</li>
                                    <li className="">GlobalB Company</li>
                                    <li className="">GlobalB Law</li>
                                    <li className="">The Parlour Global</li>
                                    <li className="">Bighaus</li>
                                    <li className="">Bored Island Group</li>
                                </ul>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className=" border-[1px] border-black border-opacity-10 px-4 py-3">
                                    <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Activites</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="">How BRIDGR can help:</p>
                                </div>
                                <div className=" border-[1px] border-black border-opacity-10 px-3 py-3">
                                    <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Resources</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="">How BRIDGR can help:</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 px-4 py-3">
                                <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Value Propositions</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="">How BRIDGR can help:</p>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="border-[1px] border-black border-opacity-10 px-4 py-3">
                                    <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Customer Relations</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="">How BRIDGR can help:</p>
                                </div>
                                <div className="border-[1px] border-black border-opacity-10 px-4 py-3">
                                    <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Channels</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="">How BRIDGR can help:</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-tr-md px-4 py-3">
                                <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Customer Segments</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="">How BRIDGR can help:</p>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col mx-auto">
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-bl-md px-4 py-3">
                                <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Cost Structure</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="">How BRIDGR can help:</p>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-br-md px-4 py-3">
                                <p className={` font-medium xl:text-xl md:text-lg text-md mb-2`}>Revenue Streams</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="">How BRIDGR can help:</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.innerWidth} ${styles.yPaddings} mx-auto`}>
                    <Logos />
                </div>
                <button className='mx-auto bg-off-white py-2 px-5 items-center flex flex-row rounded'>
                    <Link className= {`${styles.descriptionText} text-primary-black`} href="/">
                        Go Home
                    </Link>
                </button>
			</div>
        </section>
	);
};