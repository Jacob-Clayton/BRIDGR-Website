import Link from "next/link";

const PriceButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className=" bg-blue-700 hover:bg-blue-600 text-white font-normal text-center py-2 px-4 rounded-2xl">
        {children}
      </div>
    </Link>
  );
};

export default PriceButton;
