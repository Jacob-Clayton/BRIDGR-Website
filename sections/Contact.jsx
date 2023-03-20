'use client';

import { TitleText, ContactForm } from '../components';
import styles from '../styles';


export default function Contact() {  
  
  return (
    <section className={`${styles.paddings} relative z-10`} id='Contact'>
      <TitleText title={<>Contact</>} textStyles="text-center mb-10" />
      <div className='flex flex-col lg:flex-row w-full items-center justify-around'>
        <ContactForm />
      </div>
    </section>
  );
};
