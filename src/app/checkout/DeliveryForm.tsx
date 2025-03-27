'use client'

import { useState } from 'react'

export default function DeliveryForm() {
    const [form, setForm] = useState({
        name: '',
        address1: '',
        address2: '',
        mobile1: '010',
        mobile2: '',
        mobile3: '',
        deliveryMessage: '',
        coupon: null,
        paymentMethod: '',
    })
    const totalPrice = 50000 // 실제 장바구니 연동 전 임시

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mobile = `${form.mobile1}-${form.mobile2}-${form.mobile3}`
        const orderData = {
            name: form.name,
            address: `${form.address1} ${form.address2}`,
            mobile,
            deliveryMessage: form.deliveryMessage,
            coupon: form.coupon,
            paymentMethod: form.paymentMethod,
            totalPrice,
        }
        console.log('주문 데이터:', orderData)
    }

    const handleCouponClick = () => {
        alert('쿠폰 선택 기능은 아직 구현되지 않았습니다.')
    }

    return (
        <div className="w-[500px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-6">배송 정보</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 배송 정보 */}
                <div>
                    <label className="block text-gray-700 mb-1">이름</label>
                    <input type="text" value={form.name} onChange={handleChange} className="border bg-white p-2 w-full h-[36px] rounded" required />

                    {/* 주소 */}
                    <label className="block text-gray-700 mt-4 mb-1">주소</label>
                    <input type="text" placeholder="도로명 주소" value={form.address1} onChange={handleChange} className="border bg-white p-2 w-full h-[36px] mb-2 rounded" required />
                    <input type="text" placeholder="상세 주소" value={form.address2} onChange={handleChange} className="border bg-white p-2 w-full h-[36px] rounded" required />

                    {/* 핸드폰 번호 */}
                    <label className="block text-gray-700 mt-4 mb-1">핸드폰 번호</label>
                    <div className="flex gap-2">
                        <input type="text" value={form.mobile1} onChange={handleChange} maxLength={3} className="border bg-white p-2 w-24 text-center rounded" placeholder="010" />
                        <span className="self-center">-</span>
                        <input type="text" value={form.mobile2} onChange={handleChange} maxLength={4} className="border bg-white p-2 w-24 text-center rounded" placeholder="" />
                        <span className="self-center">-</span>
                        <input type="text" value={form.mobile3} onChange={handleChange} maxLength={4} className="border bg-white p-2 w-24 text-center rounded" placeholder="" />
                    </div>

                    <label className="block text-gray-700 mt-4 mb-1">배송 메시지</label>
                    <textarea value={form.deliveryMessage} onChange={handleChange} className="border bg-white p-2 w-full resize-none rounded" rows={3} />
                </div>

                {/* 쿠폰 선택 */}
                <div>
                    <label className="block text-gray-700 mb-1">쿠폰</label>
                    <button type="button" onClick={handleCouponClick} className="border px-4 py-2 rounded hover:bg-gray-100">
                        쿠폰 선택
                    </button>
                    {form.coupon && <p className="mt-2 text-sm text-green-600">선택된 쿠폰: 없음</p>}
                </div>

                {/* 결제 정보 */}
                <div>
                    <label className="block text-gray-700 mb-1">결제 정보</label>
                    <p className="mb-2">총 결제 금액: <strong>{totalPrice.toLocaleString()}원</strong></p>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={handleChange} />
                            카드 결제
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="paymentMethod" value="bank" checked={form.paymentMethod === 'bank'} onChange={handleChange} />
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
