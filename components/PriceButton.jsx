import Link from "next/link";

const PriceButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="bg-[#379CE0] hover:bg-[#379CE0] hover:bg-opacity-90 hover:scale-[101%] text-white font-medium text-center py-2 px-4 rounded-lg">
        {children}
      </div>
    </Link>
  );
};

export default PriceButton;
