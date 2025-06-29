import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent border-t border-white/10 mt-12">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 px-4">
        <div className="flex flex-col gap-2 text-light/80 text-sm items-center md:items-start">
          <span className="font-bold text-lg bg-astro-gradient bg-clip-text text-transparent">Astrocode</span>
          <span>© {new Date().getFullYear()} Astrocode. Wszelkie prawa zastrzeżone.</span>
        </div>
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <Link href="#" className="hover:text-astro.400 transition-colors">Strona Główna</Link>
          <Link href="#uslugi" className="hover:text-astro.400 transition-colors">Usługi</Link>
          <Link href="#opinie" className="hover:text-astro.400 transition-colors">Opinie</Link>
        </nav>
        <div className="flex gap-4 items-center justify-center mt-4 md:mt-0">
          <a href="https://discord.gg/whiga" target="_blank" rel="noopener noreferrer" className="text-astro.400 hover:text-astro.neon transition-colors" aria-label="Discord">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-1.11 2.086-1.527 3.005a18.902 18.902 0 0 0-5.076 0A12.76 12.76 0 0 0 8.62 3.256a.115.115 0 0 0-.12-.056A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.042C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c2.053 1.507 4.042 2.422 5.992 3.029a.115.115 0 0 0 .125-.042c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.062-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.061.154c.36.7.772 1.366 1.227 1.995a.115.115 0 0 0 .125.041c1.95-.607 3.939-1.522 5.992-3.03a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.573-13.646a.093.093 0 0 0-.048-.042ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z"/></svg>
          </a>
          <a href="https://github.com/astrocode" target="_blank" rel="noopener noreferrer" className="text-astro.400 hover:text-astro.neon transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="mailto:kontakt@astrocode.pl" className="text-astro.400 hover:text-astro.neon transition-colors" aria-label="Mail">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
