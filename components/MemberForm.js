'use client';

import { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../components/LoadingSpinner'
import { ErrorMessage, SuccessMessage } from '../components/Message'
import styles from '../styles';

export default function MemberForm() {
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
		<form className='mt-10 gap-2 xl:w-[750px] lg:w-[700px] md:w-[600px] w-full mx-auto flex flex-col font-normal text-primary-black' onSubmit={handleSubmit(onSubmit)}>
			<span className='lg:space-x-3 sm:space-x-2 space-x-1'>
                <input
                    {...register("name")}
                    id='name'
                    aria-label='Name field for Application form'
                    aria-required={true}
                    placeholder='Name'
                    type='text'
                    required
                    className='w-full input px-2 py-1 rounded bg-off-white'
                />
			</span>

			<span className='lg:space-x-3 sm:space-x-2 space-x-1'>
				<input
					{...register("company")}
					id='company'
					aria-label='Company field for Application form'
					aria-required={true}
					placeholder='Company'
					type='text'
					required
					className='w-[49%] input px-2 py-1 rounded bg-off-white'
				/>
				<input
					{...register("link")}
					id='link'
					aria-label='Link field for Application form'
					aria-required={true}
					placeholder='Website / Social'
					type='url'
					required
					className='w-[49%] input px-2 py-1 rounded bg-off-white'
				/>
			</span>

			<span className='lg:space-x-3 sm:space-x-2 space-x-1'>
			<input
					{...register("email")}
					id='email'
					aria-label='Email field for Application form'
					aria-required={true}
					placeholder='Email'
					type='email'
					required
					className='w-[49%] input px-2 py-1 rounded bg-off-white'
				/>
				<input
					{...register("location")}
					id='location'
					aria-label='Location field for Application form'
					aria-required={true}
					placeholder='Country'
					type='Location'
					required
					className='w-[49%] input px-2 py-1 rounded bg-off-white'
				/>
			</span>

			<p
                {...register("subject")}
				id='subject'
				aria-label='Subject field for Application form'
				className='input px-2 py-1 rounded bg-off-white text-primary-black'
            >Subject: Bridgr Membership
			</p>
			<textarea
				{...register("message")}
				id='message'
				aria-label='Message field for Application form'
				aria-required={true}
				placeholder='Message'
				type='text'
				rows='8'
				required
				className='input px-2 py-1 rounded bg-off-white'
			/>

			<div className='flex flex-col items-center'>
                <button 
					role="button" 
					className={` ${styles.descriptionText} my-1 bg-violet py-2 px-6 rounded cursor-pointer`} 
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