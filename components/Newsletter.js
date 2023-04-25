import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import LoadingSpinner from './LoadingSpinner'
import { ErrorMessage, SuccessMessage } from './Message'
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
})

export default function Newsletter() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    const [form, setForm] = useState(false)


    function onSubmit(data) {
        setForm({ state: 'loading' })
        axios
        .post("https://eoyd4bam0h5jd36.m.pipedream.net", data)
        .then((response) => {
            setForm({
                state: 'success',
                message: 'Joined Successfully',
            });
        })
        .catch((e) => {
            console.error(e);
            setForm({
                state: 'error',
                message: error,
            });
        }
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={``}>
            <div className={`${poppins.variable} font-poppins mx-auto flex flex-row items-center content-center`}>


            <div className="container mx-auto flex flex-col justify-center p-4 sm:space-y-8 space-y-4 md:p-10 lg:space-y-0 lg:space-x-8 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-2 text-center lg:text-left">
                    <h1 className="text-xl font-semibold leading-none text-off-white">Stay in the loop</h1>
                    <p className="text-md text-secondary-white">Subscribe to our newsletter for the latest information on our Web3 events.</p>
                </div>
                <div className="relative flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md rounded-md lg:justify-end">
                    <div className="flex flex-row sm:w-[370px] w-[370px]">
                        <input {...register("email")} required aria-required={true} type='email' placeholder="example@email.com" className="w-4/6 px-3 py-2 rounded-l-md sm:w-2/3"/>
                        <button role="button" className="w-2/6 px-3 py-2 font-normal lg:text-lg md:text-md text-sm rounded-r-md sm:w-1/3 border border-white border-opacity-30 text-off-white">
                            {isSubmitting ? "Submitting" : "Subscribe"}
                        </button>
                        
                    </div>
                </div>
                <span className='flex items-center justify-center'>
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

            </div>
        </form>
    );
}