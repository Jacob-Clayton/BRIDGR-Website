'use client';

import { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../components/LoadingSpinner'
import { ErrorMessage, SuccessMessage } from '../components/Message'

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
		<form className='mt-10 gap-2 lg:w-[650px] md:w-[550px] sm:w-[500px] w-full mx-auto flex flex-col font-normal text-off-white' onSubmit={handleSubmit(onSubmit)}>
			<span className='space-x-3'>
                <input
                    {...register("firstname")}
                    id='firstname'
                    aria-label='First name field for Application form'
                    aria-required={true}
                    placeholder='First Name'
                    type='text'
                    required
                    className='w-[49%] input px-2 py-1 rounded bg-off-white'
                />
                <input
                    {...register("lastname")}
                    id='lastname'
                    aria-label='last name field for Application form'
                    aria-required={true}
                    placeholder='Last Name'
                    type='text'
                    required
                    className='w-[49%] input px-2 py-1 rounded bg-off-white'
                />
			</span>

			<span className='space-x-3'>
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

			<span className='space-x-3'>
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
				className='input px-2 py-1 rounded bg-off-white text-gray-700'
            >Subject: Membership
			</p>
			<textarea
				{...register("message")}
				id='message'
				aria-label='Message field for Application form'
				aria-required={true}
				placeholder='Message'
				type='text'
				rows='5'
				required
				className='input px-2 py-1 rounded bg-off-white'
			/>

			<div className='flex flex-col items-center'>
                <button 
					role="button" 
					className=" mt-2 bg-violet py-2 px-6 rounded font-normal lg:text-lg md:text-md text-sm cursor-pointer "
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