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
        <form onSubmit={handleSubmit(onSubmit)} className={`lg:w-[600px] md:w-[550px] sm:w-[500px] w-full`}>
            <div className="mx-auto">
                <input {...register("email")} required aria-required={true} placeholder="Email" type='email' className="mt-2 bg-transparent w-full input px-2 py-1 rounded-md font-normal text-secondary-white"></input>
                <div className="h-[1px] w-full bg-white bg-opacity-20 mx-auto"/>
                <button role="submit" className=" mt-4 border-[2px] flex mx-auto border-white border-opacity-20 shadow-md hover:shadow-lg hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-4 rounded-2xl font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-500 cursor-pointer ">{isSubmitting ? "Submitting" : "Join Newsletter"}</button>

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