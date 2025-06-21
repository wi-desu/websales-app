'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCustomers } from '../contexts/CustomerContext'

export default function CustomerForm() {
  const { addCustomer } = useCustomers()
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [memo, setMemo] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^\d{11}$/.test(phone)) {
      setError('電話番号は11桁の数字で入力してください')
      return
    }
    addCustomer({ name, phone, memo })
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block mb-1">会社名</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1">電話番号</label>
        <input
          className="w-full border p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1">メモ</label>
        <textarea
          className="w-full border p-2 rounded"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        追加
      </button>
    </form>
  )
}