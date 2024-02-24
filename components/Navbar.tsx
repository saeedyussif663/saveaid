"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-[90%] md:w-full md:px-6 mx-auto md:my-6 justify-between items-center text-md">
      <IoIosMenu
        className="block md:hidden text-3xl my-3 relative -top-[6px] border border-gray-200 rounded-md"
        onClick={() => setIsOpen(true)}
      />

      <nav
        className={`h-screen md:h-auto ${
          isOpen ? "bg-black text-white" : "bg-white -translate-x-[100%]"
        } fixed left-0 top-0 transition-all duration-500 w-3/5 md:translate-x-[0] px-2 md:px-0 md:bg-white md:text-black md:w-auto md:static md:h-20 flex flex-col z-50  gap-4 md:flex-row md:items-center`}
      >
        <div
          className="relative left-[90%] top-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </div>
        <div className="w-[36px] h-[36px] mt-6 md:mt-0 flex flex-col justify-center items-center rounded-full bg-gradient-to-l from-blue-700 to-yellow-500">
          <Link href="/" className="">
            <Image
              src={logo}
              className="rounded-full"
              alt="save aid logo"
              height={32}
              width={32}
            />
          </Link>
        </div>

        <div className="flex">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-1">
            <li>
              <a
                href="#home"
                className="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex gap-5 items-center">
        <Link
          href="/signin"
          className="border border-blue-400 py-1 px-2 rounded-md hover:bg-gray-200"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-[#2185d0] hover:bg-blue-600 text-white py-1 px-2 rounded-md"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
