import React from 'react'

export interface BlueButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isDisabled?: boolean
}

export const BlueButton = ({ label, isDisabled = false, onClick }: BlueButtonProps) => {
  return (
    <button
      className={`transition-colors  bg-blue-600 text-white px-6 py-2 rounded-md ${
        isDisabled ? 'bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none' : ''
      }`}
      onClick={isDisabled ? onClick : undefined}
    >
      {label}
    </button>
  )
}
