import { ReactNode } from 'react'

interface IButtonProp {
  title: string
  onClick?: () => void
  className?: string
  type?: 'submit' | 'button'
  disabled?: boolean
  children?: ReactNode
}

export const ButtonPrimary = ({
  title,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  children,
}: IButtonProp) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type={type}
    className={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}>
    {title}
    {children}
  </button>
)
