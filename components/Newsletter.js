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
            <div className={`${poppins.variable} font-poppins flex flex-row`}>


            <div className="flex flex-col mx-auto">
                <div className="sm:text-left text-center mb-1">
                    <p className="text-md text-secondary-white">Subscribe for updates</p>
                </div>
                <div className="relative flex flex-row flex-shrink-0 shadow rounded-md">
                    <div className="flex flex-row sm:w-[370px] w-full">
                        <input {...register("email")} required aria-required={true} type='email' placeholder="example@email.com" className="w-4/6 px-3 py-1 rounded-l-md sm:w-2/3"/>
                        <button role="button" className="w-2/6 px-3 py-1 font-normal lg:text-lg md:text-md text-sm rounded-r-md sm:w-1/3 border border-white border-opacity-30 text-off-white">
                            {isSubmitting ? "Submitting" : "Subscribe"}
                        </button>
                        
                    </div>
                </div>
                <span className='flex items-center justify-center mt-2'>
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