import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen bg-[#121212]">
    <Head>
      <title>Melvor Idle Statistics Image generator</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <div className="p-4 max-w-screen-sm mx-auto">{children}</div>
  </div>
)

export default Layout
