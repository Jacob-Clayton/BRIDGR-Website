import React from 'react'

const Button = (props) => {
  return (
    <button className='bridgr-blue hover:bg-blue-800 text-off-white py-2 px-6 items-center flex flex-row rounded-2xl duration-500'>
      {props.children} <img src="/external-link.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-2" />
    </button>
  );
};

export default Button