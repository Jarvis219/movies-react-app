interface ILayoutListLabelProps {
  label: string
  value: string
  className?: string
}

const LayoutListLabel = ({ label, value, className = '' }: ILayoutListLabelProps) => (
  <div className={`flex gap-2 ${className}`}>
    <label className='text-gray-700'>{label}</label>
    <span className='text-yellow-500 font-sans text-base'> {value}</span>
  </div>
)

export default LayoutListLabel
