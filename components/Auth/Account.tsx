import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Account() {
  return (
    <>
      <Head>
        <title>My Account</title>
      </Head>

      <Navbar />

      <div className="pt-40">
        <div className="mx-auto flex w-1/2 max-w-[800px] flex-col">
          <h1>Edit Profile</h1>
          <div className="flex flex-col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              className="h-20 w-20 object-contain"
            />
            <div className="ml-6 flex-1">
              <h2>EMAIL</h2>
              <div className="border-b-2 ">
                <h3 className="mt-5">Plans</h3>
                PLANS
                <Link href="/landing">
                  <button className="text-md rounded-sm bg-[#E50914] px-5 py-2 text-white md:mb-4 md:mr-5">
                    Sign Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
