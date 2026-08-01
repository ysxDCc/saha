import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/ui/Preloader'
import BackToTop from '@/components/ui/BackToTop'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'SAHA BAR ZM | Éterický bar budúcnosti',
  description: 'Zážitok za hranicami reality. Prémiový bar v Zlatých Moravciach.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="bg-[#030504] text-[#e0f7ec]">
        {/* Animated background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001510] via-[#030504] to-[#0a0020] animate-gradient-shift" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-3xl animate-float"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0,255,170,0.3)' : 'rgba(170,0,255,0.3)'}, transparent)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <Preloader>
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </Preloader>
      </body>
    </html>
  )
}