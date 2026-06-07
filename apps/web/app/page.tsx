import Link from "next/link";
import styles from "./hero.module.css";

const content = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Alerts", href: "/dashboard" },
    { label: "Field Teams", href: "/dashboard" },
  ],
  navContact: "Report Incident",
  bgWord: "DRISHTI",
  eyebrow: "",
  title: "",
  tagline: "",
};

export default function Home() {
  return (
    <div className={styles.hero}>
      {/* SKY BG */}
      <div className={styles.sky} />
      <div className={`${styles.cloud} ${styles.c1}`} />
      <div className={`${styles.cloud} ${styles.c2}`} />
      <div className={`${styles.cloud} ${styles.c3}`} />
      <div className={`${styles.cloud} ${styles.c4}`} />
      <div className={styles.sunRays} />

      {/* GIANT BACKGROUND TEXT */}
      <div className={styles.bgWordWrap}>
        <span className={styles.bgWord}>{content.bgWord}</span>
      </div>

      {/* PLANT + VISION SYSTEM ILLUSTRATION */}
      <div className={styles.plantWrap}>
        <svg
          className={styles.plantSvg}
          viewBox="0 0 520 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soil mound */}
          <ellipse cx="260" cy="620" rx="220" ry="60" fill="#6B4C2A" />
          <ellipse cx="260" cy="608" rx="210" ry="50" fill="#7D5A32" />
          <ellipse cx="260" cy="596" rx="190" ry="42" fill="#8B6238" />
          <ellipse cx="160" cy="590" rx="28" ry="12" fill="#6B4C2A" />
          <ellipse cx="340" cy="586" rx="22" ry="10" fill="#6B4C2A" />
          <ellipse cx="200" cy="580" rx="16" ry="7" fill="#7D5A32" />
          <ellipse cx="310" cy="578" rx="14" ry="6" fill="#7D5A32" />
          <circle cx="185" cy="598" r="5" fill="#5A3E20" />
          <circle cx="320" cy="594" r="4" fill="#5A3E20" />
          <circle cx="240" cy="588" r="3" fill="#5A3E20" />
          <circle cx="290" cy="592" r="3.5" fill="#5A3E20" />

          {/* Main stem */}
          <path
            d="M258 596 C256 540 254 480 258 420 C260 370 262 320 260 260 C258 200 256 150 258 100"
            stroke="#2E7D32"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M262 596 C260 540 258 480 262 420 C264 370 266 320 264 260 C262 200 260 150 262 100"
            stroke="#388E3C"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M262 380 C280 360 310 340 340 320 C360 308 380 300 400 290"
            stroke="#2E7D32"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M258 450 C240 430 215 415 188 405 C168 398 148 392 128 388"
            stroke="#2E7D32"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M258 500 C242 488 224 480 205 475"
            stroke="#388E3C"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M260 470 C274 460 288 454 305 450"
            stroke="#388E3C"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Leaves */}
          <path
            d="M258 180 C220 140 150 110 110 90 C80 76 60 74 48 80 C56 100 80 120 110 138 C148 160 200 170 240 175 C248 177 255 179 258 180Z"
            fill="#43A047"
            opacity="0.95"
          />
          <path d="M258 180 C240 160 210 145 185 138 C165 134 145 134 130 138" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M258 180 L150 115" stroke="#2E7D32" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          <path d="M220 158 L180 135" stroke="#2E7D32" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
          <path d="M195 148 L165 132" stroke="#2E7D32" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

          <path
            d="M260 200 C300 165 370 140 415 128 C445 120 468 122 476 132 C466 150 445 165 415 178 C375 194 320 196 278 197 C270 197 263 198 260 200Z"
            fill="#4CAF50"
          />
          <path d="M260 200 C290 185 325 178 355 178 C380 178 400 180 412 185" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.55" />
          <path d="M260 200 L390 140" stroke="#2E7D32" strokeWidth="1.5" opacity="0.45" strokeLinecap="round" />

          <path
            d="M365 304 C380 280 420 252 455 238 C475 230 492 230 498 238 C490 255 470 268 448 278 C420 290 390 296 370 300 Z"
            fill="#66BB6A"
          />
          <path d="M365 304 L460 248" stroke="#388E3C" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />

          <path
            d="M148 392 C128 374 95 355 68 346 C48 340 32 340 26 348 C34 364 55 376 80 384 C108 394 138 396 152 394 Z"
            fill="#4CAF50"
          />
          <path d="M148 392 L55 352" stroke="#2E7D32" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />

          <path
            d="M210 476 C198 464 178 455 160 452 C147 450 138 452 134 458 C140 468 155 474 170 477 C186 480 202 478 210 476Z"
            fill="#66BB6A"
            opacity="0.85"
          />
          <path
            d="M302 452 C314 442 332 436 348 434 C360 432 368 434 370 440 C364 450 352 455 338 458 C322 461 308 456 302 452Z"
            fill="#81C784"
            opacity="0.8"
          />

          <path
            d="M258 98 C254 78 248 58 252 40 C254 28 260 20 264 22 C268 30 268 46 264 62 C261 78 259 90 258 98Z"
            fill="#A5D6A7"
          />
          <path d="M258 95 C248 80 230 72 220 74 C224 82 234 88 246 92 Z" fill="#C8E6C9" opacity="0.9" />
          <path d="M258 92 C268 78 282 72 290 75 C286 83 276 88 264 91 Z" fill="#B2DFDB" opacity="0.85" />

          <path d="M200 155 C190 145 180 140 175 142" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" />
          <path d="M310 185 C320 178 328 176 330 178" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round" />

          <ellipse cx="260" cy="580" rx="170" ry="20" fill="rgba(255,255,255,.06)" />
        </svg>
      </div>

      {/* GRASS STRIP */}
      <div className={styles.grassStrip}>
        <svg className={styles.grassSvg} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,80 L0,55 Q10,20 20,50 Q30,75 40,45 Q50,15 60,48 Q70,72 80,42 Q90,12 100,46 Q110,70 120,40 Q130,10 140,44 Q150,68 160,38 Q170,8 180,42 Q190,66 200,36 Q210,6 220,40 Q230,64 240,34 Q250,4 260,38 Q270,62 280,32 Q290,2 300,36 Q310,60 320,30 Q330,0 340,34 Q350,58 360,28 Q370,0 380,34 Q390,60 400,30 Q410,0 420,34 Q430,58 440,28 Q450,0 460,34 Q470,60 480,30 Q490,2 500,36 Q510,62 520,32 Q530,4 540,38 Q550,64 560,34 Q570,6 580,40 Q590,66 600,36 Q610,8 620,42 Q630,68 640,38 Q650,10 660,44 Q670,70 680,40 Q690,12 700,46 Q710,72 720,42 Q730,14 740,48 Q750,74 760,44 Q770,16 780,50 Q790,76 800,46 Q810,18 820,52 Q830,78 840,48 Q850,20 860,54 Q870,80 880,50 Q890,22 900,56 Q910,80 920,50 Q930,20 940,54 Q950,80 960,50 Q970,20 980,54 Q990,78 1000,48 Q1010,18 1020,52 Q1030,76 1040,46 Q1050,16 1060,50 Q1070,74 1080,44 Q1090,14 1100,48 Q1110,72 1120,42 Q1130,12 1140,46 Q1150,70 1160,40 Q1170,10 1180,44 Q1190,68 1200,38 Q1210,8 1220,42 Q1230,66 1240,36 Q1250,6 1260,40 Q1270,64 1280,34 Q1290,4 1300,38 Q1310,62 1320,32 Q1330,2 1340,36 Q1350,60 1360,30 Q1370,0 1380,34 Q1390,58 1400,28 Q1410,0 1420,34 Q1430,60 1440,55 L1440,80 Z"
            fill="#4A7C45"
          />
          <path
            d="M0,80 L0,62 Q15,35 30,58 Q45,78 60,52 Q75,26 90,55 Q105,76 120,50 Q135,24 150,54 Q165,76 180,50 Q195,26 210,55 Q225,78 240,52 Q255,26 270,55 Q285,78 300,52 Q315,26 330,55 Q345,78 360,52 Q375,26 390,55 Q405,78 420,52 Q435,26 450,56 Q465,80 480,54 Q495,28 510,58 Q525,80 540,54 Q555,28 570,58 Q585,80 600,54 Q615,28 630,58 Q645,80 660,54 Q675,28 690,58 Q705,80 720,54 Q735,28 750,58 Q765,80 780,54 Q795,28 810,58 Q825,80 840,54 Q855,28 870,58 Q885,80 900,54 Q915,28 930,58 Q945,80 960,54 Q975,28 990,58 Q1005,80 1020,54 Q1035,28 1050,58 Q1065,80 1080,54 Q1095,28 1110,58 Q1125,80 1140,54 Q1155,28 1170,58 Q1185,80 1200,54 Q1215,28 1230,58 Q1245,80 1260,54 Q1275,28 1290,58 Q1305,80 1320,54 Q1335,28 1350,58 Q1365,80 1380,54 Q1395,30 1420,62 L1440,80 Z"
            fill="#5A9456"
          />
          <path
            d="M0,80 L0,68 Q20,50 40,65 Q60,78 80,62 Q100,46 120,62 Q140,76 160,60 Q180,44 200,61 Q220,76 240,62 Q260,48 280,64 Q300,78 320,64 Q340,50 360,66 Q380,80 400,66 Q420,52 440,68 Q460,80 480,66 Q500,52 520,68 Q540,80 560,66 Q580,52 600,68 Q620,80 640,66 Q660,52 680,68 Q700,80 720,66 Q740,52 760,68 Q780,80 800,66 Q820,52 840,68 Q860,80 880,66 Q900,52 920,68 Q940,80 960,66 Q980,52 1000,68 Q1020,80 1040,66 Q1060,52 1080,68 Q1100,80 1120,66 Q1140,52 1160,68 Q1180,80 1200,66 Q1220,52 1240,68 Q1260,80 1280,66 Q1300,52 1320,68 Q1340,80 1360,68 Q1390,55 1440,70 L1440,80 Z"
            fill="#6AAF66"
          />
        </svg>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {content.navLinks.map((link, i) => (
            <li key={link.label}>
              <Link href={link.href} className={i === 0 ? "active" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/dashboard" className={styles.navContact}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 15.92z" />
          </svg>
          {content.navContact}
        </Link>
      </nav>

      {/* HERO CONTENT */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          {content.eyebrow && <p className={styles.heroEyebrow}>{content.eyebrow}</p>}
          {content.title && <h1 className={styles.heroTitle}>{content.title}</h1>}
          {content.tagline && <p className={styles.heroTagline}>{content.tagline}</p>}
        </div>
      </div>
    </div>
  );
}
