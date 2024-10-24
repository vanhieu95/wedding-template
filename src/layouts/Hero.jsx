import { forwardRef } from 'react'

const Hero = forwardRef(function Hero({ bride, groom }, ref) {
  return (
    <div
      className="relative h-svh bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat"
      ref={ref}
    >
      <div className="text-primary-200 absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center backdrop-sepia-[.25]">
        <div className="h-52 py-24">
          <p className="mx-auto mb-2 font-shantell text-xl font-bold sm:text-2xl md:text-3xl">
            Save the date
          </p>
          <h1 className="font-shantell text-2xl font-bold sm:text-3xl md:text-4xl">
            {`${groom} & ${bride}`}
          </h1>
        </div>
      </div>
    </div>
  )
})

export default Hero
