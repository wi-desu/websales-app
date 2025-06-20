import CustomerForm from '../../components/CustomerForm'
import Link from 'next/link'

export const metadata = {
  title: '顧客追加',
}

export default function AddPage() {
  return (
    <div>
      <div className="mb-4">
        <Link href="/" className="text-blue-500 underline">
          &larr; 戻る
        </Link>
      </div>
      <CustomerForm />
    </div>
  )
}
