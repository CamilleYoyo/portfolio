/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, FormEvent } from "react"
import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import {
  Mail,
  ArrowUpRight,
  Code2,
  Megaphone,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Send,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const navLinks = [
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Expertises" },
  { href: "#formations", label: "Formations" },
  { href: "#experiences", label: "Expériences" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
]

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
    alt: "Retail",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    alt: "Analytics",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    alt: "Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
    alt: "Workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
    alt: "Présentation",
  },
]

const skills: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: ShoppingBag,
    title: "Management & Retail",
    items: [
      "Pilotage d'équipe terrain",
      "Suivi & optimisation des KPIs",
      "Merchandising & opérations",
      "Gestion des flux & stocks",
      "Relation client premium",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Communication",
    items: [
      "Stratégie digitale & SEO",
      "Community management",
      "Création de contenu",
      "Adobe Creative Suite",
      "Google Analytics",
    ],
  },
  {
    icon: Code2,
    title: "Tech & Développement",
    items: [
      "HTML / CSS / JavaScript",
      "PHP & SQL",
      "E-commerce & CMS",
      "Méthodologie Agile",
      "Intégration web",
    ],
  },
]

const formations = [
  {
    year: "2025 — 2026",
    degree: "Mastère Marketing, Management, Retail & Commerce",
    school: "Igensia Education, Paris — Alternance Primark",
    details:
      "Stratégie marketing avancée, management retail, pilotage commercial, leadership opérationnel.",
  },
  {
    year: "2024 — 2025",
    degree: "Bachelor Communication Multimédia",
    school: "IMCP, Paris",
    details:
      "Stratégie de communication digitale, création de contenu, gestion de projet multiplateforme, community management, analytics.",
  },
  {
    year: "2022 — 2024",
    degree: "BTS Services Informatiques aux Organisations",
    school: "IMCP, Paris — Option SLAM",
    details:
      "Développement d'applications web et mobile, bases de données, programmation orientée objet, gestion de projet Agile.",
  },
]

const experiences = [
  {
    year: "2024 — Présent",
    company: "Primark, Paris",
    title: "Manager en Alternance",
    tasks: [
      "Supervision d'équipe",
      "Pilotage KPIs",
      "Reporting opérationnel",
      "Merchandising",
      "Gestion des stocks",
      "Coordination flux",
    ],
  },
  {
    year: "2023 — 2024",
    company: "Jetconso SARL",
    title: "Chargé Marketing & Communication",
    tasks: [
      "Développement e-commerce",
      "Optimisation SEO",
      "Création de contenu",
      "Analyse concurrentielle",
      "Stratégie acquisition",
    ],
  },
  {
    year: "Été 2021",
    company: "Canal+ Congo",
    title: "Technicien d'Installation",
    tasks: [
      "Installation antennes",
      "Diagnostic technique",
      "Support client terrain",
      "Configuration matériel",
    ],
  },
  {
    year: "Été 2020",
    company: "MTN Congo",
    title: "Agent Marketing Terrain",
    tasks: [
      "Prospection client",
      "Point de vente",
      "Collecte de données",
      "Reporting activité",
    ],
  },
]

