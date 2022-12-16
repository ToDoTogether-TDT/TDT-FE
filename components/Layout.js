import Footer from './Footer'
import Header from './Header'
import LeftMenu from './LeftMenu'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='max-w-[1160px] mx-auto h-screen'>
        <div className='py-8 flex gap-6'>
          {/* left menu */}
          <LeftMenu />

          {/* chidren */}
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
