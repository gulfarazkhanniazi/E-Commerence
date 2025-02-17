/* eslint-disable react/prop-types */

export default function SignupModal({ setIsSignup }) {
  return (
    <form>
      <div className="flex flex-col justify-center items-center h-full select-none">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <p className="m-0 text-[16px] font-semibold dark:text-white">Create an Account</p>
          <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
            Sign up to explore all features and get started.
          </span>
        </div>

        {/* Name Input */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-xs text-gray-400">Full Name</label>
          <input
            placeholder="Name"
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            required
          />
        </div>

        {/* Email Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Email</label>
          <input
            placeholder="example@email.com"
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            required
            type="email"
          />
        </div>

        {/* Password Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Password</label>
          <input
            placeholder="••••••••"
            required
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            type="password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Confirm Password</label>
          <input
            placeholder="••••••••"
            required
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            type="password"
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="mt-5 py-1 px-8 bg-yellow-300 hover:bg-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
        >
          Sign Up
        </button>

        {/* Toggle to Login */}
        <p
          className="text-center text-sm pt-2 cursor-pointer hover:underline"
          onClick={() => setIsSignup(false)}
        >
          Already have an account? <span className="text-blue-500 text-lg">Login</span>
        </p>
      </div>
    </form>
  );
}
