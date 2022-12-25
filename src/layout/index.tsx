import Header from '~/components/header/Index'

const LayoutRouter = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <div className='container mx-auto mt-8'>{children}</div>
    </>
  )
}

export default LayoutRouter
