import React from "react"
function WelcomeContent() {
    return (
        <div className="h-screen flex items-center justify-center bg-primary w-full">
            <div className="flex flex-col gap-2">
                <img src="./public/background.jpeg" alt="logo" className="w-64 h-56" />
                <h1 className="text-orange-500 text-6xl font-semibold"> VIP-EVENTS</h1>
                <p className="text-gray-200 text-sm">
                    Your one stop solution for event bookings and management
                </p>
            </div>

        </div>
    )
}

export default WelcomeContent;

