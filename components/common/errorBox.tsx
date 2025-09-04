import React from 'react'

const ErrorBox = ({ error }: { error: string }) => {
  return (

    <div className="error-box bg-red-50 border border-red-300 p-3 mb-4 rounded-md flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 012 0v4a1 1 0 01-2 0V6zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-red-700 text-sm font-medium">{error}</p>
    </div>
  )
}

export default ErrorBox
