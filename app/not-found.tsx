import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (

    <div>
     <div id="error-page" className="absolute top-[10%] left-[15%] right-[15%] bottom-[10%] flex items-center justify-center bg-white shadow-lg sm:left-[5%] sm:right-[5%] sm:top-[15%] sm:bottom-[15%]">
  <div className="max-w-xl text-center sm:max-w-md">
    <h2 className="text-[18vw] leading-none signIn relative sm:text-[12vw]">
      404
    </h2>
    <h4 className="text-2xl mb-5 uppercase text-black relative after:content-['Opps! Page not found'] after:absolute after:top-0 after:left-0 after:right-0 after:text-shadow-[1px_1px_2px_rgba(255,255,255,0.4)] after:bg-clip-text after:text-transparent sm:text-xl">
      Opps! Page not found
    </h4>
    <p className="text-xl text-[#0d0d0d] sm:text-lg">
      Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
    </p>
    <div className="mt-6 flex justify-center flex-wrap">
      <Link href="/home" className="inline-block mx-2 text-blue-500 border-2 border-blue-600 font-medium py-2 px-6 rounded-full uppercase transition-all duration-300 ease-in-out hover:bg-[#69a6ce] hover:text-white sm:py-2 sm:px-5 sm:text-sm">
        Return Home
      </Link>
      <Link href="/report" className="inline-block mx-2 text-blue-500 border-2 border-blue-600 font-medium py-2 px-6 rounded-full uppercase transition-all duration-300 ease-in-out hover:bg-[#69a6ce] hover:text-white sm:py-2 sm:px-5 sm:text-sm">
        Report Problem
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}