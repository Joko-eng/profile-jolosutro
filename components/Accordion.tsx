import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="py-10 px-12">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Informasi Servis & Jaminan Kualitas
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Jolosutro Project adalah solusi terbaik untuk masalah HP Anda di
              Banyuwangi. Kami menyediakan layanan servis HP yang cepat,
              terjangkau, dan dijamin berkualitas. Kami siap menangani berbagai
              jenis kerusakan, mulai dari penggantian LCD, baterai, hingga
              perbaikan software. Kami percaya, kualitas terbaik tidak harus
              mahal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Bagaimana Proses Servis Kami ?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Proses servis di tempat kami sangat mudah dan transparan. Anda
              cukup datang ke toko kami, lalu tim teknisi akan melakukan
              pengecekan awal secara gratis. Setelah kerusakan teridentifikasi,
              kami akan memberikan estimasi biaya dan waktu pengerjaan. Jika
              Anda setuju, kami akan segera memulai perbaikan. Kami berusaha
              menyelesaikan semua perbaikan secepat mungkin tanpa mengabaikan
              standar kualitas kami.
            </p>
            <p>
              Jika dirasa toko kami terlalu jauh, Anda juga bisa menghubungi
              kami melalui WhatsApp untuk proses COD atau pengambilan pada
              tempat yang sudah disepakati
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Garansi & Kebijakan Pengembalian</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Kami berkomitmen penuh untuk memberikan layanan terbaik. Setiap
              perbaikan yang kami lakukan sudah termasuk garansi servis. Jika
              dalam masa garansi terjadi masalah yang sama, kami akan perbaiki
              kembali tanpa biaya tambahan Untuk informasi lebih lanjut mengenai
              masa garansi dan syarat ketentuannya, silakan hubungi customer
              service kami.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
