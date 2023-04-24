import Link from "next/link";

const PriceButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="bg-[#379CE0] hover:bg-opacity-90 hover:scale-[101%] text-off-white font-medium text-center py-2 px-4 rounded-md">
        {children}
      </div>
    </Link>
  );
};

export default PriceButton;
