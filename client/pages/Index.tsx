import { useState } from "react";
import { Link } from "react-router-dom";

function ICPPLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="39"
      height="33"
      viewBox="0 0 39 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76072 0.50611C9.12338 0.180397 9.59532 0 10.0848 0H32.8738C33.3792 0 33.8653 0.192358 34.2318 0.53735L37.9971 4.08231C38.8154 4.85268 38.8154 6.14524 37.9971 6.9156L12.0394 31.3359C11.2806 32.0496 10.0915 32.0518 9.33002 31.3409L5.46755 27.735C4.65104 26.9728 4.63986 25.6899 5.44297 24.9138L16.1735 14.5438C17.4397 13.3202 16.5655 11.1909 14.797 11.1909H1.97567C0.171967 11.1909 -0.684888 8.98933 0.651632 7.78898L8.76072 0.50611Z"
        fill="url(#logo_grad1)"
      />
      <path
        d="M28.2096 18.6377C28.2096 18.189 28.3655 17.7539 28.651 17.4056L29.1156 16.8389C29.3431 16.5615 29.6845 16.4004 30.0452 16.4004C30.3656 16.4004 30.6726 16.5276 30.8977 16.7536L37.3759 23.2581C37.7401 23.6238 37.9443 24.1169 37.9443 24.6307V30.268C37.9443 31.3471 37.0615 32.222 35.9726 32.222H30.1813C29.0924 32.222 28.2096 31.3471 28.2096 30.268V18.6377Z"
        fill="url(#logo_grad2)"
      />
      <defs>
        <linearGradient id="logo_grad1" x1="30.5848" y1="5.63741" x2="3.06417" y2="28.685" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1780FD" />
          <stop offset="1" stopColor="#002ABD" />
        </linearGradient>
        <linearGradient id="logo_grad2" x1="33.077" y1="16.4004" x2="31.6861" y2="31.6936" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01D2FD" />
          <stop offset="1" stopColor="#00AEF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Promesse", "Secteurs", "Loi", "Plateforme", "Tarifs"];

  return (
    <nav className="relative z-50 w-full px-6 lg:px-10 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ICPPLogo />
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[#F9FCFE] font-semibold text-xl leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ICPP
          </span>
          <span className="text-[#F9FCFE] font-semibold text-xs leading-none opacity-80">
            Conformité
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a key={link} href="#" className="text-white text-sm hover:text-[#9FF4FF] transition-colors">
            {link}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-white text-sm hover:text-[#9FF4FF] transition-colors whitespace-nowrap">
          Notre Histoire
        </a>
        <a
          href="#audit"
          className="btn-cta flex items-center justify-center px-7 h-[54px] rounded-full border-[3px] border-white/30 text-[#00162D] font-medium text-base whitespace-nowrap transition-opacity hover:opacity-90"
        >
          Audit gratuit
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 glass-card rounded-2xl mx-4 p-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-white text-base py-1 hover:text-[#9FF4FF]">
              {link}
            </a>
          ))}
          <a href="#" className="text-white text-base py-1 hover:text-[#9FF4FF]">
            Notre Histoire
          </a>
          <a
            href="#audit"
            className="btn-cta flex items-center justify-center px-7 h-12 rounded-full text-[#00162D] font-medium text-base text-center"
          >
            Audit gratuit
          </a>
        </div>
      )}
    </nav>
  );
}

