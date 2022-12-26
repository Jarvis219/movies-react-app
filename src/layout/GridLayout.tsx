interface IGridLayoutProps {
  children: React.ReactNode
  className?: string
  listLayout?: boolean
}

const GridLayout = ({ children, className = '', listLayout = false }: IGridLayoutProps) => {
  if (listLayout)
    return (
      <section
        className={`grid grid-cols-1 gap-3 xl:gap-6 px-1 xl:px-0 place-content-center place-items-center ${className}`}>
        {children}
      </section>
    )

  return (
    <section
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 xl:gap-6 px-1 xl:px-0 place-content-center place-items-center ${className}`}>
      {children}
    </section>
  )
}

export default GridLayout
