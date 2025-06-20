'use client'
import Link from 'next/link'
import { useCustomers } from '../contexts/CustomerContext'

export default function CustomerList() {
  const { customers, toggleStatus } = useCustomers()

  if (customers.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="mb-4">顧客が登録されていません。</p>
        <Link href="/add" className="text-blue-500 underline">
          顧客を追加
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {customers.map((c) => (
        <div key={c.id} className="p-4 border rounded flex justify-between items-center">
          <div>
            <p className="font-bold">{c.name}</p>
            <p className="text-sm text-gray-600">{c.phone}</p>
          </div>
          <button
            className={`px-3 py-1 text-sm rounded ${c.done ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
            onClick={() => toggleStatus(c.id)}
          >
            {c.done ? '対応済み' : '未対応'}
          </button>
        </div>
      ))}
    </div>
  )
}
