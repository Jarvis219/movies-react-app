import Header from '~/components/header/Index'
import LayoutProvider from '~/context/Layout'

const LayoutRouter = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <LayoutProvider>
        <main className='container mx-auto mt-8'>{children}</main>
      </LayoutProvider>
    </>
  )
}

export default LayoutRouter
