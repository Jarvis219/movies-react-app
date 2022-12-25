import { Link } from 'react-router-dom'

interface IBreadcrumbProps {
  links: {
    href?: string
    label: string
  }[]
}

const Breadcrumb = ({ links }: IBreadcrumbProps) => (
  <nav className='rounded-md w-full my-3'>
    <ol className='list-reset flex'>
      {links.map((link, index) => {
        return link.href ? (
          <li key={index}>
            <Link to={link.href}>
              <span className='text-gray-700 text-base mx-2 hover:text-teal-500 text-animate-hover'>
                {link.label} /
              </span>
            </Link>
          </li>
        ) : (
          <li key={index}>
            <span className='text-gray-700 text-base'>{link.label}</span>
          </li>
        )
      })}
    </ol>
  </nav>
)

export default Breadcrumb
