import Link from "next/link";

const InfoButton = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className="border-[1px] hover:bg-gray-300 border-gray-300 text-primary-black font-medium text-center py-2 px-4 mb-4 rounded-2xl">
                {children}
            </div>
        </Link>
    );
};

export default InfoButton;