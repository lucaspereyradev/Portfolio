import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-opacity-80 dark:bg-white dark:bg-opacity-20 dark:hover:bg-opacity-10 disabled:bg-opacity-65 mx-auto"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Send <FaPaperPlane className="text-xs opacity-70 transition-all" />{' '}
                </>
            )}
        </button>
    )
}
