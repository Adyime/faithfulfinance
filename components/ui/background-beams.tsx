"use client"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(circle_at_center,white,transparent)]",
        className,
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#fa9b31" fillOpacity="0.3"></path>
            <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#ff6202" fillOpacity="0.3"></path>
            <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#fa9b31" fillOpacity="0.3"></path>
            <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#ff6202" fillOpacity="0.3"></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_17_60"
            x="-50"
            y="-50"
            width="500"
            height="500"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_17_60"></feGaussianBlur>
          </filter>
          <clipPath id="clip0_17_60">
            <rect width="400" height="400" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
