import { learnArticles } from "../constants"
import styles from "../styles";
import Link from "next/link";

const Artcles = () => {

    return (
        <div className={`${styles.descriptionText} lg:mt-20 md:mt-12 sm:mt-10 mt-8 w-full`}>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-6">
                {learnArticles.map((article) => (
                    <div key={article.index} className="col-span-1 hover:border-opacity-50 duration-500 border border-gray-500 border-opacity-30 rounded-lg">
                        <Link href={`/learn/${article.link}`} className="">
                        <img className="object-center object-cover rounded-t-lg overflow-hidden" src={article.imgUrl} alt="article image"/>
                            <div className="px-4 py-4">
                                <p className="text-violet mb-1 text-sm">{article.type}</p>
                                <p className={`${styles.subheaderText} mb-2`}>{article.title}</p>
                                <div className="flex flex-col justify-end place-content-end mt-4">
                                    <span className="flex flex-row justify-between items-center">
                                        <p className="text-sm">{article.date}</p>
                                        <p className="text-sm">{article.author}</p>
                                        {/* <img className="xl:max-w-[100px] max-w-[70px] xl:max-h-[45px] sm:max-h-[40px] max-h-[38px]" src={article.logo} alt="article logo"/> */}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artcles;