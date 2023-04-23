'use client';

import { DescriptionText, TitleText, Tooltip } from "../components";
import styles from "../styles";
import Link from "next/link";
import Image from "next/image";
import { Urbanist, Poppins } from '@next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
})


export default function MemberHome() {
    return (
		<section className={``}>
            <div className={`${styles.interWidth} ${poppins.variable} mx-auto`}>
				<div className="flex flex-col mx-auto mt-5 sm:mt-10 md:mt-20">
					<TitleText title={(<>Member Home</>)} textStyles="text-center" 
                    />
                    <p className={`sm:mt-8 mt-5 ${poppins.variable} ${styles.descriptionText} font-poppins text-center`}>
                        The BRIDGR business model canvas to help you build and improve your Web3 company.
                    </p>
				</div>
                <div className="sm:mt-10 mt-5 border-[3px] bg-off-white bg-opacity-[95%] border-black border-opacity-80 rounded-2xl text-gray-700">
                    <div className="">
                        <div className="flex lg:flex-row flex-col mx-auto">
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-tl-2xl px-3 py-3">
                                <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Partners</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="font-poppins">How BRIDGR can help:</p>
                                <ul className="list-disc list-inside px-1">
                                    <li className="font-poppins">Ethlas</li>
                                    <li className="font-poppins">Ape Gang</li>
                                    <li className="font-poppins">Mad for NFTs</li>
                                    <li className="font-poppins">Crowd Fund Junction</li>
                                    <li className="font-poppins">Crypto Female</li>
                                    <li className="font-poppins">GlobalB Company</li>
                                    <li className="font-poppins">GlobalB Law</li>
                                    <li className="font-poppins">The Parlour Global</li>
                                    <li className="font-poppins">Bighaus</li>
                                    <li className="font-poppins">Bored Island Group</li>
                                </ul>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className=" border-[1px] border-black border-opacity-10 px-3 py-3">
                                    <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Activites</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="font-poppins">How BRIDGR can help:</p>
                                </div>
                                <div className=" border-[1px] border-black border-opacity-10 px-3 py-3">
                                    <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Key Resources</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="font-poppins">How BRIDGR can help:</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 px-3 py-3">
                                <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Value Propositions</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="font-poppins">How BRIDGR can help:</p>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="border-[1px] border-black border-opacity-10 px-3 py-3">
                                    <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Customer Relations</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="font-poppins">How BRIDGR can help:</p>
                                </div>
                                <div className="border-[1px] border-black border-opacity-10 px-3 py-3">
                                    <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Channels</p>
                                    <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                    <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                    <br/>
                                    <p className="font-poppins">How BRIDGR can help:</p>
                                </div>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-tr-2xl px-3 py-3">
                                <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Customer Segments</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="font-poppins">How BRIDGR can help:</p>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col mx-auto">
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-bl-2xl px-3 py-3">
                                <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Cost Structure</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="font-poppins">How BRIDGR can help:</p>
                            </div>
                            <div className="flex-1 border-[1px] border-black border-opacity-10 rounded-br-2xl px-3 py-3">
                                <p className={`font-poppins font-medium xl:text-xl md:text-lg text-md mb-2`}>Revenue Streams</p>
                                <div className="w-full h-[1px] bg-black bg-opacity-20 mb-2" />
                                <p className="font-poppins">more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah. more text about the header above. blah blah.</p>
                                <br/>
                                <p className="font-poppins">How BRIDGR can help:</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <p className={`${styles.descriptionText} ${poppins.variable} sm:mt-20 mt-10 font-poppins text-center`}>
                        To help you build your Web3 business we have a team of partners who cover a wide range of expertise to help you.
                        If you would like to access their combined services and combined community of 250,000+ please apply to become a member of BRIDGR.
                    </p>
                    <div className='sm:mt-20 mt-10 place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
                        <a className="p-1 col-span-1" href='https://apegang.art/'>
                        <Tooltip message={"The 10th most sold NFT project, founded in May 2021, they have a team of Web developers, blockchain developers, NFT artists and community experts."}>
                        <Image 
                            src='/apegang.png' 
                            alt="Ape Gang" 
                            className="max-w-[90%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={938}
                            height={249}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href='https://ethlas.com/'>
                        <Tooltip message={"Team of 30+ Web3 infrastructure engineers based in Singapore with over 2 million users on their gaming metaverse."}>
                        <Image 
                            src='/ethlas.png' 
                            alt="Ethlas" 
                            className="max-w-[80%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={1531}
                            height={681}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href='https://madfornfts.com/'>
                        <Tooltip message={"NFT launch partner for brands, celebrities, fashion, art and influencers. They help to create, launch and market NFTs."}>
                        <Image 
                            src='/madfornft.png' 
                            alt="Mad for NFTs" 
                            className="max-w-[85%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={1092}
                            height={586}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href='https://www.cryptofemale.org/'>
                        <Tooltip message={"Global women's crypto community empowering women in Web3 and helping them to get into the industry."}>
                        <Image 
                            src='/cryptofemale.png' 
                            alt="Crypto Female" 
                            className="max-w-[80%]" 
                            style={{opacity:'0.85'}}
                            quality={100}
                            width={1000}
                            height={596}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href='https://globalb.com.tr/'>
                        <Tooltip message={"GlobalB Company provides training, consultancy and organisational development for emerging technology sectors like blockchain & cryptocurrency."}>
                        <Image 
                            src='/globalb.png' 
                            alt="GlobalB" 
                            className="max-w-[85%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={832}
                            height={372}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href="https://twitter.com/theparloursg">
                        <Tooltip message={"Global chain of NFT bar & lounges. Starting out as Singapore’s 1st NFT bar & lounge. They are now opening their second location in Seoul, South Korea."}>
                        <Image 
                        src='/parlourQR.png' 
                        alt="The Parlour Global" 
                        className="max-w-[65%]" 
                        style={{opacity:'0.95'}}
                        quality={100}
                        width={600}
                        height={500}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href="">
                        <Tooltip message={"NFT art gallery in Singapore providing a platform and revenue stream for NFT artists and collectors."}>
                        <Image 
                            src='/bighaus.png' 
                            alt="Bighaus" 
                            className="max-w-[70%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={1000}
                            height={700}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href="https://boredisland.group/">
                        <Tooltip message={"Advisory service to monetize NFT intellectual property. They provide solutions in analysis, valuation, legal compliance, and marketing strategy."}>
                        <Image 
                            src='/boredislandgroup.png' 
                            alt="Bored Island Group" 
                            className="max-w-[90%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={1000}
                            height={600}
                        />
                        </Tooltip>
                        </a>
                        <a className="p-1 col-span-1" href="https://www.crowdfundjunction.com/">
                        <Tooltip message={"Venture Capital DAO. They help crypto start-ups through funding, advisory and marketing and provide entry into highly vetted crypto token offerings."}>
                        <Image 
                            src='/cfj.png' 
                            alt="Crowd Fund Junction" 
                            className="max-w-[100%]" 
                            style={{opacity:'0.95'}}
                            quality={100}
                            width={1240}
                            height={399}
                        />
                        </Tooltip>
                        </a>
                    </div>
                    <div>
                        <button className='mx-auto sm:mt-20 mt-10 border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-6 items-center flex flex-row rounded-lg duration-500'>
                            <Link className= "font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-400 cursor-pointer " href="/">
                                Go Back
                            </Link>
                            {/* <object className='ml-1 w-[30px] h-[30px]' type="image/svg+xml" data="/bridgrlogoanimatedslow.svg">
                                <img src="/bridgrlogoanimatedslow.svg" alt='bridgr logo animated'/>
                            </object> */}
                        </button>
                    </div>
                </div>
			</div>
        </section>
	);
};