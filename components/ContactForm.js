import { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import LoadingSpinner from './LoadingSpinner'
import { ErrorMessage, SuccessMessage } from './Message'
import styles from '../styles';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    const [form, setForm] = useState(false)

		function onSubmit(data) {
			setForm({ state: 'loading' })
			axios
			.post("https://eoskorpqc8rpsfw.m.pipedream.net", data)
			.then((response) => {
				setForm({
					state: 'success',
					message: 'Sent Successfully',
				});
			})
			.catch((e) => {
				console.error(e);
				setForm({
					state: 'error',
					message: error,
				});
			});
		}

	return (
		<form className={`text-primary-black gap-2 md:w-3/4 w-full mx-auto flex flex-col`} onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register("name")}
				id='name'
				aria-label='Name field for Contact form'
				aria-required={true}
				placeholder='Name'
				type='text'
				required
				className='input px-2 py-1 bg-off-white rounded font-regular border border-slate-300 focus:outline-none
				focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
				invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
			/>
			<input
				{...register("email")}
				id='email'
				aria-label='Email field for Contact form'
				aria-required={true}
				placeholder='Email'
				type='email'
				required
				className='input px-2 py-1 bg-off-white rounded font-regular border border-slate-300 focus:outline-none
				focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
				invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
			/>
			<input
				{...register("subject")}
				id='subject'
				aria-label='Subject field for Contact form'
				aria-required={false}
				placeholder='Subject'
				type='text'
				required
				className='input px-2 py-1 bg-off-white rounded font-regular border border-slate-300 focus:outline-none
				focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
				invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
			/>
			<textarea
				{...register("message")}
				id='message'
				aria-label='Message field for Contact form'
				aria-required={true}
				placeholder='Message'
				type='text'
				rows='5'
				required
				className='input px-2 py-1 bg-off-white rounded font-regular border border-slate-300 focus:outline-none
				focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
				invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
			/>
			<div className='flex flex-col items-center'>
                <button 
					role="button" 
					className={`${styles.descriptionText} flex mx-auto bg-violet text-off-white px-5 py-2 rounded cursor-pointer`}
				>
					{isSubmitting ? "Submitting" : "Send"}
				</button>
				<span className='mt-2'>
					{form.state === 'loading' && <LoadingSpinner />}
					{form.state === 'error' ? (
						<ErrorMessage>{form.message}</ErrorMessage>
					) : form.state === 'success' ? (
						<SuccessMessage>{form.message}</SuccessMessage>
					) : (
						''
					)}
				</span>
			</div>
		</form>
	);
};