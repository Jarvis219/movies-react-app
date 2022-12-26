import Footer from '~/components/Footer'
import Header from '~/components/header/Index'
import LayoutProvider from '~/context/Layout'

const LayoutRouter = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex-col justify-between h-screen mb-auto'>
      <div>
        <Header />
        <LayoutProvider>
          <main className='container mx-auto mt-8'>{children}</main>
        </LayoutProvider>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutRouter
