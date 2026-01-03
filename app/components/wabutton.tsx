import React from 'react'

export default function Wabutton() {
  return (
    <button
      onClick={() => {
        const phoneNumber = "919876543210"; // 🔴 replace with gym owner's WhatsApp number
        const message = encodeURIComponent(
          "Hi, I would like to book a free gym trial. Please share the details."
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      }}
      className="px-6 py-3 rounded-md text-white font-semibold
                 bg-gradient-to-r from-orange-500 to-red-600
                 hover:scale-105 transition-transform"
    >
      Book a Free Trial
    </button>
  )
}

