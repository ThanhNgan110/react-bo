// components
import Header from '../../components/organisms/Header'
import Sidebar from '../../components/organisms/Sidebar'

const Template1 = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="min-h-screen xl:flex">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Template1
