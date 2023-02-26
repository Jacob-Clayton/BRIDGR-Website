import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#4AA1CF] hover:bg-[#67B4DC] text-off-white py-2 px-6 items-center flex flex-row rounded duration-500'>
      {props.children} <img src="/external-link.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-2" />
    </button>
  );
};

export default Button