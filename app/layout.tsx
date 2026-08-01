import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'
import AestheticBackground from '@/components/ui/AestheticBackground'
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
        <Preloader>
          <AestheticBackground />
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