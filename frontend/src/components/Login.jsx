/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import SignupModal from "./Signup";

export default function LoginSignup({ loginOpen, setLoginOpen }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Modal show={loginOpen} onClose={() => setLoginOpen(false)} size="xl">
      <Modal.Header className="bg-gray-900" />
      <Modal.Body className="h-auto min-h-[80vh] flex justify-center items-center bg-gray-900">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left text-gray-100 bg-gray-900 rounded-xl border border-white shadow-2xl">
            {/* Conditionally Render Login or Signup */}
            {!isSignup ? (
              <form>
                <div className="flex flex-col justify-center items-center h-full select-none">
                  <div className="flex flex-col items-center justify-center gap-2 mb-8">
                    <p className="m-0 text-[16px] font-semibold dark:text-white">
                      Login to your Account
                    </p>
                    <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                      Get started with our app, just start section and enjoy experience.
                    </span>
                  </div>

                  {/* Email Input */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-xs text-gray-400">Email</label>
                    <input
                      placeholder="E-mail"
                      className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-xs text-gray-400">Password</label>
                    <input
                      placeholder="••••••••"
                      required
                      className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
                      type="password"
                    />
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="py-1 px-8 bg-yellow-300 hover:bg-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                  >
                    Login
                  </button>

                  {/* Toggle to Signup */}
                  <p
                    className="text-center text-sm pt-2 cursor-pointer hover:underline"
                    onClick={() => setIsSignup(true)}
                  >
                    Did&apos;t have an account? <span className="text-blue-500 text-lg">Sign up</span>
                  </p>
                </div>
              </form>
            ) : (
              <SignupModal setIsSignup={setIsSignup} />
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
