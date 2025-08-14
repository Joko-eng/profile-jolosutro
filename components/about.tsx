"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-[Quicksand]">
      <Card className="max-w-6xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-blue-500">
          <CardTitle className="text-2xl font-bold text-white">Jolosutro Project - Service HP</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kiri: Deskripsi */}
            <div>
              <p className="text-justify text-gray-700 leading-relaxed">
                Jolosutro Project adalah layanan perbaikan ponsel terpercaya di Banyuwangi.
                Kami melayani berbagai kerusakan mulai dari layar pecah, baterai lemah,
                hingga masalah software dan hardware. Dengan teknisi berpengalaman,
                kami memastikan setiap perbaikan dilakukan dengan teliti dan cepat,
                menggunakan suku cadang berkualitas untuk menjaga performa ponsel Anda.
                Kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>

            {/* Kanan: Peta */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapComponent />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
