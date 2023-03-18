'use client';

import { TitleText } from '../components';
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      alert('Message sent successfully!');
  } catch (error) {
      alert('Message not sent!');
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  
return (
  <section className={`${styles.paddings} relative z-10`} id="Contact">
    <motion.div
                  variants={staggerContainer}
                  initial={isLgScreen ? 'hidden' : 'visible'}
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto flex justify-center mb-10`}
              >
                  <TitleText title={<>Contact us</>} />
              </motion.div>
  <form className="max-w-[600px] mx-auto">

    <h1 className="font-bold text-white">Contact Form</h1>
      {error && (
        <p color="red.300" my={4} fontSize="xl">
          {error}
        </p>
      )}

    <div className="mb-4" isRequired isInvalid={touched.name && !values.name}>
        {/* <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label> */}
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Name"
        />
      </div>

      <div className="mb-4" isRequired isInvalid={touched.email && !values.email}>
        {/* <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label> */}
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
        />
      </div>

      <div className="mb-4" isRequired isInvalid={touched.subject && !values.subject}>
        {/* <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label> */}
        <textarea
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Subject"
        />
      </div>

      <div className="mb-4" isRequired isInvalid={touched.message && !values.message}>
        {/* <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label> */}
        <textarea
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          required
          className="shadow appearance-none border rounded w-full h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your message"
        />
      </div>

      <button 
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.subject || !values.message}
        onClick={onSubmit}
        type="submit" 
        className="bg-blue-700 hover:bg-blue-600 text-off-white duration-500 block mx-auto w-40 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Send
      </button>
  </form>
  </section>
);
};
