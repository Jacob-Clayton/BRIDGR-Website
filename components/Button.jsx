import React from 'react'

const Button = (props) => {
  return (
    <button className='bridgr-blue hover:bg-blue-800 text-off-white py-2 px-6 items-start flex flex-row rounded-2xl duration-500'>
      {props.children} <img src="/external-link.svg" className="sm:w-[17px] sm:h-[17px] w-[15px] h-[15px] ml-1" />
    </button>
  );
};

export default Button