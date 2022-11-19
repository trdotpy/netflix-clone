import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function LoginTest() {
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative h-screen bg-black bg-cover md:bg-[url('/landing-background.jpg')]">
      <div className="flex justify-between px-5 sm:px-10">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
            alt="logo"
            height={175}
            width={175}
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>

      <div>
        <div className="mx-auto h-2/4 rounded-md p-16 md:max-w-[450px] md:bg-black/80">
          <form>
            <div className="grid flex-col">
              <h1 className="mb-8 text-left text-4xl">Sign In</h1>
              <div className="flex flex-col gap-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-md bg-[#333333]/80 p-4 text-sm tracking-wide"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* 
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-sm bg-[#333333]/80 p-4 text-sm tracking-wide"
                /> */}

                <button
                  className="mt-6 rounded-md bg-[#E50914] py-3"
                  type="submit"
                  onClick={() => handleLogin(email)}
                >
                  Send Magic Link
                </button>
              </div>
            </div>
          </form>

          <div className="mt-2 grid flex-col pb-8 sm:mt-4">
            <button className="rounded-md bg-blue-600 py-3" type="submit">
              Sign In With Google
            </button>

            <div className="mt-4 flex justify-end">
              {/* <p className="text-sm text-gray-400">Remember me</p> */}
              <p className="cursor-pointer text-sm text-gray-400 hover:underline">
                Need help?
              </p>
            </div>

            <div className="mt-12 text-gray-400">
              <p className="py-3">
                New to Netflix?{' '}
                <Link href="/login">
                  <span className="cursor-pointer text-white hover:underline">
                    Sign up now.
                  </span>
                </Link>
              </p>
              <p className="text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <span className="cursor-pointer text-blue-500 hover:underline">
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
