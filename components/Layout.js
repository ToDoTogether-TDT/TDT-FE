import Footer from './Footer'
import Header from './Header'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='w-full'>
        <div className='max-w-[1160px]  relative  mx-auto py-8 flex gap-2'>
          {/* left menu */}
          <LeftMenu />

          {/* chidren */}
          <div className='w-full ml-2 mr-4 lg:mr-0 min-h-screen'>
            {children}
          </div>

          {/* right menu */}
          <RightMenu />
        </div>
      </div>
      <Footer />
    </>
  )
}
