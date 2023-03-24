import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { ErrorMessage, SuccessMessage } from './Message'

const ContactForm = () => {
	const [form, setForm] = useState(false)
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

	const contactEvent = async () => {
		const { event } = await import('../lib/analytics')
		event({
			action: 'contact',
			category: 'Contact',
			label: 'Contact',
			value: '',
		})
	}

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()
		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Sent Successfully',
				})
				contactEvent()
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

	return (
		<form className='w-[550px] mx-auto flex flex-col' onSubmit={(e) => onSubmitForm(e)}>
			<input
				id='name'
				aria-label='Name field for Contact form'
				value={inputs.name}
				onChange={handleChange}
				placeholder='Name'
				type='text'
				required
				className='input mb-4 px-2 py-1 rounded-md font-normal'
			/>
			<input
				id='email'
				aria-label='Email field for Contact form'
				value={inputs.email}
				onChange={handleChange}
				placeholder='Email'
				type='email'
				required
				className='input mb-4 px-2 py-1 rounded-md font-normal'
			/>
			<textarea
				id='message'
				aria-label='Message field for Contact form'
				value={inputs.message}
				onChange={(e) => handleChange(e)}
				placeholder='Message'
				type='text'
				rows='5'
				required
				className='input mb-4 px-2 py-1 rounded-md font-normal'
			/>
			<div className='flex flex-col items-center'>
                <button type='submit' className='mx-auto bg-blue-700 hover:bg-blue-600 text-off-white py-2 px-6 items-center flex flex-row rounded duration-500'>
                    <p className= "text-sm sm:text-l md:text-xl font-bold hover:text-white duration-400 cursor-pointer ">
                        Send</p>
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
	)
}

export default ContactForm