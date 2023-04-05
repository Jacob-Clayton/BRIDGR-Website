import Link from "next/link";

const InfoButton = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className="hover:scale-[101%] border-[1px] border-gray-400 border-opacity-30 hover:bg-gray-300 hover:bg-opacity-30  text-primary-black font-medium text-center py-2 px-4 mb-4 rounded-lg">
                {children}
            </div>
        </Link>
    );
};

export default InfoButton;