import './globals.css'
import { ReactNode } from 'react'
import { CustomerProvider } from '../contexts/CustomerContext'

export const metadata = {
  title: '顧客管理アプリ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="max-w-xl mx-auto p-4">
        <CustomerProvider>
          <header className="mb-4">
            <h1 className="text-2xl font-bold">顧客管理アプリ</h1>
          </header>
          {children}
        </CustomerProvider>
      </body>
    </html>
  )
}
