import { ReactNode } from 'react'

interface IHeadingProps {
  id?: string
  className?: string
  children?: ReactNode
  tooltip?: string
}

export const Heading1 = ({ id, className, children, tooltip }: IHeadingProps) => (
  <h1 id={id ?? ''} className={`text-xl sm:text-2xl md:text-4xl ${className ?? ''}`} title={tooltip}>
    {children}
  </h1>
)

export const Heading2 = ({ id, className, children, tooltip }: IHeadingProps) => (
  <h2 id={id ?? ''} className={`text-lg md:text-2xl font-semibold text-shadow-blur ${className ?? ''}`} title={tooltip}>
    {children}
  </h2>
)

export const Heading3 = ({ id, className, children, tooltip }: IHeadingProps) => (
  <h3 id={id ?? ''} className={`text-xl sm:text-2xl font-bold ${className ?? ''}`} title={tooltip}>
    {children}
  </h3>
)

export const Heading4 = ({ id, className, children, tooltip }: IHeadingProps) => (
  <h4 id={id ?? ''} className={`text-sm font-semibold ${className ?? ''}`} title={tooltip}>
    {children}
  </h4>
)
