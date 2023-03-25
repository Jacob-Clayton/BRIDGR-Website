import React from 'react'

const Button = (props) => {
  return (
    <button className='border-[2px] border-white border-opacity-30 text-off-white py-2 px-6 items-start flex flex-row rounded-2xl duration-500'>
      {props.children} <img src="/external-link.svg" className="sm:w-[13px] sm:h-[13px] w-[12px] h-[12px] ml-1" alt='external link'/>
    </button>
  );
};

export default Button