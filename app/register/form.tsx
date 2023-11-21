'use client'

import { FormEvent } from "react";

export default function Form() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        });
        console.log({ response });
      };
      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2 text-black h-screen"
        >
          <input
            type="email"
            name="email"
            className="px-3 py-1"
            placeholder="enter your Email"
          />
          <input
            type="password"
            name="password"
            className="px-3 py-1"
            placeholder="enter your Password"
          />
          <button
            type="submit"
            className="bg-white text-black rounded-3xl px-3 py-1 text-lg"
          >
            Register
          </button>
        </form>
      );
}