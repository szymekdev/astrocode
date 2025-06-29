import "@fontsource/sora/400.css";
import "@fontsource/sora/700.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";

export const metadata = {
  title: "Astrocode – Nowoczesne portfolio",
  description: "Nowoczesne usługi IT, Discord, Minecraft, grafika, animacje. Portfolio 2025.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <body className="min-h-screen bg-dark text-light font-sans antialiased selection:bg-astro.400/40">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-[80vh] pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
