import React from 'react'
import LoadingIcon from '../ui/svg/loadingIcon'

type ButtonProps = {
  loading: boolean
  label?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

const Button = ({
  loading,
  label = "Button",
  disabled = false,
  type = "button"
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl
        ${(loading || disabled) ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={loading || disabled}
    >
      <span className='flex justify-center items-center gap-2'>
        {loading && <LoadingIcon />}
        {label}
      </span>
    </button>
  )
}

export default Button
