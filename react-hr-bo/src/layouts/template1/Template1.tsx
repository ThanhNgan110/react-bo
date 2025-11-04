// components
import { Header } from '../../components/organisms/Header'
import { Sidebar } from '../../components/organisms/Sidebar'

const Template1 = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main>
            <div className="mx-auto xsm:w-full max-w-[500px] md:max-w-(--breakpoint-2xl) p-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Template1