function DashboardCard() {
  const circumference = 2 * Math.PI * 50;
  const progress = (96 / 100) * circumference;

  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      {/* Main dashboard white card */}
      <div
        className="relative rounded-[38px] border-[9px] border-white/8 bg-[#F9FCFE] overflow-hidden"
        style={{ boxShadow: "18px 88px 50px 0 rgba(0,14,34,0.25)" }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-7 pt-5 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F0F4F6] flex items-center justify-center flex-shrink-0">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path
                  d="M11.7536 1.54546H6.76181C5.37909 1.54751 4.05359 2.09769 3.07586 3.07542C2.09813 4.05315 1.54794 5.37865 1.5459 6.76137V11.7841C1.54794 13.1668 2.09813 14.4923 3.07586 15.47C4.05359 16.4478 5.37909 16.998 6.76181 17H11.7845C13.1673 16.998 14.4928 16.4478 15.4705 15.47C16.4482 14.4923 16.9984 13.1668 17.0004 11.7841V6.76137C16.9994 6.07409 16.8628 5.39376 16.5984 4.75938C16.334 4.12499 15.947 3.54903 15.4596 3.06448C14.9721 2.57994 14.3939 2.19634 13.758 1.93568C13.122 1.67502 12.4409 1.54241 11.7536 1.54546ZM6.51453 12.5414C6.51453 12.7053 6.4494 12.8626 6.33347 12.9785C6.21754 13.0944 6.0603 13.1596 5.89635 13.1596C5.7324 13.1596 5.57516 13.0944 5.45923 12.9785C5.3433 12.8626 5.27817 12.7053 5.27817 12.5414V8.60046C5.27817 8.43651 5.3433 8.27927 5.45923 8.16334C5.57516 8.04741 5.7324 7.98228 5.89635 7.98228C6.0603 7.98228 6.21754 8.04741 6.33347 8.16334C6.4494 8.27927 6.51453 8.43651 6.51453 8.60046V12.5414ZM9.95317 12.5414C9.95317 12.6226 9.93718 12.7029 9.90611 12.7779C9.87505 12.8529 9.82951 12.9211 9.77211 12.9785C9.71471 13.0359 9.64656 13.0814 9.57156 13.1125C9.49656 13.1436 9.41617 13.1596 9.33499 13.1596C9.25381 13.1596 9.17342 13.1436 9.09842 13.1125C9.02342 13.0814 8.95527 13.0359 8.89787 12.9785C8.84047 12.9211 8.79493 12.8529 8.76386 12.7779C8.7328 12.7029 8.71681 12.6226 8.71681 12.5414V6.01183C8.71681 5.84787 8.78194 5.69064 8.89787 5.5747C9.0138 5.45877 9.17104 5.39364 9.33499 5.39364C9.49894 5.39364 9.65618 5.45877 9.77211 5.5747C9.88804 5.69064 9.95317 5.84787 9.95317 6.01183V12.5414ZM13.2064 12.5414C13.2064 12.7053 13.1412 12.8626 13.0253 12.9785C12.9094 13.0944 12.7521 13.1596 12.5882 13.1596C12.4242 13.1596 12.267 13.0944 12.1511 12.9785C12.0351 12.8626 11.97 12.7053 11.97 12.5414V7.58819C11.97 7.42424 12.0351 7.267 12.1511 7.15107C12.267 7.03514 12.4242 6.97001 12.5882 6.97001C12.7521 6.97001 12.9094 7.03514 13.0253 7.15107C13.1412 7.267 13.2064 7.42424 13.2064 7.58819V12.5414Z"
                  fill="url(#dash_grad)"
                />
                <defs>
                  <linearGradient id="dash_grad" x1="13.7879" y1="4.24927" x2="1.19676" y2="13.0491" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1780FD" />
                    <stop offset="1" stopColor="#002ABD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-[#001947] font-medium text-sm">Tableau de bord</span>
          </div>
          <div className="flex items-center gap-2 pr-1">
            <div className="w-2 h-2 rounded-full bg-[#0BE365]" />
            <span className="text-[#0BE365] text-xs font-medium uppercase tracking-wide">En ligne</span>
          </div>
        </div>

        {/* Score section */}
        <div className="flex items-center gap-6 px-7 pt-4 pb-3">
          {/* Circular gauge */}
          <div className="relative w-28 h-28 flex-shrink-0">
            <svg width="112" height="112" viewBox="0 0 112 112">
              <circle cx="56" cy="56" r="50" fill="none" stroke="#E8EDF5" strokeWidth="8" />
              <circle
                cx="56"
                cy="56"
                r="50"
                fill="none"
                stroke="url(#gauge_grad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(96 / 100) * circumference} ${circumference}`}
                strokeDashoffset={circumference * 0.25}
                transform="rotate(-90 56 56)"
              />
              <defs>
                <linearGradient id="gauge_grad" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#1780FD" />
                  <stop offset="1" stopColor="#002ABD" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Score text */}
          <div className="flex flex-col gap-2">
            <span className="text-[#001947] text-xs font-medium uppercase opacity-70 tracking-wide">
              Score de conformité
            </span>
            <div className="flex items-baseline gap-1">
              <span
                className="text-[#001947] font-bold leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "48px" }}
              >
                96
              </span>
              <span className="text-[#001947] text-sm font-semibold">/100</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6669 4.66V7.33333C14.6669 7.46517 14.6278 7.59403 14.5545 7.70364C14.4813 7.81325 14.3772 7.89867 14.2554 7.94912C14.1336 7.99957 13.9996 8.01277 13.8702 7.98706C13.7409 7.96134 13.6222 7.89787 13.5289 7.80467L12.6669 6.94267L9.13827 10.4713C9.01325 10.5963 8.84371 10.6665 8.66694 10.6665C8.49016 10.6665 8.32062 10.5963 8.19561 10.4713L6.00027 8.276L2.4716 11.8047C2.34587 11.9261 2.17747 11.9933 2.00267 11.9918C1.82787 11.9903 1.66066 11.9202 1.53706 11.7965C1.41345 11.6729 1.34334 11.5057 1.34182 11.3309C1.3403 11.1561 1.4075 10.9877 1.52894 10.862L5.52894 6.862C5.65396 6.73702 5.8235 6.66681 6.00027 6.66681C6.17705 6.66681 6.34659 6.73702 6.4716 6.862L8.66694 9.05733L11.7243 6L10.8623 5.138C10.7691 5.04477 10.7056 4.92599 10.6799 4.79669C10.6542 4.66739 10.6674 4.53336 10.7178 4.41156C10.7683 4.28976 10.8537 4.18565 10.9633 4.1124C11.0729 4.03914 11.2018 4.00003 11.3336 4H14.0003L14.0323 4.00067C14.2026 4.00819 14.3634 4.08092 14.4816 4.20378C14.5997 4.32663 14.6661 4.49022 14.6669 4.66067"
                  fill="#0BE365"
                />
              </svg>
              <span className="text-[#001947] text-xs font-medium uppercase opacity-45">
                +12 ce mois
              </span>
            </div>
          </div>
        </div>

        {/* List items */}
        <div className="flex flex-col gap-1 px-7 pb-4 opacity-80">
          {[
            { icon: "doc", label: "DUERP 2025 transmis au SPST" },
            { icon: "copy", label: "Plan d'action — 4/4 actions" },
            { icon: "seal", label: "RPS 2025 intégrés" },
            { icon: "bell", label: "Veille : 2 nouvelles à valider" },
          ].map(({ label }, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5 bg-[#F9FCFE]">
              <div className="w-4 h-4 flex-shrink-0 text-[#1E1E1E]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#1E1E1E" strokeWidth="1.2" />
                  <path d="M5.5 8l2 2 3-3" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[#000] text-xs">{label}</span>
            </div>
          ))}
        </div>

        {/* Garantie amende bar */}
        <div
          className="mx-7 mb-5 flex items-center justify-between px-4 py-2 rounded-3xl"
          style={{ background: "linear-gradient(92deg, #001947 -16.01%, #004F81 91.35%)" }}
        >
          <span className="text-[#F9FCFE] text-[10px] font-medium uppercase tracking-wider">
            Garantie amende
          </span>
          <span className="bg-[#0BE365] text-[#F9FCFE] text-[10px] font-medium uppercase px-3 py-1.5 rounded-full">
            Active
          </span>
        </div>
      </div>

      {/* Expert ICPP floating card */}
      <div className="glass-card absolute -bottom-4 -left-4 sm:left-0 flex items-center gap-3 px-4 py-3 rounded-2xl w-auto max-w-[200px]">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(235deg, #1780FD 19.43%, #002ABD 90.81%)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88937 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9787 1.5 12 1.5C11.0213 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88937 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2862 1.5 11.0213 1.5 12C1.5 12.9787 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2862 21.7959 11.0213 22.5 12 22.5C12.9787 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9787 22.5 12C22.5 11.0213 21.7959 10.2872 21.1744 9.63937Z"
              fill="#F9FCFE"
            />
            <path d="M16.2806 9.21937L11.0306 14.4694L8.78063 12.2194" stroke="#001947" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#F9FCFE] text-sm font-semibold leading-none">Expert ICPP</span>
          <span className="text-[#F9FCFE] text-xs opacity-80">Tout est à jour</span>
        </div>
      </div>

      {/* ICPP Logo floating card */}
      <div className="glass-card absolute -top-4 -right-4 sm:right-0 w-[76px] h-[76px] flex items-center justify-center rounded-3xl">
        <ICPPLogo className="w-10 h-9" />
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <g clipPath="url(#clip_star)">
        <path
          d="M11.083 0.583252L10.348 2.18742L8.74967 2.91659L10.348 3.65159L11.083 5.24992L11.8122 3.65159L13.4163 2.91659L11.8122 2.18742M5.24967 2.33325L3.79134 5.54159L0.583008 6.99992L3.79134 8.45825L5.24967 11.6666L6.70801 8.45825L9.91634 6.99992L6.70801 5.54159M11.083 8.74992L10.348 10.3483L8.74967 11.0833L10.348 11.8124L11.083 13.4166L11.8122 11.8124L13.4163 11.0833L11.8122 10.3483"
          fill="url(#star_grad)"
        />
      </g>
      <defs>
        <linearGradient id="star_grad" x1="11.5811" y1="7.1155" x2="10.9115" y2="13.1839" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01D2FD" />
          <stop offset="1" stopColor="#00AEF7" />
        </linearGradient>
        <clipPath id="clip_star">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Index() {
  return (
    <>
    <div className="min-h-screen bg-[#001947] overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute opacity-96"
          style={{ filter: "blur(202px)", left: "30%", top: "-20%" }}
          width="700"
          height="600"
          viewBox="0 0 1162 1034"
          fill="none"
        >
          <path
            d="M645.865 955.512C781.437 912.972 875.963 836.798 901.008 734.228C955.658 510.41 658.781 245.662 237.914 142.898C213.081 136.834 188.37 131.472 163.844 126.791C295.089 63.2472 472.242 53.7685 647.529 113.768C944.106 215.283 1123.03 477.244 1047.17 698.874C995.061 851.108 836.295 944.716 645.865 955.512Z"
            fill="#00C8FF"
          />
        </svg>
        <svg
          className="absolute opacity-85"
          style={{ filter: "blur(163px)", left: "-15%", top: "8%" }}
          width="700"
          height="650"
          viewBox="0 0 1403 1339"
          fill="none"
        >
          <path
            d="M179.867 845.116C113.328 676.129 178.075 480.214 329.58 329.361C391.04 268.165 485.507 349.498 491.97 435.988C495.675 485.569 508.513 533.895 531.302 579.274C650.93 817.479 999.478 884.243 1309.81 728.395C1334.22 716.136 1360.81 740.457 1346.16 763.513C1267.65 887.107 1136.62 995.799 970.677 1061.14C633.22 1194.01 279.162 1097.3 179.867 845.116Z"
            fill="#1456FF"
          />
        </svg>
        <svg
          className="absolute opacity-85"
          style={{ filter: "blur(163px)", right: "-15%", top: "8%" }}
          width="700"
          height="650"
          viewBox="0 0 1403 1339"
          fill="none"
        >
          <path
            d="M179.867 845.116C113.328 676.128 178.075 480.214 329.58 329.36C391.04 268.165 485.506 349.498 491.969 435.987C495.674 485.569 508.512 533.896 531.301 579.274C650.929 817.479 999.478 884.243 1309.81 728.395C1334.22 716.136 1360.81 740.457 1346.16 763.512C1267.65 887.106 1136.62 995.798 970.675 1061.14C633.219 1194.01 279.162 1097.3 179.867 845.116Z"
            fill="#1456FF"
          />
        </svg>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-10 lg:gap-12 max-w-2xl">
            {/* Badge */}
            <div className="glass-badge inline-flex items-center gap-3 px-4 py-3 rounded-3xl w-fit">
              <div className="relative w-2.5 h-2.5">
                <div
                  className="absolute inset-0 rounded-sm bg-[#00AEF7]"
                  style={{ filter: "blur(4.9px)" }}
                />
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{ background: "linear-gradient(186deg, #01D2FD 47.26%, #00AEF7 90.37%)" }}
                />
              </div>
              <span className="text-white text-sm font-medium">
                Institut de Conformité — France entière
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="text-[#F9FCFE] font-bold leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                Dirigeant(e) de TPE, vos
                <br />
                obligations légales,
                <br />
                <span className="gradient-text-cyan">gérées par des experts.</span>
              </h1>
              <p className="mt-6 text-[#F9FCFE] text-base lg:text-lg opacity-80 max-w-xl leading-relaxed">
                DUERP, plan d'action PAPRIPACT, formations, veille 24/7 — nos experts s'occupent
                de tout. Si malgré tout vous êtes contrôlé,{" "}
                <strong>c'est nous qui payons l'amende.</strong>
              </p>
            </div>

            {/* Mini-audit card */}
            <div
              id="audit"
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: "linear-gradient(145deg, rgba(0,25,71,0.95) 0%, rgba(0,42,120,0.85) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <StarIcon />
                <span className="gradient-text-blue text-sm font-medium">
                  Commencez ici · 2 minutes
                </span>
              </div>
              <h2 className="text-[#F9FCFE] text-xl lg:text-2xl font-bold mb-2">
                Mini-audit conformité gratuit
              </h2>
              <p className="text-[#F9FCFE] text-sm lg:text-base opacity-80 mb-6">
                5 questions pour estimer votre niveau de risque et recevoir un diagnostic personnalisé.
              </p>
              <div className="btn-cta-wrapper rounded-full p-2">
                <button className="btn-cta w-full h-14 rounded-full border-[3px] border-white/30 text-[#00162D] font-semibold text-base flex items-center justify-center gap-3 hover:opacity-95 transition-opacity">
                  Démarrer le mini-audit
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.57895 20L7 18.5L13.8421 12L7 5.5L8.57895 4L17 12L8.57895 20Z"
                      fill="url(#arrow_grad)"
                    />
                    <defs>
                      <linearGradient id="arrow_grad" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9FF4FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
              <p className="text-[#F9FCFE] text-sm opacity-70 mt-3 text-center">
                Sans engagement · Résultat immédiat
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-badge flex items-center gap-3 px-4 py-2 rounded-3xl">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2.25 7.81275C2.25 5.41425 2.25 4.215 2.5335 3.8115C2.81625 3.40875 3.9435 3.0225 6.19875 2.25075L6.6285 2.10375C7.80375 1.701 8.391 1.5 9 1.5C9.609 1.5 10.1962 1.701 11.3715 2.10375L11.8012 2.25075C14.0565 3.0225 15.1837 3.40875 15.4665 3.8115C15.75 4.215 15.75 5.415 15.75 7.81275V8.99325C15.75 13.2218 12.5707 15.2745 10.5757 16.1453C10.035 16.3815 9.765 16.5 9 16.5C8.235 16.5 7.965 16.3815 7.42425 16.1453C5.42925 15.2738 2.25 13.2225 2.25 8.99325V7.81275Z"
                    stroke="#00AEF7"
                    strokeWidth="1.125"
                  />
                  <path
                    d="M7.125 9.3L8.19675 10.5L10.875 7.5"
                    stroke="#00AEF7"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white text-sm font-medium">Garantie amende — unique en France</span>
              </div>
              <div className="glass-badge flex items-center gap-3 px-4 py-2 rounded-3xl">
                <span className="text-white text-sm font-medium">Visio (Hexagone) · Sur site (La Réunion)</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="w-full max-w-[440px] lg:max-w-[480px]">
              <DashboardCard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 border-t border-white/10 py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {[
              { value: "80%", label: "des TPE non conformes" },
              { value: "1 500 €", label: "amende vs 39€/mois" },
              { value: "40 ans", label: "conservation obligatoire" },
              { value: "24/7", label: "veille & suivi experts" },
            ].map(({ value, label }) => (
              <div key={value} className="flex flex-col gap-3">
                <span
                  className="text-white font-bold leading-tight"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {value}
                </span>
                <span className="text-white text-sm lg:text-base opacity-80 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <StatsBentoGrid />
    <PromesseSection />
    </>
  );
}

function StatsBentoGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <div className="bento-grid">

          {/* 1 — 80% stat card */}
          <div className="bento-cell bento-stat80 rounded-2xl p-7 lg:p-8 bg-[#DDF1FA] flex flex-col justify-between">
            <div>
              <div className="text-[#001947] font-bold leading-none mb-4 font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>80%</div>
              <p className="text-[#001947] font-bold text-base lg:text-lg leading-snug">des TPE non conformes à leurs obligations légales</p>
            </div>
            <p className="text-[#001947]/50 text-sm mt-5">INRS 2024</p>
          </div>

          {/* 2 — Tall photo — col 2, rows 1–2 */}
          <div className="bento-cell bento-photo-tall rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=800&fit=crop&q=80"
              alt="Formation ICPP en entreprise"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3 — 39 € dark card */}
          <div className="bento-cell bento-stat39 rounded-2xl p-7 lg:p-8 bg-[#001947] flex flex-col justify-between">
            <div>
              <div className="font-bold leading-none mb-4 gradient-text-cyan font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>39 €</div>
              <p className="text-white font-bold text-base lg:text-lg leading-snug">par mois chez ICPP vs 2 000 à 4 000 € pour un cabinet spécialisé</p>
            </div>
            <p className="text-white/50 text-sm mt-5">ICPP 2026</p>
          </div>

          {/* 4 — < 3% card */}
          <div className="bento-cell bento-stat3 rounded-2xl p-7 lg:p-8 bg-[#DDF1FA] flex flex-col justify-between">
            <div>
              <div className="font-bold leading-none mb-4 gradient-text-cyan font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)'}}>{"< 3%"}</div>
              <p className="text-[#001947] font-bold text-base lg:text-lg leading-snug">des TPE transmettent leur DUERP au SPST comme la loi l'impose</p>
            </div>
            <p className="text-[#001947]/50 text-sm mt-5">Décret 18/03/2022</p>
          </div>

          {/* 5 — Office photo — col 1, rows 2–3 */}
          <div className="bento-cell bento-photo-office rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop&q=80"
              alt="Réunion d'équipe en entreprise"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 6 — Two people photo — col 3, row 2 */}
          <div className="bento-cell bento-photo-duo rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&q=80"
              alt="Consultation expert ICPP"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 7 — Computer photo — col 4, row 2 */}
          <div className="bento-cell bento-photo-computer rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&q=80"
              alt="Plateforme numérique ICPP"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 8 — 1 500 € card — col 2, row 3 */}
          <div className="bento-cell bento-stat1500 rounded-2xl p-7 lg:p-8 bg-[#DDF1FA] flex flex-col justify-between">
            <div>
              <div className="font-bold leading-none mb-4 gradient-text-cyan font-display" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>1 500 €</div>
              <p className="text-[#001947] font-bold text-sm lg:text-base leading-snug">d'amende par salarié sans DUERP 3 000 € en récidive</p>
            </div>
            <p className="text-[#001947]/50 text-sm mt-5">Art. R4741-1 Code du travail</p>
          </div>

          {/* 9 — 3,7M card — col 3, row 3 */}
          <div className="bento-cell bento-stat37 rounded-2xl p-7 lg:p-8 bg-[#DDF1FA] flex flex-col justify-between">
            <div>
              <div className="text-[#001947] font-bold leading-none mb-4 font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>3,7M</div>
              <p className="text-[#001947] font-bold text-base lg:text-lg leading-snug">de TPE françaises concernées 0 solution tech adaptée avant ICPP</p>
            </div>
            <p className="text-[#001947]/50 text-sm mt-5">INSEE 2024</p>
          </div>

          {/* 10 — 40 ans card — col 4, row 3 */}
          <div className="bento-cell bento-stat40 rounded-2xl p-7 lg:p-8 bg-[#C2EAFE] flex flex-col justify-between">
            <div>
              <div className="font-bold leading-none mb-4 gradient-text-cyan font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>40 ans</div>
              <p className="text-[#001947] font-bold text-base lg:text-lg leading-snug">de conservation numérique obligatoire votre classeur papier ne suffit plus</p>
            </div>
            <p className="text-[#001947]/50 text-sm mt-5">Loi 2021-1018</p>
          </div>

        </div>
      </div>
    </section>
  );
}

