import React from 'react'
import styles from '../styles';

const Button = (props) => {
  return (
    <button className={`${styles.descriptionText} border-[1px] border-violet text-off-white py-2 px-6 flex mx-auto my-auto rounded`}>
      {props.children}
    </button>
  );
};

export default Button