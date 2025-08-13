'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
    const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // tinggi navbar
      const top = section.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    };
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-30">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-medium md:text-6xl"
              >
                Jolosutro Project
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
              >
                Jolosutro Project adalah layanan servis handphone terpercaya
                yang mengutamakan kualitas, kecepatan, dan kepuasan pelanggan.
                Kami melayani berbagai jenis perbaikan mulai dari kerusakan
                ringan hingga berat seperti layar pecah, baterai drop, tombol
                tidak berfungsi, hingga masalah software.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12"
              >
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="https://wa.me/6285141682291" target="_blank">
                      <span>Hubungi Kami</span>
                      <FaWhatsapp />
                    </Link>
                  </Button>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => handleScroll("service")}
                    >
                      <span>Layanan</span>
                    </Button>
                  </motion.div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
        {/* <LogoCloud /> */}
      </main>
    </>
  );
}

// const AppComponent = () => {
//     return (
//         <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
//             <div className="flex items-center gap-1.5 text-orange-400">
//                 <svg
//                     className="size-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 32 32">
//                     <g fill="none">
//                         <path
//                             fill="#ff6723"
//                             d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"></path>
//                         <path
//                             fill="#ffb02e"
//                             d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"></path>
//                     </g>
//                 </svg>
//                 <div className="text-sm font-medium">Steps</div>
//             </div>
//             {/* <div className="space-y-3">
//                 <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">This year, you&#39;re walking more on average than you did in 2023.</div>
//                 <div className="space-y-3">
//                     <div className="space-y-1">
//                         <div className="space-x-1">
//                             <span className="text-foreground align-baseline text-xl font-medium">8,081</span>
//                             <span className="text-muted-foreground text-xs">Steps/day</span>
//                         </div>
//                         <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">2024</div>
//                     </div>
//                     <div className="space-y-1">
//                         <div className="space-x-1">
//                             <span className="text-foreground align-baseline text-xl font-medium">5,412</span>
//                             <span className="text-muted-foreground text-xs">Steps/day</span>
//                         </div>
//                         <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">2023</div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     )
// }
