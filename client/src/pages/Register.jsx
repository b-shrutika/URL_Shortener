import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <h1 className="text-center text-3xl font-bold text-blue-600">
                    Create Account
                </h1>

                <form className="mt-8 space-y-5">

                    <div>
                        <label className="mb-2 block font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <button className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                        Register
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-600">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 text-blue-600 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register
