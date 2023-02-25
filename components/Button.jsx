import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#1934A4] hover:bg-[#253fa8] text-white py-2 px-6 items-center flex flex-row rounded duration-500'>
      {props.children} <img src="/external-link.svg" className="w-[20px] h-[20px] ml-2" />
    </button>
  );
};

export default Button