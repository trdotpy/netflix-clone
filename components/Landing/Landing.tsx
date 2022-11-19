import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Landing() {
  return (
    <div className="relative h-screen bg-[url('/landing-background.jpg')] bg-cover">
      <div className="flex items-center justify-between px-5 sm:px-10">
        <Image
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
          alt="logo"
          height={175}
          width={175}
          className="z-20 w-28 cursor-pointer object-contain md:w-44"
        />
        <Link href="/login">
          <button className="text-md rounded-sm bg-[#E50914] px-5 py-2 text-white md:mb-4 md:mr-5">
            Sign In
          </button>
        </Link>
      </div>
      <div className="z-30 mx-auto mt-40 w-3/4 text-center text-white md:w-[800px]">
        <h1 className="text-5xl font-semibold md:text-7xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="mt-3 text-2xl font-normal md:mt-5 md:text-3xl">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="mt-3 text-xl font-light md:mt-5 md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="mt-12 flex items-stretch">
          <input
            className="w-4/5 bg-gray-100 p-5 text-base text-gray-800 focus:outline-none"
            type="email"
            placeholder="Email address"
          />
          <button className="w-64 bg-[#E50914] p-3 text-2xl font-light tracking-wide text-white hover:brightness-150">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
