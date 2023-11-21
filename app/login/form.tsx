"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
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
        className="bg-green-500 text-white rounded-3xl px-3 py-1 text-lg"
      >
        Login
      </button>
    </form>
  );
}
