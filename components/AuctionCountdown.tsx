"use client"

import { useState, useEffect } from "react"

export default function AuctionCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          clearInterval(timer)
          return prev
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-gradient-to-br bg-[#3B3B3B80] rounded-3xl p-8 shadow-2xl">
          <p className="text-white/90 text-sm font-medium mb-6">Auction ends in:</p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Hours</div>
            </div>

            <div className="text-white font-bold text-6xl pb-6">:</div>

            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Minutes</div>
            </div>

            <div className="text-white font-bold text-6xl pb-6">:</div>

            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
