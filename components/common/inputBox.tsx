import React from 'react'

interface Props {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  required?: boolean;
}

const InputBox = ({ label = "", type = "text", name, value, onChange, placeHolder = "", required = false }: Props) => {
  return (
    <div>
      {label &&
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      }
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full  outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
        placeholder={placeHolder}
      />
    </div>
  )
}

export default InputBox
