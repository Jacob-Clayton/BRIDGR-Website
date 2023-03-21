import Link from "next/link";

const PriceButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className=" bg-blue-700 hover:bg-blue-600 text-white font-semibold text-center py-2 px-4 rounded-lg">
        {children}
      </div>
    </Link>
  );
};

export default PriceButton;
