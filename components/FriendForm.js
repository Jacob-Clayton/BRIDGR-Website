'use client';

import { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../components/LoadingSpinner'
import { ErrorMessage, SuccessMessage } from '../components/Message'
import styles from '../styles';

export default function FriendForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    const [form, setForm] = useState(false)

		function onSubmit(data) {
			setForm({ state: 'loading' })
			axios
			.post("https://eode2y1xbqn4c7n.m.pipedream.net", data)
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
		<form className='mt-10 lg:w-1/2 md:w-[550px] sm:w-[500px] w-full mx-auto flex flex-col' onSubmit={handleSubmit(onSubmit)}>
			<span>
                <input
                    {...register("firstname")}
                    id='firstname'
                    aria-label='First name field for Application form'
                    aria-required={true}
                    placeholder='First Name'
                    type='text'
                    required
                    className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
                />
                <input
                    {...register("lastname")}
                    id='lastname'
                    aria-label='last name field for Application form'
                    aria-required={true}
                    placeholder='Last Name'
                    type='text'
                    required
                    className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
                />
			</span>
			<span className='flex justify-between w-full'>
				<div className='w-[48%] h-[1px] bg-white bg-opacity-20 mb-2'/>
				<div className='w-[50%] h-[1px] bg-white bg-opacity-20 mb-2'/>
			</span>

			<span>
				<input
					{...register("company")}
					id='company'
					aria-label='Company field for Application form'
					aria-required={true}
					placeholder='Company'
					type='text'
					required
					className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
				/>
				<input
					{...register("link")}
					id='link'
					aria-label='Link field for Application form'
					aria-required={true}
					placeholder='Website / Social'
					type='url'
					required
					className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
				/>
			</span>
			<span className='flex justify-between w-full'>
				<div className='w-[48%] h-[1px] bg-white bg-opacity-20 mb-2'/>
				<div className='w-[50%] h-[1px] bg-white bg-opacity-20 mb-2'/>
			</span>

			<span>
			<input
					{...register("email")}
					id='email'
					aria-label='Email field for Application form'
					aria-required={true}
					placeholder='Email'
					type='email'
					required
					className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
				/>
				<input
					{...register("location")}
					id='location'
					aria-label='Location field for Application form'
					aria-required={true}
					placeholder='Country'
					type='Location'
					required
					className='w-[50%] input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
				/>
			</span>
			<span className='flex justify-between w-full'>
				<div className='w-[48%] h-[1px] bg-white bg-opacity-20 mb-2'/>
				<div className='w-[50%] h-[1px] bg-white bg-opacity-20 mb-2'/>
			</span>

			<p
                {...register("subject")}
				id='subject'
				aria-label='Subject field for Application form'
				className='input px-2 py-1 rounded-md font-normal bg-transparent text-secondary-white'
            >
                Subject: Friend
			</p>
			<div className='w-full h-[1px] bg-white bg-opacity-20 mb-2'/>
			<textarea
				{...register("message")}
				id='message'
				aria-label='Message field for Application form'
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
					role="submit" 
					className={`${styles.descriptionText} my-1 border-[1px] bg-violet flex mx-auto border-violet py-2 px-6 rounded`}
				>
					{isSubmitting ? "Submitting" : "Register Interest"}
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