const projects = [
  {
    title: "AfrikEasy",
    tag: "Branding & Marketing",
    description:
      "Identité visuelle complète pour une marketplace de produits authentiques africains. Logo, charte graphique, supports de communication et stratégie marketing.",
    image: "/images/afrikeasy-mockup.jpg",
  },
  {
    title: "Campagne Print",
    tag: "Direction Artistique",
    description:
      "Conception d'affiches et flyers pour la communication offline de la marque AfrikEasy.",
    image: "/images/afrikeasy-affiche.jpg",
  },
  {
    title: "Rollups & PLV",
    tag: "Supports Marketing",
    description:
      "Design de rollups et supports de PLV pour événements et points de vente partenaires.",
    image: "/images/afrikeasy-rollup.jpg",
  },
  {
    title: "Site MFC",
    tag: "Développement Web",
    description:
      "Site vitrine full-stack pour un centre de formation professionnelle. Authentification, espace client, catalogue de formations, inscriptions en ligne. PHP, MySQL, HTML/CSS/JS.",
    image: "/images/mfc-connexion.png",
  },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("https://formsubmit.co/ajax/camilleyoyo02@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setFormStatus("sent")
        form.reset()
        setTimeout(() => setFormStatus("idle"), 5000)
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <main className="bg-[#FAFAF9]">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#FAFAF9]/80 border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-gray-900"
          >
            V. C.{" "}
            <span className="text-indigo-500">Ondze Yoyo</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-gray-500 hover:text-indigo-500 transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-gray-100 bg-[#FAFAF9]/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 hover:text-indigo-500 py-2.5 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Floating sensitivity={-0.5} className="h-full hidden md:block">
          <FloatingElement depth={0.5} className="top-[15%] left-[3%]">
            <motion.img
              src={heroImages[0].url}
              alt={heroImages[0].alt}
              className="w-28 h-20 object-cover rounded-xl shadow-2xl -rotate-[3deg] hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[5%] left-[12%]">
            <motion.img
              src={heroImages[1].url}
              alt={heroImages[1].alt}
              className="w-52 h-40 object-cover rounded-xl shadow-2xl -rotate-12 hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>
          <FloatingElement depth={4} className="top-[80%] left-[8%]">
            <motion.img
              src={heroImages[2].url}
              alt={heroImages[2].alt}
              className="w-56 h-56 object-cover rounded-xl shadow-2xl -rotate-[4deg] hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[2%] left-[82%]">
            <motion.img
              src={heroImages[3].url}
              alt={heroImages[3].alt}
              className="w-56 h-48 object-cover rounded-xl shadow-2xl rotate-[6deg] hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[68%] left-[83%]">
            <motion.img
              src={heroImages[4].url}
              alt={heroImages[4].alt}
              className="w-72 h-72 object-cover rounded-xl shadow-2xl rotate-[19deg] hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>
        </Floating>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-sm text-gray-500 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Manager Retail &times; Marketing &times; Tech
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05]"
          >
            <span className="block">Du code au</span>
            <LayoutGroup>
              <motion.span layout className="block mt-1 md:mt-2">
                <TextRotate
                  texts={[
                    "client",
                    "succès",
                    "marketing",
                    "management",
                    "digital",
                  ]}
                  mainClassName="overflow-hidden text-indigo-500 justify-center py-1 md:py-2"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={2500}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                />
              </motion.span>
            </LayoutGroup>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Un parcours singulier qui relie technologie, communication et
            management retail. Trois domaines, une vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a
              href="https://www.linkedin.com/in/camille-yoyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all hover:shadow-sm text-sm"
            >
              <LinkedInIcon className="w-4 h-4" />
              Voir mon LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-500/25 text-sm"
            >
              <Mail className="w-4 h-4" />
              Me contacter
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[3px] text-gray-400">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </section>

      {/* ===== PARCOURS ===== */}
      <section id="parcours" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              01
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              Mon <span className="text-indigo-500">Parcours</span>
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <span className="text-5xl font-bold text-indigo-500 float-left mr-3 leading-none mt-1">
                  F
                </span>
                ormé au développement web et aux solutions informatiques (BTS
                SIO, option SLAM), j&apos;ai choisi d&apos;élargir mon champ
                d&apos;action vers la communication multimédia puis le management
                retail. Ce cheminement atypique me confère une vision
                transversale unique, alliant rigueur technique, créativité
                marketing et leadership opérationnel.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aujourd&apos;hui en alternance chez Primark Paris en tant que
                Manager, je pilote des équipes, optimise les KPIs et orchestre le
                merchandising au quotidien. Mon objectif : apporter une approche
                data-driven et technologique au retail de demain.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-gray-100">
                {[
                  { number: "5+", label: "Années d'études" },
                  { number: "3", label: "Domaines" },
                  { number: "4", label: "Expériences pro" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-indigo-500">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/imgCam.PNG"
                alt="Vignon Camille ONDZE YOYO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FULL-BLEED QUOTE ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl italic text-white/90 text-center max-w-2xl px-8 font-light leading-relaxed"
          >
            &laquo;&nbsp;L&apos;excellence est dans les détails — du pixel au
            parcours client.&nbsp;&raquo;
          </motion.p>
        </div>
      </section>

      {/* ===== COMPÉTENCES ===== */}
      <section id="competences" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              02
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              Domaines d&apos;
              <span className="text-indigo-500">Expertise</span>
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-[#FAFAF9] border border-gray-100 hover:border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    {skill.title}
                  </h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-500 flex items-center gap-2.5 group-hover:text-gray-600 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-indigo-300 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section id="formations" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              03
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              <span className="text-indigo-500">Formations</span> &amp;
              Diplômes
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mt-6" />
          </motion.div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-indigo-200 to-transparent" />
            {formations.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pb-14 last:pb-0"
              >
                <div className="absolute -left-[calc(2rem+4px)] md:-left-[calc(3rem+4px)] top-1.5 w-[10px] h-[10px] rounded-full bg-indigo-500 ring-4 ring-[#FAFAF9]" />
                <span className="text-sm font-semibold text-indigo-500 tracking-wider">
                  {f.year}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-2 leading-snug">
                  {f.degree}
                </h3>
                <p className="text-gray-400 italic mt-1">{f.school}</p>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-2xl">
                  {f.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-BLEED QUOTE 2 ===== */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl italic text-white/90 text-center max-w-2xl px-8 font-light leading-relaxed"
          >
            &laquo;&nbsp;Chaque expérience est une brique vers la vision
            globale.&nbsp;&raquo;
          </motion.p>
        </div>
      </section>

      {/* ===== EXPÉRIENCES ===== */}
      <section id="experiences" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              04
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              <span className="text-indigo-500">Expériences</span>{" "}
              Professionnelles
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mt-6" />
          </motion.div>

          <div className="divide-y divide-gray-100">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 py-10 first:pt-0 group"
              >
                <div>
                  <span className="text-sm font-semibold text-indigo-500">
                    {exp.year}
                  </span>
                  <span className="block text-sm text-gray-400 italic mt-0.5">
                    {exp.company}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-500 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tasks.map((task, j) => (
                      <span
                        key={j}
                        className="px-3.5 py-1.5 text-sm text-gray-500 bg-gray-50 rounded-full border border-gray-100 hover:border-indigo-200 hover:text-indigo-500 transition-colors cursor-default"
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJETS ===== */}
      <section id="projets" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              05
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              Projets{" "}
              <span className="text-indigo-500">Sélectionnés</span>
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Featured: AfrikEasy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:row-span-2 group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[500px] overflow-hidden relative">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                    {projects[0].tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    {projects[0].title}
                  </h3>
                  <p className="text-white/70 mt-2 text-sm max-w-lg">
                    {projects[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Campagne Print + Rollups */}
            {projects.slice(1, 3).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="lg:col-span-2 group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* MFC — full width card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-6 group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[16/10] md:aspect-auto md:min-h-[300px] overflow-hidden relative">
                  <img
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                    {projects[3].tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                    {projects[3].title}
                  </h3>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    {projects[3].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["PHP", "MySQL", "HTML/CSS", "JavaScript", "WampServer"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="py-24 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-violet-50/50 to-[#FAFAF9]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-indigo-400 tracking-wider">
              06
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              Travaillons{" "}
              <span className="text-indigo-500">ensemble</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg max-w-lg mx-auto leading-relaxed">
              Vous avez un projet, une opportunité ou simplement envie
              d&apos;échanger ? N&apos;hésitez pas à me contacter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nouveau message depuis le Portfolio" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Objet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto text-sm"
                >
                  {formStatus === "sending" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Envoi en cours…
                    </>
                  ) : formStatus === "sent" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
                {formStatus === "error" && (
                  <p className="text-sm text-red-500 mt-2">
                    Une erreur est survenue. Veuillez réessayer ou m&apos;écrire directement à camilleyoyo02@gmail.com
                  </p>
                )}
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Retrouvez-moi</h3>
                <a
                  href="https://www.linkedin.com/in/camille-yoyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <LinkedInIcon className="w-5 h-5" />
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Email direct</h3>
                <a
                  href="mailto:camilleyoyo02@gmail.com"
                  className="text-indigo-500 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  camilleyoyo02@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Localisation</h3>
                <p className="text-sm text-gray-500">Paris, France</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-lg font-semibold text-gray-900">
                V. C.{" "}
                <span className="text-indigo-500">Ondze Yoyo</span>
              </span>
              <p className="text-sm text-gray-400 mt-1">
                Du code au client — un parcours unique.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/camille-yoyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-indigo-500 transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="mailto:camilleyoyo02@gmail.com"
                className="text-sm text-gray-400 hover:text-indigo-500 transition-colors uppercase tracking-wider"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Vignon Camille ONDZE YOYO. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
