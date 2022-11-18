import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="relative h-screen bg-black bg-cover opacity-90 md:bg-[url('/landing-background.jpg')]">
      <div className="flex items-center justify-between px-5 sm:px-10">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
            alt="logo"
            height={175}
            width={175}
            className="z-20 w-28 cursor-pointer object-contain md:w-44"
          />
        </Link>
      </div>
      <div className="mx-auto h-2/4 rounded-md p-16 md:max-w-[450px] md:bg-black/80">
        <div className="grid flex-col">
          <h1 className="mb-6 text-left text-4xl">Sign In</h1>
          <div className="flex flex-col gap-y-3">
            <input
              type="email"
              placeholder="Email or phone number"
              className="rounded-sm bg-[#333333] p-3 text-sm tracking-wide"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-sm bg-[#333333] p-3 text-sm tracking-wide"
            />

            <button className="mt-6 rounded-md bg-[#E50914] py-3">
              Sign In
            </button>

            <button className="rounded-md bg-blue-600 py-3">
              Demo Account
            </button>

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Remember me</p>
              <p className="cursor-pointer text-sm text-gray-400 hover:underline">
                Need help?
              </p>
            </div>

            <div className="mt-16 text-gray-400">
              <p className="py-3">
                New to Netflix?{' '}
                <span className="text-white hover:underline">Sign up now.</span>
              </p>
              <p className="text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <span className="text-blue-500 hover:underline">
                  Learn more.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
