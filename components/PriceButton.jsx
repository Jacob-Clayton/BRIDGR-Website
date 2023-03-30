import Link from "next/link";

const PriceButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="bg-[#4386ff] hover:bg-[#4386ff] hover:bg-opacity-90 hover:scale-[101%] text-white font-medium text-center py-2 px-4 rounded-2xl">
        {children}
      </div>
    </Link>
  );
};

export default PriceButton;
