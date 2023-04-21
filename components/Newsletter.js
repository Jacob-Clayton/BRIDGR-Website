import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import LoadingSpinner from './LoadingSpinner'
import { ErrorMessage, SuccessMessage } from './Message'

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
            <div className="mx-auto flex flex-row items-center content-center">
                <div className="relative">
                    <input {...register("email")} required aria-required={true} placeholder="Email" type='email' className="bg-transparent w-full input pl-2 py-1 rounded-md font-normal text-secondary-white"></input>
                    <div className="absolute h-[1px] w-full bg-white bg-opacity-20 mx-auto"/>
                </div>
                
                <button 
                    role="button" 
                    className="border-[1px] ml-6 flex mx-auto border-white border-opacity-30 shadow-md hover:shadow-lg hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-4 rounded-lg font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-500 cursor-pointer "
                >
                    {isSubmitting ? "Submitting" : "Join Newsletter"}
                </button>

                <span className='mt-2 flex justify-center'>
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
}