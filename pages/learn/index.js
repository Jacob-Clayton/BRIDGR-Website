import { Nav, Footer, TitleText } from "../../components";
import styles from "../../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

export default function Learn() {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="relative">
            <Nav />
            <div className={`${styles.paddings}  bg-cetecean-blue min-h-screen overflow-hidden`}>
                <div className={`${styles.interWidth} mx-auto md:mt-20 sm:mt-10 mt-5`}>
                    <TitleText title={(<>Learn</>)} textStyles="text-center" />
                    {/* <motion.p
                        variants={fadeIn('up', 'tween', 0.05, 1)}
                        initial={isLgScreen ? 'hidden' : 'visible'}
                        whileInView="show"
                        className={`${styles.descriptionText} mx-auto md:mt-10 mt-5 lg:w-3/4 w-full text-center`}
                    >
                        Learn from us. Check out our free Web3 business model!
                    </motion.p>
                    <button className='flex mx-auto mt-10 bg-off-white py-2 px-6 items-center rounded'>
						<Link className= {`${styles.descriptionText} text-primary-black`} href="/learn/businessmodel">
							Business Model
						</Link>
					</button> */}

                        <section className={`${styles.descriptionText} mt-10 w-full`}>
                            <div className="flex flex-col gap-10">
                            {/* Row 1 */}
                            <div class="flex flex-row gap-10">
                                
                                <Link href={'/learn/article'} class="h-full w-1/3 hover-underline-animation border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1 text-sm">Education</p>
                                        <p class={`${styles.subheaderText} mb-2`}>3 Ways Hackers Learn Private Keys</p>
                                        <p class="mb-3">1. Theft of Private Keys<br/>2. Obtaining users’ authorization<br/>3. Compromise of 3rd Party Smart Contracts.</p>
                                    </div>
                                </Link>

                                <div class="h-full w-1/3 border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1">Research</p>
                                        <p class={`${styles.subheaderText} mb-2`}>The Catalyzer</p>
                                        <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex justify-between">
                                            <Link href={'/learn/article'} class="text-lavender flex flex-row items-center md:mb-2 lg:mb-0 hover-underline-animation">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center">
                                                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="h-full w-1/3 border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1">Research</p>
                                        <p class={`${styles.subheaderText} mb-2`}>The Catalyzer</p>
                                        <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex justify-between">
                                            <Link href={'/learn/article'} class="text-lavender flex flex-row items-center md:mb-2 lg:mb-0 hover-underline-animation">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center">
                                                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Row 2 */}
                            <div class="flex flex-row gap-10">
                                
                                <div class="h-full w-1/3 border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1">Research</p>
                                        <p class={`${styles.headerText} mb-2`}>The Catalyzer</p>
                                        <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex justify-between">
                                            <Link href={'/learn/article'} class="text-lavender flex flex-row items-center md:mb-2 lg:mb-0 hover-underline-animation">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center">
                                                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="h-full w-1/3 border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1">Research</p>
                                        <p class={`${styles.subheaderText} mb-2`}>The Catalyzer</p>
                                        <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex justify-between">
                                            <Link href={'/learn/article'} class="text-lavender flex flex-row items-center md:mb-2 lg:mb-0 hover-underline-animation">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center">
                                                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="h-full w-1/3 border border-gray-500 border-opacity-30 rounded-lg overflow-hidden">
                                    <img class="object-center object-cover" src="/grain_bg.jpg" alt="blog"/>
                                    <div class="p-6">
                                        <p class="text-violet mb-1">Research</p>
                                        <p class={`${styles.subheaderText} mb-2`}>The Catalyzer</p>
                                        <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex justify-between">
                                            <Link href={'/learn/article'} class="text-lavender flex flex-row items-center md:mb-2 lg:mb-0 hover-underline-animation">
                                                Read More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center">
                                                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
            <div className="bg-primary-black overflow-hidden">
                <Footer />
            </div>
        </section>
    );
};