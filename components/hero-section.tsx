"use client";
import React from "react";
import { TextEffect } from "@/components/ui/text-effect";
import { HeroHeader } from "./header";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
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

              {/* Tombol */}
              <div className="mt-8 flex justify-center gap-4">
                {/* Button WhatsApp */}
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a
                    href="https://wa.me/6285141682291"   
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                   <FaWhatsapp size={20} color="#FFFF" />

                    Hubungi Kami
                  </a>
                </Button>

                {/* Button Outline */}
                <Button variant="outline" asChild>
                  <a href="#service">Layanan</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
