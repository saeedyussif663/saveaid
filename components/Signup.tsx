"use client";

import Image from "next/image";
import logo from "../assets/logo.jpg";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { createUser } from "@/lib/singup";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswordName] = useState("");
  const [err, setErr] = useState({ isError: false, message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    const res = await createUser(user);
    if (!res.ok) {
      setErr({ isError: true, message: res.message });
      setTimeout(() => {
        setErr({ isError: false, message: "" });
      }, 3000);
    } else {
      router.push("/signin");
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPasswordName("");
    }
  }

  return (
    <div className="max-w-[55rem] mx-auto my-4 md:mt-6">
      <div className="flex min-h-full w-[95%] rounded-xl md:rounded-3xl mx-auto md:w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto rounded-xl"
            src={logo}
            alt="Saveaid"
            height={60}
            width={60}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between md:gap-[2%] flex-col md:flex-row">
              <div className="md:w-[49%] w-full">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 focus:ring-blue-700 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="md:w-[49%] w-full mt-2 md:mt-0">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 focus:ring-blue-700 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 focus:ring-blue-700 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 focus:ring-blue-700 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                  value={password}
                  onChange={(e) => setPasswordName(e.target.value)}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 focus:ring-blue-700 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              {err.isError && (
                <p className="mt-4 text-red-500">{err.message}</p>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-6 text-blue-500 hover:text-blue-600"
            >
              Sing In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
