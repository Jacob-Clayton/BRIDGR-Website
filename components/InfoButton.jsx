import Link from "next/link";

const InfoButton = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className=" bg-gray-200 hover:bg-gray-300 text-black font-semibold text-center py-2 px-4 mb-4 rounded-lg shadow-xl">
                {children}
            </div>
        </Link>
    );
};

export default InfoButton;