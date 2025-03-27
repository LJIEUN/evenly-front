'use client'

import DeliveryForm from '@/app/checkout/DeliveryForm'

export default function CheckoutPage() {
    return (
      <div className="p-6 max-w-[500px]">
        <section className="mb-8">
          <DeliveryForm />
        </section>
      </div>
    )
  }