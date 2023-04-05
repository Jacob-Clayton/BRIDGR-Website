import { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import LoadingSpinner from './LoadingSpinner'
import { ErrorMessage, SuccessMessage } from './Message'


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
		<form className='lg:w-[600px] md:w-[550px] sm:w-[500px] w-full mx-auto flex flex-col' onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register("name")}
				id='name'
				aria-label='Name field for Contact form'
				aria-required={true}
				placeholder='Name'
				type='text'
				required
				className='input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
			/>
			<div className='w-full h-[1px] bg-white bg-opacity-20 mb-2'/>
			<input
				{...register("email")}
				id='email'
				aria-label='Email field for Contact form'
				aria-required={true}
				placeholder='Email'
				type='email'
				required
				className='input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
			/>
			<div className='w-full h-[1px] bg-white bg-opacity-20 mb-2'/>
			<input
				{...register("subject")}
				id='subject'
				aria-label='Subject field for Contact form'
				aria-required={false}
				placeholder='Subject'
				type='text'
				required
				className='input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
			/>
			<div className='w-full h-[1px] bg-white bg-opacity-20 mb-2'/>
			<textarea
				{...register("message")}
				id='message'
				aria-label='Message field for Contact form'
				aria-required={true}
				placeholder='Message'
				type='text'
				rows='5'
				required
				className='input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
			/>
			<div className='w-full h-[1px] bg-white bg-opacity-20 mb-2'/>
			<div className='flex flex-col items-center'>
                <button 
					role="button" 
					className=" mt-2 border-[1px] flex mx-auto border-white border-opacity-30 shadow-md hover:shadow-lg hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-4 rounded-lg font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-500 cursor-pointer "
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