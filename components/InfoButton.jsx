import Link from "next/link";

const InfoButton = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className="border-[2px] hover:bg-gray-200 border-gray-200 text-black font-semibold text-center py-2 px-4 mb-4 rounded-lg">
                {children}
            </div>
        </Link>
    );
};

export default InfoButton;