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
        <form onSubmit={handleSubmit(onSubmit)} className={`mt-5 lg:w-[350px] md:w-[320px] sm:w-[300px] w-[250px]`}>
            <p className="text-center font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-sm text-secondary-white">Join our newsletter!</p>
            <div className="mx-auto">
                <input {...register("email")} required aria-required={true} placeholder="Email" className="mt-2 bg-transparent w-full input px-2 py-1 rounded-md font-normal lg:text-lg md:text-md sm:text-md text-sm text-secondary-white"></input>
                <div className="h-[1px] w-full bg-white bg-opacity-20 mx-auto"/>
                <button role="submit" className=" mt-2 border-[2px] flex mx-auto border-white border-opacity-20 shadow-md hover:shadow-lg hover:bg-white hover:bg-opacity-5 text-off-white py-1 px-4 rounded-2xl font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-500 cursor-pointer ">{isSubmitting ? "Submitting" : "Submit"}</button>

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