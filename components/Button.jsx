import React from 'react'

const Button = (props) => {
  return (
    <button className='border-[1px] border-white border-opacity-30 text-off-white py-1 px-4 items-start flex flex-row shadow-md rounded-lg duration-500 xl:text-xl lg:text-lg md:text-md text-sm'>
      {props.children} <img src="/external-link.svg" className="sm:w-[10px] sm:h-[10px] w-[9px] h-[9px] ml-[2px]" alt='external link'/>
    </button>
  );
};

export default Button