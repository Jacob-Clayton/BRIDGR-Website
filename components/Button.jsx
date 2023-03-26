import React from 'react'

const Button = (props) => {
  return (
    <button className='border-[2px] border-white border-opacity-30 text-off-white py-2 pl-6 pr-5 items-start flex flex-row rounded-2xl duration-500'>
      {props.children} <img src="/external-link.svg" className="sm:w-[11px] sm:h-[11px] w-[10px] h-[10px] ml-[1px]" alt='external link'/>
    </button>
  );
};

export default Button