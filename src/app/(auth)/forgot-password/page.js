'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <section className="bg-white py-40 dark:bg-gray-900 h-screen">
                <div className="container px-6 py-32 mx-auto lg:py-32">
                    <div className="lg:flex">
                        <div className="lg:w-1/2">
                            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />

                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Forgot Password</h1>

                            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                                login to your account
                            </h1>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mt-0">
                            <form className="w-full lg:max-w-xl">
                                <div className="relative flex items-center">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                                    <input type="email"
                                           className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                           placeholder="Email address" />
                                </div>



                                <div className="mt-8 md:flex md:items-center">
                                    <button
                                        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                       Submit
                                    </button>

                                    <a href="/login"
                                       className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400">
                                        Remember password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Page
