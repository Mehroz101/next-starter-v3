import React from 'react'
import LoadingIcon from '../ui/svg/loadingIcon'

const Button = ({ loading, label = "Button", disabled = false }: { loading: boolean, label: string, disabled?: boolean }) => {
  return (
    <button
      type="submit"
      className={`w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >  <span className='flex justify-center items-center gap-2 ${(loading || disabled) && "opacity-50 cursor-not-allowed"}`}
      disabled={loading || disabled}
    >
      <span className='flex justify-center items-center gap-2'>
        {loading &&
          <LoadingIcon />
        }
        {label}
      </span>
    </button>
  )
}

export default Button
