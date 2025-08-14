"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Pastikan sudah ada komponen Button

export default function Service() {
  const noWA = "6285141682291"; // Ganti dengan nomor WA kamu

  const serviceList = [
    {
      nama: "Ganti LCD",
      harga: "Mulai Rp 350.000",
      deskripsi: "Perbaikan layar pecah atau bergaris dengan LCD original.",
      gambar: "/lcd.jpg",
    },
    {
      nama: "Ganti Baterai",
      harga: "Mulai Rp 150.000",
      deskripsi: "Mengganti baterai lama dengan yang baru dan tahan lama.",
      gambar: "/batrei.jpg",
    },
    {
      nama: "Flash / Reset",
      harga: "Rp 100.000",
      deskripsi: "Mengembalikan ponsel ke pengaturan pabrik dan memperbaiki sistem.",
      gambar: "/flash.jpg",
    },
    {
      nama: "Ganti EMMC",
      harga: "Mulai Rp 500.000",
      deskripsi: "Mengganti IC EMMC untuk mengatasi bootloop atau memori rusak.",
      gambar: "/mmc.jpg",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8">Layanan Servis HP</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceList.map((service, i) => {
            const pesanWA = encodeURIComponent(
              `Halo, saya ingin booking layanan ${service.nama}.\nHarga: ${service.harga}\nDeskripsi: ${service.deskripsi}\n\nMohon informasikan jadwal dan ketersediaannya.`
            );
            const linkWA = `https://wa.me/${noWA}?text=${pesanWA}`;

            return (
              <Card
                key={i}
                className="w-full rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Gambar Full */}
                <div className="relative w-full h-50">
                  <Image
                    src={service.gambar}
                    alt={service.nama}
                    fill
                    className="object-cover rounded-2xl p-2"
                  />
                </div>

                <CardContent className="p-1 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-center">
                    {service.nama}
                  </h3>
                  <p className="text-xs text-black text-center mt-1">
                    {service.harga}
                  </p>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    {service.deskripsi}
                  </p>

                  {/* Tombol Booking */}
                  <Button
                    asChild
                    className="mt-3 bg-green-500 hover:bg-green-600 text-white w-full"
                  >
                    <a href={linkWA} target="_blank" rel="noopener noreferrer">
                      Booking Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
