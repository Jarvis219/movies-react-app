import clsx from 'clsx'
import { useState } from 'react'
import styles from './Toggle.module.css'

interface IToggleProps {
  onChange: (checked: boolean) => void
  initChecked: boolean
  label?: string
  className?: string
}

const Toggle = ({ onChange, initChecked = true, className = '', label = '' }: IToggleProps) => {
  const [checked, setChecked] = useState(initChecked)

  const handleChange = (checked: boolean) => {
    setChecked(checked)
    onChange(checked)
  }
  return (
    <label className={`hidden sm:flex items-center relative w-max mx-2 cursor-pointer select-none ${className}`}>
      {label && <span className='text-sm md:text-base text-gray-700 font-medium mr-3'>{label}</span>}
      <input
        onChange={(e) => handleChange(e.target.checked)}
        type='checkbox'
        checked={checked}
        className={`${clsx(
          styles['toggle-input']
        )} appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal focus:ring-teal-500 bg-yellow-500`}
      />
      <span className='w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200'></span>
    </label>
  )
}

export default Toggle
