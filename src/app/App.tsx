import React from 'react';
import { ChevronDown } from "lucide-react";

// --- Asset Imports ---
// Adjust the '../assets/' path if your App.tsx is in a different folder depth
import usImg from '../assets/us.jpg';
import sitePlanImg from '../assets/site_plan.jpg';
import exteriorImg from '../assets/exterior.jpg';
import interiorImg from '../assets/interior.jpg';
import barnImg from '../assets/barn.jpg';
import floorPlanImg from '../assets/floor_plan.jpg';
import sectionImg from '../assets/section.jpg';
import elevationImg from '../assets/elevation.jpg';

// --- Constants ---
const BRAND_COLOR = '#00008b';

// Custom filled 'in' logo for LinkedIn
const LinkedInFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.48 1s2.5 1.119 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

// Custom Instagram inner parts (Lens and Flash)
const InstagramCamera = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7" />
    <circle cx="20" cy="4" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// --- Sub-Components ---

function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle = `text-sm lowercase tracking-[0.2em] transition-opacity hover:opacity-70 text-[${BRAND_COLOR}]`;
  const iconButtonStyle = { borderColor: BRAND_COLOR, color: BRAND_COLOR };

  return (
    <header className="fixed left-0 right-0 bg-white z-50">
      <div className="w-full px-8 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">

          {/* 1. Navigation (Left) */}
          <nav className="flex-1 flex justify-center md:justify-start gap-12">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className={linkStyle} style={{ color: BRAND_COLOR }}>Work</a>
            <a href="mailto:info@studiofreunde.de" className={linkStyle} style={{ color: BRAND_COLOR }}>Contact</a>
          </nav>

          {/* 2. Logo (Center) */}
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold mb-1" style={{ color: BRAND_COLOR, letterSpacing: '1.5pt', fontFamily: 'agenda, sans-serif' }}>
              studiofreunde
            </h1>
            <p className="text-xs tracking-wide" style={{ color: BRAND_COLOR }}>Minimale Eingriffe. Langlebige Räume.</p>
          </div>

          {/* 3. Social Icons (Right) */}
          <div className="flex-1 flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/natalia-simonarson/"
              className="flex items-center justify-center w-6 h-6 rounded-sm border-2 transition-all hover:bg-opacity-10 hover:bg-blue-50"
              style={iconButtonStyle}
            >
              <LinkedInFilled className="w-3 h-3" />
            </a>
            <a
              href="https://www.instagram.com/studio.freunde"
              className="flex items-center justify-center w-6 h-6 rounded-sm border-2 transition-all hover:bg-opacity-10 hover:bg-blue-50"
              style={iconButtonStyle}
            >
              <InstagramCamera className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="text-center flex flex-col items-center">
        <a 
          href="mailto:info@studiofreunde.de" 
          className="text-lg border-b border-transparent hover:border-current transition-all"
          style={{ color: BRAND_COLOR }}
        >
          info@studiofreunde.de
        </a>
        <p className="text-[12px]" style={{ color: BRAND_COLOR }}>
          Eduard-Schmid-Str. 30, 81541 München
        </p>
        <p className="text-[10px] tracking-wide italic" style={{ color: BRAND_COLOR }}>
          © {new Date().getFullYear()} studiofreunde. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

// --- Main App Component ---

export default function App() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white px-60 ">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-36 pb-20">
        <div className="w-full px-4 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[3/2] overflow-hidden bg-gray-100">
              <img
                src={usImg}
                alt="Studio Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between mt-3 px-1">
              <span 
                className="text-lg tracking-widest text-sm" 
                style={{ color: BRAND_COLOR }}
              >
                Meret, Natalia, Dora
              </span>
              <span className="text-sm tracking-widest text-gray-400">
                (von links nach rechts)
              </span>
            </div>
            <div className="flex justify-center mt-12">
              <button 
                onClick={scrollToWork} 
                className="cursor-pointer hover:opacity-70 transition-opacity animate-bounce"
              >
                <ChevronDown className="w-8 h-8" style={{ color: BRAND_COLOR }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="scroll-mt-32 md:scroll-mt-48 w-full px-4 md:px-12 max-w-[1920px] mx-auto">

        {/* Project Header */}
        <div className="mb-16 w-full text-center md:text-left">
          <h2 className="text-2xl tracking-tight font-medium">
            <span className="uppercase" style={{ color: BRAND_COLOR }}>
              MAIGN
            </span>
            <span className="uppercase ml-2 text-gray-400">
              Work in Progress
            </span>
          </h2>
          <p className="text-md uppercase tracking-wide mb-1" style={{ color: BRAND_COLOR }}>
            Umbau eines denkmalgeschützten waldlerhauses in ein zweifamilien-wohnhaus
          </p>
        </div>

        {/* Main Architectural Drawing */}
        <div className="mb-24 w-full bg-white">
          <img
            src={elevationImg}
            alt="Elevation"
            className="w-full h-auto object-contain max-h-[80vh] mx-auto"
          />
        </div>

        {/* Text Block 1 */}
        <div className="mb-20 max-w-3xl mx-auto text-justify md:text-left">
          <p className="text-sm leading-loose tracking-wide text-justify" style={{ color: BRAND_COLOR }}>
            Am Waldrand steht ein Waldlerhaus aus dem 18. Jahrhundert – ein leiser, kraftvoller Bau, dessen Alltag einst Wohnen und Arbeiten selbstverständlich unter einem Dach bündelte. Der denkmalgeschützte Vorderbau beherbergte Schlafkammern, Esszimmer und Dachboden; die Küche war zweigeteilt: zur Stallseite hin der Schlachtbereich, näher am Esszimmer die Kochstelle. Diese räumliche Logik erzählt von Nähe, von Wegen, von Gerüchen und Temperaturen – und davon, wie präzise sich Architektur früher an Nutzung und Material verankerte.
          </p>
        </div>

        {/* Minimalist Divider Line */}
        <div className="max-w-3xl mx-auto mb-20 h-px opacity-10" style={{ backgroundColor: BRAND_COLOR }}></div>

        {/* --- ROW OF 3 IMAGES --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-24 w-full md:h-64">
          <img 
            src={sectionImg} 
            alt="Section" 
            className="h-full w-auto object-contain" 
          />
          <img 
            src={barnImg} 
            alt="Barn Structure" 
            className="h-full w-auto object-contain" 
          />
          <img 
            src={interiorImg} 
            alt="Interior View" 
            className="h-full w-auto object-contain" 
          />
        </div>

        {/* Text Block 2 */}
        <div className="mb-24 max-w-3xl mx-auto text-justify md:text-left">
          <p className="text-sm tracking-wide mb-4 text-justify leading-loose" style={{ color: BRAND_COLOR }}>
            Heute wird der Vorderbau behutsam saniert und zu einem zeitgemäßen Zweifamilienhaus weiterentwickelt. Unsere Haltung: nicht „überformen“, sondern lesen, verstehen und fortschreiben. Die Sanierung nimmt die vernakuläre Bauweise ernst – sie stammt aus einer Zeit, in der Materialkenntnis und natürliche Baustoffe nicht optional, sondern notwendig waren. In den Schichten des Bestands liegt ein Bauwissen, das im Entwurfsprozess wieder erfahrbar wird: Holz, das atmet; Lehm, der Feuchtigkeit puffert; Schilfrohr als Putzträger. Im Innenraum zeigt sich dieses Prinzip an der historischen Haftungsebene: kleine Holzstücke (Staken), benagelt als Träger für Lehm, der das Holz vor Durchfeuchtung schützt und zugleich einen geeigneten Untergrund für den Putzaufbau schafft – eine robuste, kapillaraktive Alternative zu heutigen Verbundkonstruktionen.
          </p>
        </div>

        {/* --- BOTTOM TECHNICAL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-24">

          {/* Left Quadrant */}
          <div className="w-full h-auto md:relative flex items-center justify-center">
            <img
              src={exteriorImg}
              alt="Exterior View"
              className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-contain"
            />
          </div>

          {/* Right Quadrants (Stacked) */}
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="w-full">
              <img
                src={sitePlanImg}
                alt="Site Plan"
                className="w-full h-auto block"
              />
            </div>
            <div className="w-full">
              <img
                src={floorPlanImg}
                alt="Floor Plan"
                className="w-full h-auto block"
              />
            </div>
          </div>


        </div>

        {/* Text Block 3 */}
        <div className="mb-24 max-w-3xl mx-auto text-justify md:text-left">
          <p className="text-sm tracking-wide mb-6 text-justify leading-loose" style={{ color: BRAND_COLOR }}>
            Tragfähige Bausubstanz wird durch rekonstruktive Maßnahmen gesichert und repariert. Sensible Eingriffe schaffen neue räumliche Qualitäten – mehr Licht, bessere Erschließung, zeitgemäße Wohnlichkeit – ohne den Charakter des Hauses zu verlieren. Das Neue ist nicht lauter als das Alte, sondern im Einklang.
          </p>

          <p className="text-sm tracking-wide text-justify leading-loose" style={{ color: BRAND_COLOR }}>
            Im Zuge der Projektentwicklung zeigte sich: Die Substanz des Stallanbaus ist nicht mehr tragfähig; das Mauerwerk zerbröselt bereits bei geringer Berührung. Dieser Teil wird als zweiter Bauabschnitt neu gedacht: ein Anbau, der das massive Holzblockhaus zum verwilderten Grün hin öffnet – mit leichter, durchlässiger Konstruktion und direktem Bezug zum Außenraum. So entsteht aus dem Ensemble ein erweiterter Wohnraum: mit der Vergangenheit in die Zukunft – nicht als Kulisse, sondern als gelebte Kontinuität.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}