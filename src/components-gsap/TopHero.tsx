'use client';

import image1 from '../assets/Portadas/AlseguraLandingHero.webp';
import imageResponsive from '../assets/Portadas/AlseguraLandingHero.webp';

import StarBorder from '../components/StarBorder';
import StarBorderButton from '../components/StarBorderSustitute';

function TopHero() {
  return (
    <>
      <div className="panel" id='hero'>
        <section>
          <div className="h-screen relative snap-start container-full hidden xl:grid grid-cols-8 grid-rows-7 gap-2 overflow-hidden">
            {/* Full screen background image */}
            <div className="absolute inset-0 z-0 bg-black/10">
            <div className="absolute inset-x-0 top-0 h-full z-10 bg-black/50 pointer-events-none" />
              <img
                src={image1}
                alt="Software developer - Alsegurarp"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                className="object-cover"
              /> 
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-x-0 top-1/2 bottom-0 z-5 bg-gradient-to-b from-transparent via-white/5 to-white/15 backdrop-blur-sm pointer-events-none" />
            </div>
            
            {/* Content overlay */}
            <div className="col-span-5 row-span-2 row-start-5 col-start-2 px-4 z-10 overflow-visible">
              <h1 className="text-[108px] 2xl:text-[140px] 3xl:text-[160px] font-bold text-white leading-none">
                Software Developer
              </h1>
            </div>
            <div className="col-span-3 row-span-2 col-start-6 row-start-5 z-10 overflow-visible">
              <div className="flex flex-col gap-8 end justify-end h-full ">
                <h2 className='text-white text-xl font-nohemi'>
                  <strong className='text-xl'>Alsegurarp <br/></strong>
                  Solutions to grow your <strong>Business</strong>
                </h2>

                <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
                  <StarBorderButton>
                    Contact me
                  </StarBorderButton>

                  <StarBorder>
                    Discover more
                  </StarBorder>
                </div>
              </div>
            </div>
            <div className="col-span-6 col-start-2 row-start-7 border-t-2 border-white h-1 z-10 mt-5"></div>
          </div>
        </section>
        {/* mobiles */}
        <section className="h-[100dvh] relative snap-start flex xl:hidden">
          <div className="relative w-full h-full ">
            {/* Background image */}
            <img
              src={imageResponsive}
              alt="Software developer - Alsegurarp "
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            
            {/* White blur layer */}
            <div className="absolute inset-x-0 top-1/2 bottom-0 z-10 bg-gradient-to-b from-transparent via-white/20 to-white/40 backdrop-blur-md pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10">
              {/* Top - Title */}
              <div className="flex items-center text-center self-center pt-20">
                <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-2xl">
                  Software Developer
                </h1>
              </div>

              {/* Bottom - Content & Buttons */}
              <div className="flex flex-col gap-6 items-center">
                <h2 className="text-white text-sm sm:text-base md:text-lg font-nohemi max-w-sm text-center">
                  <strong className='text-base sm:text-lg md:text-xl text-center'>Alsegurarp <br/></strong>
                  Solutions to grow your <strong>Business</strong>
                </h2>

                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <StarBorderButton>
                    Contact me
                  </StarBorderButton>

                  <StarBorder>
                    Discover more
                  </StarBorder>
                </div>

                {/* Bottom border */}
                <div className="border-t-2 border-white/80 mt-4" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TopHero;
