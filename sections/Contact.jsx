'use client';

import { TitleText, ContactForm, Newsletter } from '../components';
import styles from '../styles';


export default function Contact() {  
  
  return (
    <section className={`${styles.paddings} relative z-10`} id='Contact'>
      <div className={`${styles.innerWidth} mx-auto`}>
        <TitleText title={<>Contact</>} textStyles="text-center sm:mb-10 mb-5" />
        <div className='flex flex-col lg:flex-row w-full items-center justify-around'>
          <ContactForm />
        </div>
        <div className='text-center'>
        </div>
      </div>
    </section>
  );
};
