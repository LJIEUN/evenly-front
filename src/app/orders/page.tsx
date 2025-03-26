'use client'

import { useEffect, useState } from 'react'

interface Order {
  id: number
  name: string
  status: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 내부 API를 사용할 경우: /api/orders
    // 외부 API를 사용할 경우: 실제 백엔드 주소로 변경
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('주문 불러오기 실패:', error)
        setLoading(false)
      })
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">주문 내역</h1>
      {loading ? (
        <p>불러오는 중...</p>
      ) : orders.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order.id} className="border p-4 rounded">
              <p className="font-semibold">주문명: {order.name}</p>
              <p className="text-sm text-gray-600">상태: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}