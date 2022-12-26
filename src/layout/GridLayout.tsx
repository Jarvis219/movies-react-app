interface IGridLayoutProps {
  children: React.ReactNode
  className?: string
}

const GridLayout = ({ children, className = '' }: IGridLayoutProps) => (
  <div
    className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 xl:gap-8 px-1 xl:px-0 place-content-center place-items-center ${className}`}>
    {children}
  </div>
)

export default GridLayout
