import Link from "next/link";

const InfoButton = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className="hover:scale-[101%] border-[2px] hover:bg-gray-200 hover:bg-opacity-30 border-gray-200 border-opacity-30 text-primary-black font-medium text-center py-2 px-4 mb-4 rounded-2xl">
                {children}
            </div>
        </Link>
    );
};

export default InfoButton;