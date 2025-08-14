import { Facebook, Twitter, Linkedin, Youtube, Instagram, Phone, MapPin, Printer, Rss, Github, LocateFixed, LocationEdit, LocateIcon, MapIcon, MapPinCheck, InstagramIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bagian atas */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start border-b border-white/30 pb-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <div className="bg-white px-4 py-2">
              <Image src="/js.png" alt="Logo" width={50} height={50} />
            </div>
          </div>

          {/* Info kontak */}
          <div className="text-sm space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Dsn Mondoluko Rt3 Rw2, Taman Suruh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+62 851 4168 2291</span>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon size={16} />
              <span>jolosutro.project</span>
            </div>
          </div>

          {/* Sosial media */}
          <div className="flex flex-col items-center md:items-start gap-2 mt-4 md:mt-0">
  <span className="text-sm">Social Media</span>
  <div className="flex gap-3">
    {/* Link ke Google Maps */}
    <a
      href="https://maps.app.goo.gl/w1UPLKbFLhPFScJK7"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:text-gray-200"
    >
      <MapPin size={18} />
    </a>

    {/* Link ke Instagram */}
    <a
      href="https://instagram.com/jolosutro.project"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:text-gray-200"
    >
      <Instagram size={18} />
    </a>
  </div>
</div>

        </div>

        {/* Bagian bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-2 md:mb-0">
            <a href="#" className="hover:underline">Tentang Kami</a>
            <a href="#" className="hover:underline">Kontak Kami</a>
            <a href="#" className="hover:underline">Bantuan</a>
            <a href="#" className="hover:underline">Privasi</a>
            <a href="#" className="hover:underline">Media</a>
          </div>
          <span className="text-center md:text-right">
            Copyright © 2025 • Jolosutro Project.
          </span>
        </div>
      </div>
    </footer>
  );
}
