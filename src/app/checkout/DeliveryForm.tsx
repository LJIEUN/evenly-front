'use client'

import { useState } from 'react'

export default function DeliveryForm() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [deliveryMessage, setDeliveryMessage] = useState('')
  const [coupon, setCoupon] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const totalPrice = 50000 // 실제 장바구니 연동 전 임시

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const orderData = {
      name,
      mobile,
      address: `${address1} ${address2}`,
      deliveryMessage,
      coupon,
      paymentMethod,
      totalPrice,
    }
    console.log('주문 데이터:', orderData)
  }

  const handleCouponClick = () => {
    alert('쿠폰 선택 기능은 아직 구현되지 않았습니다.')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-6">배송 정보</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 배송 정보 */}
        <div>
          <label className="block text-gray-700 mb-1">이름</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="border bg-white p-2 w-full h-[36px]" required />

          <label className="block text-gray-700 mt-4 mb-1">주소</label>
          <input type="text" placeholder="도로명 주소" value={address1} onChange={e => setAddress1(e.target.value)} className="border bg-white p-2 w-full h-[36px] mb-2" required />
          <input type="text" placeholder="상세 주소" value={address2} onChange={e => setAddress2(e.target.value)} className="border bg-white p-2 w-full h-[36px]" required />

          <label className="block text-gray-700 mt-4 mb-1">연락처</label>
          <input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} className="border bg-white p-2 w-full h-[36px]" required />
          
          <label className="block text-gray-700 mt-4 mb-1">배송 메시지</label>
          <textarea value={deliveryMessage} onChange={e => setDeliveryMessage(e.target.value)} className="border bg-white p-2 w-full resize-none rounded" rows={3} />
        </div>

        {/* 쿠폰 선택 */}
        <div>
          <label className="block text-gray-700 mb-1">쿠폰</label>
          <button type="button" onClick={handleCouponClick} className="border px-4 py-2 rounded hover:bg-gray-100">
            쿠폰 선택
          </button>
          {coupon && <p className="mt-2 text-sm text-green-600">선택된 쿠폰: {coupon.name}</p>}
        </div>

        {/* 결제 정보 */}
        <div>
          <label className="block text-gray-700 mb-1">결제 정보</label>
          <p className="mb-2">총 결제 금액: <strong>{totalPrice.toLocaleString()}원</strong></p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={e => setPaymentMethod(e.target.value)} />
              카드 결제
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={e => setPaymentMethod(e.target.value)} />
              무통장 입금
            </label>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3 pt-4">
          <button type="submit" className="w-full bg-[var(--soft-black)] text-white py-2 rounded hover:bg-black">
            주문하기
          </button>
          <button type="button" className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-800">
            취소
          </button>
        </div>
      </form>
    </div>
  )
}
