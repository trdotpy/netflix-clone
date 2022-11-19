import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileMenu() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-1/3 justify-center rounded-full bg-transparent text-lg">
            <PersonIcon className="mt-1 h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 h-auto w-52 origin-top-right rounded-sm bg-black/80 pb-8 pt-2 text-white shadow-lg">
            <div className="ml-4 flex flex-col space-y-4 pt-2">
              <div className="flex gap-x-3">
                <img
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1668852662/netflix-teal-avatar_m1ny74.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <img
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1668852662/netflix-orange-avatar_twcec0.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <img
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1668852662/netflix-red-avatar_mczww6.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <img
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1668852662/netflix-yellow-avatar_sxy08i.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </div>
              <p className="pb-4 font-semibold">Manage Profiles</p>
            </div>

            <div className="flex flex-col border-t-2 border-t-gray-900 pt-4">
              <Menu.Item>
                <a
                  href="/account"
                  className="text-md block px-4 py-2 font-semibold hover:bg-[#E50914]"
                >
                  Account Settings
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="/"
                  className="text-md block px-4 py-2 font-semibold hover:bg-[#E50914]"
                >
                  Help Center
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="/landing"
                  className="text-md block px-4 py-2 font-semibold hover:bg-[#E50914]"
                >
                  Sign Out
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
