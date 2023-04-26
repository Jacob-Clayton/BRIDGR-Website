import React from 'react'

const Button = (props) => {
  return (
    <button className='border-[1px] border-white border-opacity-30 text-off-white py-1 px-4 flex mx-auto my-auto shadow-md rounded-md duration-500 xl:text-xl lg:text-lg md:text-md text-sm'>
      {props.children}
    </button>
  );
};

export default Button