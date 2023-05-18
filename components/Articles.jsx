import { learnArticles } from "../constants"
import styles from "../styles";
import Link from "next/link";
import localFont from "@next/font/local";

const britanica = localFont({ 
	src: '../public/fonts/Britanica-BlackSemiExpanded.ttf',
    weight: '900',
	variable: '--font-britanica',
	display: 'swap',
});

const Artcles = () => {

    return (
        <div className={`${styles.descriptionText} lg:mt-20 md:mt-12 sm:mt-10 mt-8 w-full`}>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-6">
                {learnArticles.map((article) => (
                    <div key={article.index} className="col-span-1 hover:scale-[101%] duration-500 border border-gray-500 border-opacity-30 rounded-lg">
                            <Link href={`/learn/${article.link}`} className="overflow-hidden">
                            <img className="object-center object-cover rounded-t-lg" src={article.imgUrl} alt="article image"/>
                            <div className="px-6 py-6">
                                <p className="text-violet mb-1 text-sm">{article.type}</p>
                                <p className={`${styles.subheaderText} mb-2`}>{article.title}</p>
                                <p className="">{article.description}</p>
                                <span className="flex flex-row justify-center gap-6 mt-6 items-center">
                                    <img className="max-w-[100px] max-h-[50px]" src="/b-logo-text-white.svg" alt="bridgr logo"/>
                                    <p className={`${britanica.variable} font-britanica`}>X</p>
                                    <img className="max-w-[100px] max-h-[50px]" src={article.logo} alt="article logo"/>
                                </span>
                            </div>
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artcles;