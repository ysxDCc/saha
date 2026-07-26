import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Instagram, MapPin, Clock, Phone, ChevronDown, Menu, X, Wine } from "lucide-react";

/* ---------------------------------------------------------
   SAHA BAR — Zlaté Moravce
   Design tokens
   bg-void      #0A0806
   bg-charcoal  #14100C
   ink          #F3E9DA
   ink-dim      #B7A98E
   amber        #C98A3E
   amber-bright #EFAE55
   neon-coral   #FF6B4D
   line         rgba(201,138,62,0.22)
--------------------------------------------------------- */

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700&display=swap');
`;

function PourDivider({ tone = "amber" }) {
  const color = tone === "coral" ? "#FF6B4D" : "#C98A3E";
  return (
    <div className="relative w-full flex items-center justify-center py-2 select-none" aria-hidden="true">
      <svg width="220" height="18" viewBox="0 0 220 18" fill="none" className="overflow-visible">
        <line x1="0" y1="9" x2="220" y2="9" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
        <motion.circle
          r="2.2"
          fill={color}
          initial={{ cx: 0, opacity: 0 }}
          whileInView={{ cx: [0, 220], opacity: [0, 1, 1, 0] }}
          viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
          cy="9"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
        <circle cx="110" cy="9" r="3" fill={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
      </svg>
    </div>
  );
}

function Grain() {
  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.05] mix-blend-overlay z-[60]" aria-hidden="true">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  );
}

function NeonWord({ text }) {
  return (
    <span className="relative inline-block">
      <motion.span
        className="relative"
        style={{
          color: "#F3E9DA",
          textShadow:
            "0 0 8px rgba(255,107,77,0.55), 0 0 22px rgba(239,174,85,0.35), 0 0 46px rgba(201,138,62,0.25)",
        }}
        animate={{
          opacity: [1, 1, 0.86, 1, 1, 0.92, 1, 1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.42, 0.44, 0.46, 0.8, 0.82, 0.84, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function useReveal() {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px 0px -80px 0px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 justify-center mb-4">
      <span className="h-px w-8 bg-[#C98A3E]/50" />
      <span
        className="uppercase text-[11px] tracking-[0.35em] text-[#EFAE55]"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {children}
      </span>
      <span className="h-px w-8 bg-[#C98A3E]/50" />
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Signature", href: "#signature" },
    { label: "Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A0806]/90 backdrop-blur-md border-b border-[#C98A3E]/15 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2" style={{ fontFamily: "Fraunces, serif" }}>
            <span className="text-xl md:text-2xl tracking-[0.15em] text-[#F3E9DA]">SAHA</span>
            <span className="text-xl md:text-2xl tracking-[0.15em] text-[#C98A3E] font-light italic">bar</span>
          </a>

          <nav className="hidden md:flex items-center gap-10" style={{ fontFamily: "Manrope, sans-serif" }}>
            {links.map((l) => (
              
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] text-[#B7A98E] hover:text-[#EFAE55] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          
            href="#contact"
            className="hidden md:inline-flex items-center border border-[#C98A3E]/60 text-[#EFAE55] text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-[#C98A3E] hover:text-[#0A0806] transition-all duration-300"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Reserve
          </a>

          <button className="md:hidden text-[#F3E9DA]" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0A0806] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-[#F3E9DA]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            {links.map((l) => (
              
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl uppercase tracking-[0.2em] text-[#F3E9DA]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0A0806]">
      {/* atmosphere */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(201,138,62,0.16), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 70%, rgba(255,107,77,0.10), transparent 60%), radial-gradient(ellipse 50% 50% at 15% 80%, rgba(201,138,62,0.10), transparent 60%), #0A0806",
          }}
        />
        {/* bar silhouette shapes: glassware suggestion via soft blurred circles */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
          background: "linear-gradient(to top, #0A0806 10%, transparent 100%)"
        }} />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 4) * 1.5,
              height: 2 + (i % 4) * 1.5,
              left: `${8 + i * 9}%`,
              top: `${15 + (i % 5) * 14}%`,
              background: i % 2 === 0 ? "#EFAE55" : "#FF6B4D",
              boxShadow: `0 0 ${6 + (i % 3) * 4}px ${i % 2 === 0 ? "#EFAE55" : "#FF6B4D"}`,
            }}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[11px] md:text-xs uppercase text-[#EFAE55] mb-6"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Zlaté Moravce · Bar &amp; Night
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[13vw] leading-[0.95] md:text-8xl lg:text-[7.5rem] text-[#F3E9DA]"
          style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
        >
          Zážitok
          <br />
          <span className="italic font-normal text-[#C98A3E]">spojený</span> s radosťou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-md text-[#B7A98E] text-base md:text-lg"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}
        >
          Tlmené svetlá, poctivé drinky a večery, ktoré si pamätáte aj ráno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          
            href="#menu"
            className="px-8 py-3.5 bg-[#C98A3E] text-[#0A0806] text-[13px] uppercase tracking-[0.2em] hover:bg-[#EFAE55] transition-colors duration-300"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
          >
            View Menu
          </a>
          
            href="#contact"
            className="px-8 py-3.5 border border-[#B7A98E]/40 text-[#F3E9DA] text-[13px] uppercase tracking-[0.2em] hover:border-[#EFAE55] hover:text-[#EFAE55] transition-colors duration-300"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
          >
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#B7A98E]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

function Signature() {
  const reveal = useReveal();
  const ingredients = ["Brusnicová / malinová vodka", "Čerstvá limetka", "Mäta", "A trocha lásky"];
  return (
    <section id="signature" className="relative bg-[#0A0806] py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 45% 60% at 50% 40%, rgba(255,107,77,0.14), transparent 65%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <motion.div {...reveal} className="order-2 md:order-1">
          <Eyebrow>Signature Serve</Eyebrow>
          <h2
            className="text-5xl md:text-6xl text-[#F3E9DA] mb-2"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
          >
            <NeonWord text="UGURUNDU" />
          </h2>
          <p className="text-[#EFAE55] italic mb-6" style={{ fontFamily: "Fraunces, serif" }}>
            Náš podpis. Naša hrdosť.
          </p>
          <p className="text-[#B7A98E] leading-relaxed mb-8 max-w-md" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}>
            Sviežy a vibrujúci drink postavený na brusnicovej alebo malinovej vodke, čerstvej limetke
            a mäte. Vyvážený, jasný a mierne divoký — presne taký, aký má byť večer, ktorý si zapamätáte.
          </p>
          <ul className="space-y-3 mb-10">
            {ingredients.map((ing) => (
              <li key={ing} className="flex items-center gap-3 text-sm text-[#F3E9DA]/90" style={{ fontFamily: "Manrope, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4D]" style={{ boxShadow: "0 0 6px #FF6B4D" }} />
                {ing}
              </li>
            ))}
          </ul>
          
            href="#menu"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[#EFAE55] border-b border-[#EFAE55]/50 pb-1 hover:border-[#EFAE55] transition-colors"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Preskúmať celé menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 relative flex items-center justify-center"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem]">
            <div
              className="absolute inset-0 rounded-[2rem] blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, rgba(255,107,77,0.35), transparent 70%)" }}
            />
            {/* stylised glass */}
            <svg viewBox="0 0 200 320" className="relative w-full h-full drop-shadow-[0_0_40px_rgba(255,107,77,0.25)]">
              <defs>
                <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6B4D" />
                  <stop offset="100%" stopColor="#C9264E" />
                </linearGradient>
                <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F3E9DA" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#F3E9DA" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d="M40 20 L160 20 L120 280 Q100 300 80 280 Z" fill="url(#glass)" stroke="#F3E9DA" strokeOpacity="0.25" strokeWidth="1.5" />
              <clipPath id="clip"><path d="M40 20 L160 20 L120 280 Q100 300 80 280 Z" /></clipPath>
              <motion.rect
                x="30" width="140" height="220" fill="url(#liquid)" clipPath="url(#clip)"
                initial={{ y: 320 }}
                whileInView={{ y: 90 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
              <ellipse cx="100" cy="90" rx="60" ry="10" fill="#FF6B4D" opacity="0.5" />
              <circle cx="70" cy="60" r="8" fill="#F3E9DA" opacity="0.15" />
              <circle cx="130" cy="75" r="5" fill="#F3E9DA" opacity="0.12" />
              <line x1="20" y1="14" x2="180" y2="14" stroke="#EFAE55" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MenuHighlights() {
  const reveal = useReveal();
  const domace = [
    { name: "Old Fashioned SAHA", desc: "Bourbon, trstinový cukor, aromatická horkosť, pomarančová kôra", price: "8.50 €" },
    { name: "Charcoal Sour", desc: "Whisky, citrón, vaječný bielok, aktívne uhlie", price: "8.00 €" },
    { name: "Zlatý Negroni", desc: "Gin, campari, sladké vermút, med", price: "7.50 €" },
    { name: "Dymový Mule", desc: "Vodka, zázvorové pivo, limetka, dymová esencia", price: "7.00 €" },
  ];
  const limonady = [
    { name: "Mätová Limonáda", desc: "Čerstvá mäta, limetka, trstinový sirup", price: "3.50 €" },
    { name: "Bazová Limonáda", desc: "Domáci bazový sirup, citrón, sóda", price: "3.50 €" },
    { name: "Malinová Limonáda", desc: "Čerstvé maliny, limetka, mäta", price: "3.80 €" },
  ];

  const Column = ({ title, items, delay }) => (
    <motion.div {...reveal} transition={{ ...reveal.transition, delay }}>
      <h3
        className="text-2xl md:text-3xl text-[#F3E9DA] mb-8 pb-4 border-b border-[#C98A3E]/20"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
      >
        {title}
      </h3>
      <div className="space-y-7">
        {items.map((it) => (
          <div key={it.name} className="group">
            <div className="flex items-baseline justify-between gap-4">
              <span
                className="text-[#F3E9DA] text-lg group-hover:text-[#EFAE55] transition-colors"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {it.name}
              </span>
              <span className="flex-1 border-b border-dotted border-[#B7A98E]/25 mb-1.5" />
              <span className="text-[#EFAE55] text-sm shrink-0" style={{ fontFamily: "Manrope, sans-serif" }}>
                {it.price}
              </span>
            </div>
            <p className="text-[#B7A98E]/80 text-sm mt-1" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}>
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="menu" className="relative bg-[#100C09] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div {...reveal} className="text-center mb-16">
          <Eyebrow>The Menu</Eyebrow>
          <h2 className="text-4xl md:text-5xl text-[#F3E9DA]" style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}>
            Domáce drinky &amp; limonády
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <Column title="Domáce drinky" items={domace} delay={0} />
          <Column title="Limonády" items={limonady} delay={0.15} />
        </div>
      </div>
    </section>
  );
}

function Events() {
  const reveal = useReveal();
  const events = [
    { tag: "Streda", title: "Jazz Nights", desc: "Živá improvizácia, tlmené svetlo, čistý zvuk kontrabasu do neskorých hodín." },
    { tag: "Piatok", title: "Late Night SAHA", desc: "DJ set, dlhšie hodiny, atmosféra, ktorá naberá na sile po polnoci." },
    { tag: "Sobota", title: "Special Evenings", desc: "Tematické večery a ochutnávky — sledujte Instagram pre aktuálny program." },
  ];
  return (
    <section id="events" className="relative bg-[#0A0806] py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(201,138,62,0.10), transparent 60%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.div {...reveal} className="text-center mb-16">
          <Eyebrow>What's On</Eyebrow>
          <h2 className="text-4xl md:text-5xl text-[#F3E9DA]" style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}>
            Večery, ktoré sa oplatí zažiť
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.15 }}
              className="relative border border-[#C98A3E]/15 p-8 hover:border-[#C98A3E]/40 transition-colors duration-500 group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,107,77,0.08), transparent 70%)" }}
              />
              <span className="relative text-[11px] uppercase tracking-[0.3em] text-[#EFAE55]" style={{ fontFamily: "Manrope, sans-serif" }}>
                {ev.tag}
              </span>
              <h3 className="relative text-2xl text-[#F3E9DA] mt-3 mb-3" style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}>
                {ev.title}
              </h3>
              <p className="relative text-[#B7A98E] text-sm leading-relaxed" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}>
                {ev.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const reveal = useReveal();
  return (
    <section id="about" className="relative bg-[#100C09] py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div {...reveal}>
          <Eyebrow>Naša Filozofia</Eyebrow>
          <p
            className="text-2xl md:text-4xl leading-[1.4] text-[#F3E9DA]"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Miesto, kde sa deň pomaly mení na noc a ľudia sa cítia dobre — od prvého dúšku
            kávy po posledný pohár na dobrú noc.
          </p>
          <p
            className="mt-8 text-[#B7A98E] max-w-xl mx-auto"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}
          >
            SAHA nie je len bar. Je to priestor spomalenia uprostred Zlatých Moraviec — poctivé
            drinky, tlmené svetlá a spoločnosť, ktorá vám urobí radosť.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", note: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {["name", "phone", "date"].map((field) => (
        <div key={field}>
          <label
            className="block text-[11px] uppercase tracking-[0.2em] text-[#B7A98E] mb-2"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {field === "name" ? "Meno" : field === "phone" ? "Telefón" : "Dátum rezervácie"}
          </label>
          <input
            type={field === "date" ? "date" : "text"}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
            className="w-full bg-transparent border-b border-[#B7A98E]/25 focus:border-[#EFAE55] outline-none py-2.5 text-[#F3E9DA] transition-colors duration-300"
            style={{ fontFamily: "Manrope, sans-serif" }}
          />
        </div>
      ))}
      <div>
        <label
          className="block text-[11px] uppercase tracking-[0.2em] text-[#B7A98E] mb-2"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Poznámka
        </label>
        <textarea
          rows={2}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="w-full bg-transparent border-b border-[#B7A98E]/25 focus:border-[#EFAE55] outline-none py-2.5 text-[#F3E9DA] resize-none transition-colors duration-300"
          style={{ fontFamily: "Manrope, sans-serif" }}
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 px-8 py-3.5 bg-[#C98A3E] text-[#0A0806] text-[13px] uppercase tracking-[0.2em] hover:bg-[#EFAE55] transition-colors duration-300"
        style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
      >
        {sent ? "Odoslané ✓" : "Odoslať rezerváciu"}
      </button>
      {sent && (
        <p className="text-center text-[#B7A98E] text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
          Ďakujeme. Ozveme sa vám čo najskôr.
        </p>
      )}
    </form>
  );
}

function Contact() {
  const reveal = useReveal();
  const hours = [
    { d: "Pondelok – Štvrtok", h: "8:00 – 22:00" },
    { d: "Piatok – Sobota", h: "8:00 – 04:00" },
    { d: "Nedeľa", h: "12:00 – 22:00" },
  ];
  return (
    <section id="contact" className="relative bg-[#0A0806] py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 50% at 90% 20%, rgba(255,107,77,0.08), transparent 60%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.div {...reveal} className="text-center mb-16">
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="text-4xl md:text-5xl text-[#F3E9DA]" style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}>
            Nájdete nás tu
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...reveal} className="space-y-10">
            <div className="flex gap-4">
              <MapPin className="text-[#EFAE55] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-[#F3E9DA] text-lg mb-1" style={{ fontFamily: "Fraunces, serif" }}>Adresa</h4>
                <p className="text-[#B7A98E]" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}>
                  Župná 16, 953 01 Zlaté Moravce
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-[#EFAE55] shrink-0 mt-1" size={20} />
              <div className="w-full">
                <h4 className="text-[#F3E9DA] text-lg mb-3" style={{ fontFamily: "Fraunces, serif" }}>Otváracie hodiny</h4>
                <div className="space-y-1.5">
                  {hours.map((row) => (
                    <div key={row.d} className="flex justify-between text-sm max-w-xs" style={{ fontFamily: "Manrope, sans-serif" }}>
                      <span className="text-[#B7A98E]">{row.d}</span>
                      <span className="text-[#F3E9DA]/90">{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Instagram className="text-[#EFAE55] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-[#F3E9DA] text-lg mb-1" style={{ fontFamily: "Fraunces, serif" }}>Instagram</h4>
                
                  href="https://instagram.com/saha.bar.zm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B7A98E] hover:text-[#EFAE55] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300 }}
                >
                  @saha.bar.zm
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.15 }} className="border border-[#C98A3E]/15 p-8 md:p-10">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#0A0806] border-t border-[#C98A3E]/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2" style={{ fontFamily: "Fraunces, serif" }}>
          <span className="text-lg tracking-[0.15em] text-[#F3E9DA]">SAHA</span>
          <span className="text-lg tracking-[0.15em] text-[#C98A3E] italic font-light">bar</span>
        </div>
        <p className="text-[#B7A98E]/60 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>
          © {new Date().getFullYear()} SAHA BAR, Zlaté Moravce. Všetky práva vyhradené.
        </p>
        <div className="flex items-center gap-2 text-[#B7A98E]/60 text-xs" style={{ fontFamily: "Manrope, sans-serif" }}>
          <Wine size={14} /> Pite zodpovedne
        </div>
      </div>
    </footer>
  );
}

export default function SahaBarSite() {
  return (
    <div className="bg-[#0A0806] antialiased" style={{ scrollBehavior: "smooth" }}>
      <style>{FONT_IMPORT}</style>
      <Grain />
      <NavBar />
      <Hero />
      <PourDivider />
      <Signature />
      <PourDivider tone="coral" />
      <MenuHighlights />
      <Events />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
