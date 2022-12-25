interface IProps {
  tag: string
  className?: string
}

const Tag = ({ tag, className = '' }: IProps) => (
  <span
    className={`text-neutral-600 text-xs lg:text-sm truncate block bg-neutral-100 hover:bg-neutral-400 hover:text-white hover:bg-primary-500 px-2 py-0.5 rounded ml-1 cursor-pointer ${className}`}>
    {tag}
  </span>
)

export default Tag
