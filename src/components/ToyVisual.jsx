import React from 'react';

export default function ToyVisual({ type, name, className = '', isHero = false }) {
  // Rich vector rendering with artisanal craftsmanship aesthetics
  const renderGraphic = () => {
    switch (type) {
      case 'train':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Background subtle warmth */}
            <circle cx="120" cy="90" r="70" fill="#FDE68A" opacity="0.3" />
            {/* Track Rail */}
            <line x1="15" y1="145" x2="225" y2="145" stroke="#78350F" strokeWidth="3" strokeDasharray="6 4" />
            <line x1="15" y1="148" x2="225" y2="148" stroke="#92400E" strokeWidth="2" />
            
            {/* Locomotive Body (Hardwood Beech) */}
            <rect x="30" y="70" width="85" height="55" rx="6" fill="#D97706" />
            {/* Cab Roof */}
            <rect x="25" y="64" width="95" height="10" rx="3" fill="#B45309" />
            {/* Engine Nose */}
            <rect x="85" y="82" width="30" height="43" rx="4" fill="#B45309" />
            {/* Smokestack with brass ring */}
            <rect x="96" y="55" width="10" height="27" rx="2" fill="#78350F" />
            <ellipse cx="101" cy="55" rx="7" ry="2.5" fill="#F59E0B" />
            {/* Steam puffs */}
            <circle cx="102" cy="42" r="5" fill="#E2E8F0" opacity="0.8" />
            <circle cx="112" cy="30" r="7" fill="#E2E8F0" opacity="0.6" />
            <circle cx="126" cy="18" r="9" fill="#E2E8F0" opacity="0.4" />
            {/* Cab Window */}
            <rect x="38" y="78" width="22" height="20" rx="3" fill="#FEF3C7" stroke="#92400E" strokeWidth="2" />
            
            {/* Carriage 1 */}
            <rect x="135" y="85" width="75" height="40" rx="4" fill="#F59E0B" />
            {/* Timber logs in carriage */}
            <rect x="140" y="73" width="65" height="12" rx="4" fill="#92400E" />
            <circle cx="145" cy="79" r="4" fill="#78350F" />
            <circle cx="199" cy="79" r="4" fill="#78350F" />
            
            {/* Magnetic Coupler */}
            <rect x="115" y="105" width="20" height="6" rx="2" fill="#475569" />
            <circle cx="125" cy="108" r="3" fill="#94A3B8" />

            {/* Brass Rivets & Accents */}
            <circle cx="34" cy="74" r="2" fill="#FDE68A" />
            <circle cx="110" cy="74" r="2" fill="#FDE68A" />

            {/* Wheels with brass centers */}
            <circle cx="48" cy="130" r="14" fill="#451A03" />
            <circle cx="48" cy="130" r="6" fill="#FBBF24" />
            <circle cx="92" cy="130" r="14" fill="#451A03" />
            <circle cx="92" cy="130" r="6" fill="#FBBF24" />
            
            <circle cx="152" cy="130" r="12" fill="#451A03" />
            <circle cx="152" cy="130" r="5" fill="#FBBF24" />
            <circle cx="192" cy="130" r="12" fill="#451A03" />
            <circle cx="192" cy="130" r="5" fill="#FBBF24" />
          </svg>
        );

      case 'rainbow':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            <g transform="translate(120, 140)">
              {/* Outer Arch Red/Crimson */}
              <path d="M -90 0 A 90 90 0 0 1 90 0 L 76 0 A 76 76 0 0 0 -76 0 Z" fill="#DC2626" />
              {/* Orange Arch */}
              <path d="M -76 0 A 76 76 0 0 1 76 0 L 62 0 A 62 62 0 0 0 -62 0 Z" fill="#EA580C" />
              {/* Amber/Yellow Arch */}
              <path d="M -62 0 A 62 62 0 0 1 62 0 L 48 0 A 48 48 0 0 0 -48 0 Z" fill="#F59E0B" />
              {/* Green Arch */}
              <path d="M -48 0 A 48 48 0 0 1 48 0 L 34 0 A 34 34 0 0 0 -34 0 Z" fill="#16A34A" />
              {/* Teal/Turquoise Arch */}
              <path d="M -34 0 A 34 34 0 0 1 34 0 L 22 0 A 22 22 0 0 0 -22 0 Z" fill="#0D9488" />
              {/* Cobalt Blue Arch */}
              <path d="M -22 0 A 22 22 0 0 1 22 0 L 10 0 A 10 10 0 0 0 -10 0 Z" fill="#2563EB" />
              {/* Violet Core */}
              <path d="M -10 0 A 10 10 0 0 1 10 0 Z" fill="#7C3AED" />
              {/* Base plinth line */}
              <line x1="-100" y1="1" x2="100" y2="1" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'telescope':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Stars background */}
            <circle cx="45" cy="40" r="1.5" fill="#3B82F6" />
            <circle cx="70" cy="25" r="2" fill="#F59E0B" />
            <circle cx="195" cy="35" r="1.5" fill="#3B82F6" />
            <circle cx="170" cy="55" r="2" fill="#E2E8F0" />
            <circle cx="210" cy="70" r="2" fill="#F59E0B" />

            {/* Tripod legs (Walnut) */}
            <line x1="120" y1="105" x2="60" y2="165" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="105" x2="120" y2="168" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="105" x2="180" y2="165" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
            {/* Tripod Joint (Brass) */}
            <circle cx="120" cy="105" r="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="117" y="95" width="6" height="10" fill="#D97706" />

            {/* Optical Barrel tilted 25 deg */}
            <g transform="rotate(-25 120 95)">
              {/* Main Brass Barrel */}
              <rect x="50" y="85" width="130" height="24" rx="4" fill="#D97706" />
              {/* Outer Objective Hood */}
              <rect x="160" y="82" width="28" height="30" rx="3" fill="#B45309" />
              <ellipse cx="188" cy="97" rx="3" ry="15" fill="#60A5FA" />
              {/* Eyepiece mount & draw tube */}
              <rect x="25" y="89" width="30" height="16" fill="#F59E0B" />
              <rect x="10" y="91" width="18" height="12" rx="2" fill="#78350F" />
              <ellipse cx="10" cy="97" rx="2" ry="6" fill="#93C5FD" />
              {/* Brass Bands */}
              <rect x="90" y="84" width="6" height="26" fill="#FDE68A" />
              <rect x="135" y="84" width="6" height="26" fill="#FDE68A" />
            </g>
          </svg>
        );

      case 'bear':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Warm soft glow */}
            <circle cx="120" cy="95" r="65" fill="#FEF3C7" opacity="0.4" />
            {/* Ears */}
            <circle cx="85" cy="55" r="16" fill="#B45309" />
            <circle cx="85" cy="55" r="8" fill="#FDE68A" />
            <circle cx="155" cy="55" r="16" fill="#B45309" />
            <circle cx="155" cy="55" r="8" fill="#FDE68A" />
            
            {/* Head */}
            <circle cx="120" cy="80" r="40" fill="#D97706" />
            {/* Muzzle */}
            <ellipse cx="120" cy="92" rx="18" ry="14" fill="#FEF3C7" />
            {/* Nose & Mouth (embroidered style) */}
            <polygon points="120,84 114,92 126,92" fill="#451A03" />
            <line x1="120" y1="92" x2="120" y2="99" stroke="#451A03" strokeWidth="2" />
            <path d="M 112 98 Q 120 104 128 98" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <circle cx="106" cy="74" r="3.5" fill="#451A03" />
            <circle cx="108" cy="72.5" r="1" fill="#FFFFFF" />
            <circle cx="134" cy="74" r="3.5" fill="#451A03" />
            <circle cx="136" cy="72.5" r="1" fill="#FFFFFF" />

            {/* Scarf */}
            <path d="M 95 110 C 105 118, 135 118, 145 110 L 140 120 C 130 126, 110 126, 100 120 Z" fill="#DC2626" />
            <rect x="130" y="115" width="12" height="24" rx="2" fill="#B91C1C" transform="rotate(10 130 115)" />

            {/* Body */}
            <path d="M 85 118 C 70 140, 75 160, 100 165 L 140 165 C 165 160, 170 140, 155 118 Z" fill="#D97706" />
            {/* Paws */}
            <ellipse cx="80" cy="135" rx="12" ry="18" fill="#B45309" transform="rotate(20 80 135)" />
            <ellipse cx="160" cy="135" rx="12" ry="18" fill="#B45309" transform="rotate(-20 160 135)" />
          </svg>
        );

      case 'solar_car':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Sun icon in sky */}
            <circle cx="200" cy="40" r="12" fill="#FBBF24" />
            <path d="M 200 22 L 200 16 M 200 58 L 200 64 M 182 40 L 176 40 M 218 40 L 224 40" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

            {/* Bamboo Chassis */}
            <rect x="50" y="98" width="125" height="18" rx="6" fill="#059669" />
            <rect x="65" y="85" width="95" height="15" rx="3" fill="#10B981" />
            
            {/* Solar Panel with grid lines */}
            <rect x="75" y="60" width="75" height="24" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="93" y1="60" x2="93" y2="84" stroke="#38BDF8" strokeWidth="1" />
            <line x1="112" y1="60" x2="112" y2="84" stroke="#38BDF8" strokeWidth="1" />
            <line x1="131" y1="60" x2="131" y2="84" stroke="#38BDF8" strokeWidth="1" />
            <line x1="75" y1="72" x2="150" y2="72" stroke="#38BDF8" strokeWidth="1" />

            {/* Front Bumper / Sensor antenna */}
            <path d="M 175 105 L 195 90" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
            <circle cx="195" cy="90" r="4" fill="#34D399" />

            {/* Big Knobby Rover Wheels */}
            <circle cx="72" cy="125" r="18" fill="#1E293B" />
            <circle cx="72" cy="125" r="12" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="72" cy="125" r="5" fill="#34D399" />

            <circle cx="152" cy="125" r="18" fill="#1E293B" />
            <circle cx="152" cy="125" r="12" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="152" cy="125" r="5" fill="#34D399" />
          </svg>
        );

      case 'paintbox':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Open Cedar Palette Tray */}
            <rect x="40" y="55" width="155" height="95" rx="8" fill="#B45309" stroke="#78350F" strokeWidth="2" />
            <rect x="46" y="61" width="143" height="83" rx="5" fill="#FEF3C7" />

            {/* 8 Botanical Watercolor Pans (2 rows of 4) */}
            <circle cx="70" cy="78" r="9" fill="#E11D48" />
            <circle cx="102" cy="78" r="9" fill="#EA580C" />
            <circle cx="134" cy="78" r="9" fill="#FACC15" />
            <circle cx="166" cy="78" r="9" fill="#16A34A" />

            <circle cx="70" cy="108" r="9" fill="#0D9488" />
            <circle cx="102" cy="108" r="9" fill="#2563EB" />
            <circle cx="134" cy="108" r="9" fill="#7C3AED" />
            <circle cx="166" cy="108" r="9" fill="#854D0E" />

            {/* Handcrafted Cedar Brush resting across box */}
            <g transform="rotate(-18 120 130)">
              <rect x="30" y="126" width="160" height="5" rx="2" fill="#78350F" />
              <rect x="175" y="125.5" width="15" height="6" fill="#D97706" />
              <path d="M 190 126 C 196 128, 202 128.5, 208 128.5 C 202 129, 196 131, 190 131 Z" fill="#0D9488" />
            </g>
          </svg>
        );

      case 'robot':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Antenna with brass orb */}
            <line x1="120" y1="35" x2="120" y2="52" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
            <circle cx="120" cy="32" r="5" fill="#F59E0B" />

            {/* Head */}
            <rect x="92" y="52" width="56" height="40" rx="8" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5" />
            {/* Eyes */}
            <circle cx="108" cy="68" r="6" fill="#7C3AED" />
            <circle cx="110" cy="66" r="2" fill="#FFFFFF" />
            <circle cx="132" cy="68" r="6" fill="#7C3AED" />
            <circle cx="134" cy="66" r="2" fill="#FFFFFF" />
            {/* Friendly smile */}
            <rect x="110" y="80" width="20" height="4" rx="2" fill="#A78BFA" />

            {/* Neck */}
            <rect x="114" y="92" width="12" height="6" fill="#7C3AED" />

            {/* Body */}
            <rect x="80" y="98" width="80" height="54" rx="8" fill="#7C3AED" />
            {/* Open chest with gear window */}
            <rect x="94" y="106" width="52" height="38" rx="5" fill="#4C1D95" />
            {/* Interlocking brass gears */}
            <circle cx="112" cy="122" r="10" fill="#F59E0B" />
            <circle cx="112" cy="122" r="4" fill="#4C1D95" />
            <circle cx="128" cy="128" r="8" fill="#FBBF24" />
            <circle cx="128" cy="128" r="3" fill="#4C1D95" />

            {/* Winding Key on side */}
            <path d="M 68 116 L 78 116" stroke="#F59E0B" strokeWidth="3" />
            <circle cx="64" cy="116" r="5" fill="none" stroke="#F59E0B" strokeWidth="2.5" />

            {/* Arms with ball joints */}
            <rect x="68" y="102" width="10" height="26" rx="4" fill="#A78BFA" transform="rotate(15 68 102)" />
            <rect x="162" y="102" width="10" height="26" rx="4" fill="#A78BFA" transform="rotate(-15 162 102)" />

            {/* Legs */}
            <rect x="96" y="152" width="16" height="16" rx="3" fill="#4C1D95" />
            <rect x="128" y="152" width="16" height="16" rx="3" fill="#4C1D95" />
          </svg>
        );

      case 'puzzle':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Magnetic Tangram Tray */}
            <rect x="60" y="30" width="120" height="120" rx="8" fill="#312E81" stroke="#4338CA" strokeWidth="2" />
            {/* Tangram Geometric Pieces in Contrast Timbers */}
            <polygon points="65,35 175,35 120,90" fill="#4F46E5" />
            <polygon points="65,35 65,145 120,90" fill="#818CF8" />
            <polygon points="120,90 175,90 147.5,117.5" fill="#C7D2FE" />
            <polygon points="65,145 120,145 92.5,117.5" fill="#6366F1" />
            <polygon points="120,145 175,145 175,90 120,90" fill="#F59E0B" opacity="0.9" />
          </svg>
        );

      case 'blocks':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Ground plinth */}
            <line x1="30" y1="160" x2="210" y2="160" stroke="#CA8A04" strokeWidth="3" strokeLinecap="round" />
            
            {/* Base Block Tier */}
            <rect x="50" y="130" width="40" height="30" rx="2" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
            <rect x="90" y="130" width="60" height="30" rx="2" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <rect x="150" y="130" width="40" height="30" rx="2" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
            
            {/* Roman Arch Middle Tier */}
            <rect x="70" y="100" width="25" height="30" rx="2" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
            <rect x="145" y="100" width="25" height="30" rx="2" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
            {/* Arch bridge */}
            <path d="M 65 100 L 175 100 L 175 88 L 65 88 Z" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
            <path d="M 95 100 A 25 25 0 0 1 145 100 Z" fill="#FAF8F5" />

            {/* Columns & Spires */}
            <rect x="80" y="58" width="18" height="30" rx="2" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <polygon points="89,38 78,58 100,58" fill="#B45309" />

            <rect x="142" y="58" width="18" height="30" rx="2" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <polygon points="151,38 140,58 162,58" fill="#B45309" />

            {/* Central Tower */}
            <rect x="108" y="52" width="24" height="36" rx="2" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
            <polygon points="120,24 104,52 136,52" fill="#DC2626" />
          </svg>
        );

      case 'alpaca':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Fluffy cute alpaca */}
            <circle cx="120" cy="95" r="55" fill="#FEF3C7" opacity="0.3" />
            {/* Long Neck & Head */}
            <path d="M 85 140 L 95 65 C 95 50, 115 45, 125 55 C 135 65, 130 85, 120 140 Z" fill="#D97706" />
            {/* Ears */}
            <polygon points="98,50 94,30 108,46" fill="#B45309" />
            <polygon points="118,48 126,28 128,46" fill="#B45309" />
            
            {/* Fluffy fleece crown */}
            <circle cx="108" cy="46" r="10" fill="#FDE68A" />
            <circle cx="116" cy="48" r="8" fill="#FDE68A" />

            {/* Face */}
            <circle cx="106" cy="62" r="3" fill="#451A03" />
            <path d="M 98 72 Q 106 78 114 72" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Body */}
            <rect x="100" y="110" width="70" height="42" rx="18" fill="#D97706" />
            {/* Andean Woven Scarf */}
            <rect x="102" y="98" width="28" height="10" rx="3" fill="#DC2626" />
            <line x1="102" y1="103" x2="130" y2="103" stroke="#FBBF24" strokeWidth="2" />
            <line x1="110" y1="108" x2="110" y2="124" stroke="#DC2626" strokeWidth="4" />

            {/* Legs */}
            <rect x="110" y="145" width="8" height="24" rx="3" fill="#B45309" />
            <rect x="125" y="145" width="8" height="24" rx="3" fill="#B45309" />
            <rect x="145" y="145" width="8" height="24" rx="3" fill="#B45309" />
            <rect x="158" y="145" width="8" height="24" rx="3" fill="#B45309" />
          </svg>
        );

      case 'microscope':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Base horseshoe */}
            <rect x="70" y="152" width="100" height="14" rx="6" fill="#047857" stroke="#064E3B" strokeWidth="1.5" />
            {/* Arm curved pillar */}
            <path d="M 150 152 C 165 140, 165 95, 145 75 L 120 75" stroke="#047857" strokeWidth="14" strokeLinecap="round" fill="none" />
            {/* Focus Dial */}
            <circle cx="152" cy="118" r="8" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />

            {/* Optical Eyepiece tube */}
            <g transform="rotate(-15 105 85)">
              <rect x="95" y="25" width="16" height="35" rx="3" fill="#064E3B" />
              <rect x="92" y="20" width="22" height="8" rx="2" fill="#34D399" />
              {/* Turret revolving nosepiece */}
              <circle cx="103" cy="72" r="14" fill="#064E3B" />
              <rect x="98" y="82" width="10" height="16" fill="#F59E0B" />
              <rect x="110" y="76" width="9" height="12" fill="#94A3B8" transform="rotate(30 110 76)" />
            </g>

            {/* Specimen Stage with clips */}
            <rect x="75" y="105" width="55" height="7" rx="2" fill="#1E293B" />
            {/* Glass Slide specimen */}
            <rect x="88" y="102" width="30" height="3" fill="#67E8F9" opacity="0.9" />
            <circle cx="103" cy="103.5" r="2" fill="#E11D48" />

            {/* Mirror / Condenser illuminator */}
            <circle cx="102" cy="132" r="8" fill="#FDE68A" stroke="#CA8A04" strokeWidth="1.5" />
          </svg>
        );

      case 'theater':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-sm select-none" fill="none">
            {/* Stage frame arch */}
            <rect x="40" y="30" width="160" height="130" rx="8" fill="#7E22CE" stroke="#581C87" strokeWidth="2" />
            {/* Arch header */}
            <path d="M 40 50 Q 120 20 200 50 L 200 30 L 40 30 Z" fill="#9333EA" />
            <circle cx="120" cy="38" r="6" fill="#FDE68A" />

            {/* Inner Stage Backdrop */}
            <rect x="52" y="52" width="136" height="98" rx="4" fill="#1E1B4B" />
            {/* Little backdrop stars */}
            <circle cx="75" cy="70" r="1.5" fill="#FDE68A" />
            <circle cx="160" cy="75" r="1.5" fill="#FDE68A" />
            <circle cx="120" cy="65" r="2" fill="#FBBF24" />

            {/* Crimson Velvet Curtains swagged */}
            <path d="M 52 52 Q 80 80 52 130 L 52 52 Z" fill="#DC2626" />
            <path d="M 188 52 Q 160 80 188 130 L 188 52 Z" fill="#DC2626" />
            <path d="M 52 52 Q 120 70 188 52 L 188 52 L 52 52 Z" fill="#B91C1C" />

            {/* Wooden Stage Floor plinth */}
            <rect x="35" y="145" width="170" height="18" rx="3" fill="#D97706" />
            <line x1="35" y1="152" x2="205" y2="152" stroke="#B45309" strokeWidth="1" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center text-amber-800">
            <span className="text-4xl">🧸</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}>
      {renderGraphic()}
    </div>
  );
}
