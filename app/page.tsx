import CustomerList from '../components/CustomerList'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="mb-4 text-right">
        <Link href="/add" className="text-blue-500 underline">
          新規追加
        </Link>
      </div>
      <CustomerList />
    </div>
  )
}