"use client";


import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import {MeshGradient} from '@paper-design/shaders-react';

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export default function Home() {
  const innerDivClass = `
    mx-auto my-6 sm:my-10 rounded-3xl flex justify-center pt-10 sm:pt-6
    bg-white text-black min-h-screen
    w-[94vw] max-w-lg sm:max-w-xl md:max-w-[1600px]
    px-2 sm:px-6
  `;

  return (
    <>


<div className="min-h-screen pt-2 pb-2 relative flex justify-center items-center">
   <div className="absolute inset-0 z-0">
    <MeshGradient
colors={['#5100ff', '#0077ff', '#00ffaa', '#00ff80']}

      distortion={2}
      swirl={0.8}
      speed={0.2}
      style={{ width: '100%', height: '100%' }}
    />
  </div>





        <div className={`${innerDivClass} relative z-10`}>
          <div className="flex flex-col items-center w-full">
            <div className="w-full mb-10">
              <nav className="mx-auto max-w-4xl flex items-center justify-between px-2 py-2 rounded-2xl bg-neutral-900 text-white">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/toolfoliocropped.png"
                    alt="Toolfolio Logo"
                    width={40}
                    height={40}
                    className="p-2 bg-blue-600 rounded-lg"
                  />
                  <p className="text-lg font-semibold">Toolfolio</p>
                </div>

                {/* Center: Navigation Links */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
                  <p className="hover:text-blue-400 cursor-pointer">Explore</p>
                  <p className="hover:text-blue-400 cursor-pointer">
                    Marketplace
                  </p>
                  <p className="hover:text-blue-400 cursor-pointer">
                    Resources
                  </p>
                </div>

                {/* Right: Subscribe Button */}
                <div>
                  <button className="border-1 border-b-3 border-cyan-950 bg-gradient-to-b from-blue-300 via-blue-800 to-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-500 transition">
                    Subscribe
                  </button>
                </div>
              </nav>
            </div>

            <div className="border-white border-2 flex flex-col justify-center items-center gap-6 sm:gap-6 px-6 py-10 rounded-3xl text-center">
              <div className="text-white bg-gray-900 px-1 pr-3 py-1 rounded-full text-sm sm:text-base flex items-center gap-3 border-2 mb-2">
                <p className="text-neutral-900 bg-blue-300 px-3 py-1 rounded-full text-sm sm:text-base">
                  NEW
                </p>
                <div className="flex flex-col">
                  <p className="text-white text-sm sm:text-base flex items-center gap-1">
                    Newest Additions
                    <span className="text-blue-300">
                      <MdArrowOutward />
                    </span>
                  </p>
                </div>
              </div>

              <p className={` ${bricolage.className} font-medium text-6xl `}>
                All the{" "}
                <span className="relative inline-block bg-cyan-950 text-indigo-300 px-2 py-1 rounded-md">
                  Tools
                  {/* Handles */}
                  <span className="absolute w-3 h-3 bg-indigo-300  top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></span>
                  <span className="absolute w-3 h-3 bg-indigo-300 top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
                  <span className="absolute w-3 h-3 bg-indigo-300 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></span>
                  <span className="absolute w-3 h-3 bg-indigo-300 bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></span>
                </span>{" "}
                You Need <br /> in one place.
              </p>
              <p className="text-black/60 text-2xl sm:text-2xl mb-8">
                Tools, Resources & Products. Delivered weekly{" "}
              </p>
                 <button className="text-3xl border-1 border-b-3 border-cyan-950 bg-blue-600 text-white px-6 py-1 rounded-lg hover:bg-blue-500 transition">
                    Subscribe
                  </button>
            </div>
            <Image
              src="/image.png"
              alt="Toolfolio Logo"
              width={1200}
              height={1200}
              className="dark:invert opacity-60 rounded-lg "
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
}
