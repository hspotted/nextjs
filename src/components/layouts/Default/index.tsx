import { PropsWithChildren } from 'react'

interface IDefaultLayout extends PropsWithChildren {}

function DefaultLayout({ children }: IDefaultLayout) {
  return <main>{children}</main>
}

export default DefaultLayout