function PromesseSection() {
  const withoutICPP = [
    "Vous ne savez pas si vos documents sont conformes",
    "Vous ignorez les nouvelles obligations légales 2025",
    "Votre DUERP est sur papier ou introuvable",
    "Aucun plan d'action formalisé ni suivi",
    "Vous perdez des heures sur de la paperasse",
    "Vous espérez ne pas être contrôlé",
    "En cas d'accident, vous êtes exposé personnellement",
  ];

  const withICPP = [
    "Un expert vous contacte, rien à préparer",
    "Votre DUERP numérique est rédigé, hébergé, à jour",
    "Chaque changement est géré en un clic",
    "Alertes automatiques si une action est requise",
    "En cas de contrôle, tout est en ordre",
    "Si une amende tombe, c'est ICPP qui paie",
  ];

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden relative">
      {/* Decorative blue shape — right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <svg width="180" height="420" viewBox="0 0 180 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M180 0H60C26.863 0 0 26.863 0 60v300c0 33.137 26.863 60 60 60h120V0z"
            fill="url(#promo_grad)"
          />
          <defs>
            <linearGradient id="promo_grad" x1="0" y1="0" x2="180" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1780FD" />
              <stop offset="1" stopColor="#002ABD" />
            </linearGradient>
          </defs>
        </svg>
        {/* Large ICPP logo mark */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-30">
          <svg width="100" height="85" viewBox="0 0 39 33" fill="none">
            <path d="M8.76072 0.50611C9.12338 0.180397 9.59532 0 10.0848 0H32.8738C33.3792 0 33.8653 0.192358 34.2318 0.53735L37.9971 4.08231C38.8154 4.85268 38.8154 6.14524 37.9971 6.9156L12.0394 31.3359C11.2806 32.0496 10.0915 32.0518 9.33002 31.3409L5.46755 27.735C4.65104 26.9728 4.63986 25.6899 5.44297 24.9138L16.1735 14.5438C17.4397 13.3202 16.5655 11.1909 14.797 11.1909H1.97567C0.171967 11.1909 -0.684888 8.98933 0.651632 7.78898L8.76072 0.50611Z" fill="white"/>
            <path d="M28.2096 18.6377C28.2096 18.189 28.3655 17.7539 28.651 17.4056L29.1156 16.8389C29.3431 16.5615 29.6845 16.4004 30.0452 16.4004C30.3656 16.4004 30.6726 16.5276 30.8977 16.7536L37.3759 23.2581C37.7401 23.6238 37.9443 24.1169 37.9443 24.6307V30.268C37.9443 31.3471 37.0615 32.222 35.9726 32.222H30.1813C29.0924 32.222 28.2096 31.3471 28.2096 30.268V18.6377Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-5 py-2 rounded-full bg-[#EDF4FF] text-[#3AADFF] text-sm font-medium border border-[#CCDFFF]">
            Notre promesse
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-center font-bold text-[#001947] leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Vous n'avez{" "}
          <span className="gradient-text-cyan">rien à faire.</span>
          <br />
          Vraiment.
        </h2>

        {/* Subtitle */}
        <p className="text-center text-[#001947]/70 text-base lg:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          DUERP, plan d'action PAPRIPACT, formations, veille 24/7 — nos experts s'occupent
          de tout. Si malgré tout vous êtes contrôlé, c'est nous qui payons l'amende.
        </p>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {/* Sans ICPP */}
          <div className="rounded-2xl bg-[#F4F6F9] p-7 lg:p-9 flex flex-col">
            <p className="text-[#001947]/50 text-sm font-medium text-center mb-6">Sans ICPP</p>
            <ul className="flex flex-col gap-4">
              {withoutICPP.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Red X circle */}
                  <span className="flex-shrink-0 mt-0.5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#FF4D4D" />
                      <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-[#001947] text-sm lg:text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec ICPP */}
          <div className="rounded-2xl bg-white border border-[#E8EFF8] p-7 lg:p-9 flex flex-col shadow-sm">
            {/* Logo + title */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(235deg, #1780FD 19.43%, #002ABD 90.81%)" }}
              >
                <svg width="26" height="22" viewBox="0 0 39 33" fill="none">
                  <path d="M8.76072 0.50611C9.12338 0.180397 9.59532 0 10.0848 0H32.8738C33.3792 0 33.8653 0.192358 34.2318 0.53735L37.9971 4.08231C38.8154 4.85268 38.8154 6.14524 37.9971 6.9156L12.0394 31.3359C11.2806 32.0496 10.0915 32.0518 9.33002 31.3409L5.46755 27.735C4.65104 26.9728 4.63986 25.6899 5.44297 24.9138L16.1735 14.5438C17.4397 13.3202 16.5655 11.1909 14.797 11.1909H1.97567C0.171967 11.1909 -0.684888 8.98933 0.651632 7.78898L8.76072 0.50611Z" fill="white"/>
                  <path d="M28.2096 18.6377C28.2096 18.189 28.3655 17.7539 28.651 17.4056L29.1156 16.8389C29.3431 16.5615 29.6845 16.4004 30.0452 16.4004C30.3656 16.4004 30.6726 16.5276 30.8977 16.7536L37.3759 23.2581C37.7401 23.6238 37.9443 24.1169 37.9443 24.6307V30.268C37.9443 31.3471 37.0615 32.222 35.9726 32.222H30.1813C29.0924 32.222 28.2096 31.3471 28.2096 30.268V18.6377Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[#001947] font-semibold text-base">Avec ICPP</span>
            </div>

            <ul className="flex flex-col gap-4 mb-8">
              {withICPP.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Blue checkmark circle */}
                  <span className="flex-shrink-0 mt-0.5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#EDF4FF" />
                      <path d="M6.5 11.5l3 3 6-6" stroke="#1780FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#001947] text-sm lg:text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div className="btn-cta-wrapper rounded-full p-2 mt-auto">
              <button className="btn-cta w-full h-14 rounded-full border-[3px] border-white/30 text-[#00162D] font-semibold text-base flex items-center justify-center gap-3 hover:opacity-95 transition-opacity">
                Démarrer le mini-audit
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8.57895 20L7 18.5L13.8421 12L7 5.5L8.57895 4L17 12L8.57895 20Z" fill="url(#arrow_promo)" />
                  <defs>
                    <linearGradient id="arrow_promo" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#9FF4FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
