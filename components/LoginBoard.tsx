import Link from 'next/link'
import React from 'react'

const LoginBoard = () => {
    return (
        <div style={{ height: "100vh" }} className="flex justify-center items-center w-full">
            <Link href={'/api/auth/signin'}>
                <button
                    type="button"
                    style={{ width: "500px", height: "125px", fontSize: "40px" }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl  px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Zaloguj sie!
                </button>
            </Link>

        </div>
    )
}

export default LoginBoard