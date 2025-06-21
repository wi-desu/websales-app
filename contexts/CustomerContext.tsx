'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Customer = {
  id: number
  name: string
  phone: string
  memo: string
  done: boolean
}

export type CustomerContextType = {
  customers: Customer[]
  addCustomer: (c: Omit<Customer, 'id' | 'done'>) => void
  toggleStatus: (id: number) => void
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined)

export const useCustomers = () => {
  const ctx = useContext(CustomerContext)
  if (!ctx) throw new Error('useCustomers must be used within Provider')
  return ctx
}

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([])

  const addCustomer = (c: Omit<Customer, 'id' | 'done'>) => {
    setCustomers(prev => [...prev, { ...c, id: Date.now(), done: false }])
  }

  const toggleStatus = (id: number) => {
    setCustomers(prev => prev.map(c => (c.id === id ? { ...c, done: !c.done } : c)))
  }

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, toggleStatus }}>
      {children}
    </CustomerContext.Provider>
  )
}